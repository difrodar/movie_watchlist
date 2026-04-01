<script>
    import MovieBox from "$lib/components/MovieBox.svelte";
    let {data} = $props();
    import "../styles.css"

    let filterByWatchlist = $state(false);
</script>
<br>
<div class="row g-2">
<a class="btn btn-primary" href="/movies/create" role="button">Add New Movie</a>
<div class="form-check mt-3">
  <input  bind:checked={filterByWatchlist} class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label style="color:white" class="form-check-label" for="checkDefault">
    Show only movies on watchlist
  </label>
</div>
{#each data.movies as movie}
{#if !filterByWatchlist ||(filterByWatchlist && movie.watchlist)} 
<div class="col-4">
<MovieBox movie={movie}/>
</div>
{/if}
{/each}
</div>
