import './App.css'
import Input from './Components/Input'

function App() {
  const submitFormHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
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
  return (
    <main>
      <h1>Attendance Form</h1>
      <form name="attendance" onSubmit={submitFormHandler}>
        <Input id="name" label="Full Name" type="text" />
        <Input id="email" label="Email" type="email" />
        <label for="message">Message: </label>
        <textarea rows = "5" name ="message" id="message" ></textarea>
        <input type="submit" />
      </form>
    </main>
  )
}

export default App
