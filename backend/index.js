const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require("./secret/makers-webdev-intro-04411c9f5353.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const queryCollection = async () => {
  const snapshot = await db.collection('attendance').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

const addDocument = async(data) => {
  const docRef = db.collection("attendance");
  await docRef.add(data);
}

app.post("/", (req, res) => {
  console.log(req.body);
  addDocument(req.body);
  res.send("Success!");
});

app.get("/", (req, res) => {
  queryCollection();
  res.send("Check Console");
});

app.listen(port, () => {
  console.log(`App Running on port ${port}.`);
});
