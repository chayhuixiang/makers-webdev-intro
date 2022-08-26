const sendPostReq = async () => {
  const formElement = document.querySelector("form");
  const formData = new FormData(formElement);
  const dataToSend = Object.fromEntries(formData);
  let response = await fetch('https://Makers-Webdev-Intro.chayhuixiang.repl.co', {
    method: 'POST',
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json"
    }
  });
  let result = await response.text();
  alert(result);
}

function validateForm() {
  if (validateInput("name") && validateInput("email")) {
    sendPostReq();
  }
}

function validateInput(fieldName) {
  let element = document.forms["attendance"][fieldName];
  let x = element.value;
  if (x == "") {
    alert(fieldName + " must be filled out");
    element.style.borderColor = "red";
    return false;
  } else {
    element.style.borderColor = "black";
    return true;
  }
}
