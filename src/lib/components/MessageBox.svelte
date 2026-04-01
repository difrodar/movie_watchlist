<script>
    //let message= $state("Hallo");
    let { message }=$props();
</script>

<div>
    <h1>Message</h1>
    <p>{message.text}</p>
    <p>Sender: {message.sender}</p>
</div>

<style>
    div{
        border: 1px solid black;
        padding: 5px;
    }
</style>