import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './Request'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);
   const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(requests.fetchHorrorMovies);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
            return request
        } 
        fetchData();
    }, []);

    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}
        >
            <div className="banner_content">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            <div className="banner_description">{truncate(movie?.overview, 200)}</div>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
