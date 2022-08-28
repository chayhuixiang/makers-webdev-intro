<script>
  export let id
  export let label
  export let type
</script>

<label for={id}>{label}: </label>
<input type={type} name={id} id={id} />

<style>
  input {
    display:block;
    width:100%;
    padding:.2em;
    margin: .2em 0 .6em;
    font-size:1.2em;
    border: 2px solid black;
  }
</style>
