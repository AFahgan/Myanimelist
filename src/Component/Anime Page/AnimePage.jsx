import React, { useState, useEffect } from "react";
import "./AnimePage.css";

function AnimePage(props) {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const id = props.id;
    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?page[limit]=12&filter%5Bid%5D=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setAnime(data);
                setIsLoading(false);
                console.log(data.data[0].attributes.titles.en_jp);
            });
    }, [id]);


    
  return (
    <div>
        {isLoading ? (
            <div className="loading">Loading...</div>
        ) : (
            //Anime Card
            // Get Data
            // one Anime only
         <div className="pageContainer">
                <div className="animePage">
                <div className="imgAnime">
                    <img src={anime.data[0].attributes.posterImage.small} alt="anime" />
                </div>
                <div className="pfooter">
                    <div className="animePageTitle">
                        {anime.data[0].attributes.titles.en_jp}
                    </div>
                    <div className="synopsis">
                        {anime.data[0].attributes.synopsis}
                    </div>
               
                        <div className="episodes">
                        {anime.data[0].attributes.episodeCount}
                        </div>
                        <div className="startDate">
                        {anime.data[0].attributes.startDate}
                        </div>
                        <div className="endDate">
                        {anime.data[0].attributes.endDate}
                        </div>
                        <div className="ratingRank">
                        {anime.data[0].attributes.ratingRank}
                        </div>
                        <div className="averagePageRating">
                        {anime.data[0].attributes.averageRating}
                    </div>



                </div>
            </div>
            </div>
        )}

    </div>
    );
}

export default AnimePage