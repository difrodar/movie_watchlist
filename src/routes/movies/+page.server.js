import db from "$lib/db.js"

export async function load() {
    return {
        movies: await db.getMovies()
    }
}

export const actions = {
 addToWatchList: async ({request}) => {
    console.log("add");

    let data= await request.formData();
    let id = data.get("id");

    let movie ={
        _id: id ,
        watchlist: true
    }
    db.updateMovie(movie)

 },
 removeFromWatchList: async ({request}) => {
    console.log("remove")

    let data= await request.formData();
    let id = data.get("id");

    let movie ={
        _id:  id,
        watchlist: false
    }
    db.updateMovie(movie)
}
}