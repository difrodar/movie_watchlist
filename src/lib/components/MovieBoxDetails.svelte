<script>
    let { movie }=$props();

    function getName(i){
        return movie.Cast[i]
    }
</script>
<div><h3>{movie.title}</h3>
<a href={"/movies/" + movie._id}><img src={movie.img} class="image-container img" width="100%" alt="/images/placeholder.jpg"></a>
    
        <p>Jahr: {movie.year}</p>
        <p>Dauer: {movie.duration}</p>
        <p>Cast:</p>
        <ul>
        <li>{getName(0)}</li>
        <li>{getName(1)}</li>
        <li>{getName(2)}</li>
        </ul>


        

</div>

<style>
    div{
        border: 1px solid black;
        padding: 5px;
        height: 100%;
        background: #1e293b;
        border-radius: 10px;
        text-align: left;

    }
    h3{
        color: #f1f5f9;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    p,li,ul {
        color: #94a3b8;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    h3:hover{
        color: #3b82f6;
    }
</style>