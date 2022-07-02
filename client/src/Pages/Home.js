import React, { useEffect } from "react";


const baseURL = 'localhost:8080/movies'

const Home = () => {

    var movieData = []
    const listItems = movieData.map((movie) => <li key={movie.title}>{movie.title}</li>)

    useEffect ( () => {
        fetch (baseURL)
            .then (res => res.json())
            .then (data => {
                console.log(data)
                movieData = data                
            })
            .then(console.log(data))
        })

    return (
        <div>
            {listItems}
        </div>
    )
}

export default Home