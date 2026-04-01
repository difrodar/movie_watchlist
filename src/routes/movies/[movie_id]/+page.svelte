<script>
    let {data} = $props();
    import "../../styles.css"
    import MovieBoxDetails from "$lib/components/MovieBoxDetails.svelte";
</script>
<a href="../movies">Back</a>
<div>
<MovieBoxDetails movie={data.movie}/>
</div>