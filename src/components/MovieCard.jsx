import "../css/MovieCard.css"
export function MovieCard({movie}){

    function onFavoriteClick(){
        alert("Clicked");
    }



    return <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}></button>
                     ♥
                </div>
            </div>
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>{movie.release_date}</p>

            </div>

    </div>

}
//export default MovieCard;