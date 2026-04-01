<script>
    import { enhance } from "$app/forms";

    let { movie } = $props();
</script>

<div>
    <h3>{movie.title}</h3>

    <a href={"/movies/" + movie._id}
        ><img
            src={movie.img}
            class="image-container img"
            width="100%"
            alt=""
        /></a
    >

    <p>Jahr: {movie.year}<br />Dauer: {movie.duration}</p>

    {#if movie.watchlist === true}
        <form method="POST" action="?/removeFromWatchList" use:enhance>
            <input name="id" type="hidden" value={movie._id} />
            <button class="btn btn-danger">Remove from watchlist</button>
        </form>
    {:else}
        <form method="POST" action="?/addToWatchList" use:enhance>
            <input name="id" type="hidden" value={movie._id} />
            <button class="btn btn-success">Add to watchlist</button>
        </form>
    {/if}
    <br />
</div>

<style>
    div {
        border: 1px solid black;
        padding: 5px;
        height: 100%;
        background: #1e293b;
        border-radius: 10px;
    }
    h3 {
        color: #f1f5f9;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
    }
    p {
        color: #94a3b8;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
    }
    h3:hover {
        color: #3b82f6;
    }
</style>
