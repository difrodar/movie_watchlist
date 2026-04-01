<script>
    let {data} = $props();
    import "../../styles.css"
</script>
<div>
<form method="POST" action="?/create">
<div class="mb-3">
<label for="" class="form-label">Name</label>
<input name="title" class="form-control" type="text"/>
</div>
<div class="mb-3">
<label for="" class="form-label">Year</label>
<input name="year" class="form-control" type="text"/>
</div>
<div class="mb-3">
<label for="" class="form-label">Duration</label>
<input name="duration" class="form-control" type="text"/>
</div>
<div class="mb-3">
<label for="" class="form-label">Image-URL</label>
<input name="imglink" class="form-control" type="text"/>
</div>
<button type="submit" class="btn btn-primary">Add Movie</button>
</form>
</div>

<style>
    div{
        border: 1px solid black;
        padding: 5px;
        height: 100%;
        background: #1e293b;
        border-radius: 10px;
        color: white;
        text-align: left;
    }
    input{
        color: black;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

</style>