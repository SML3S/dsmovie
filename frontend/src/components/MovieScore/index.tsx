import MovieStars from "components/MovieStars";
import './styles.css';


function MovieScore(movie: any){
    const score = movie.score;
    const count = movie.count;
    return(
        <div className="dsmovie-score-container">
    <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <MovieStars  score={movie.score}/>
    <p className="dsmovie-score-count">{count} avaliações</p>
</div>
    );
}

export default MovieScore;