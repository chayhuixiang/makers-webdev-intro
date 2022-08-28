<script>
  import Input from "./lib/Input.svelte";
  const onSubmit = async (event) => {
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
</script>

<main>
  <h1>Attendance Form</h1>
  <form name="attendance" on:submit|preventDefault={onSubmit}>
    <Input id="name" label="Full Name" type="text" />
    <Input id="email" label="Email" type="email" />
    <label for="message">Message: </label>
    <textarea rows="5" name ="message" id="message"></textarea>
    <input type="submit" />
  </form>
</main>

<style>
  main {
    width: 400px;
    background-color: white;
    padding: 0 1rem;
    box-shadow: 10px 10px;
    overflow: auto;
  }

  input, textarea {
    display:block;
    width:100%;
    padding:.2em;
    margin: .2em 0 .6em;
    font-size:1.2em;
    border: 2px solid black;
  }

  input[type=submit]{
    background: salmon;
    border:none;
    margin:1em 0;
    color:white;
    padding:1em;
    cursor: pointer;
  }

</style>
