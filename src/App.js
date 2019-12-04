import React from 'react';
import { Component } from 'react'
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "http://images.christiantoday.co.kr/data/images/full/323947/2.jpg?w=654"
    },
    {
        title: "Frozen",
        poster: "http://images.christiantoday.co.kr/data/images/full/323947/2.jpg?w=654"
    },
    {
        title: "Oldboy",
        poster: "http://images.christiantoday.co.kr/data/images/full/323947/2.jpg?w=654"
    },
    {
        title: "기생충",
        poster: "http://images.christiantoday.co.kr/data/images/full/323947/2.jpg?w=654"
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
                {movies.map((movie, index) => {
                    return <Movie title = {movie.title} poster = {movie.poster} key={index}/>
                })}
            </div>
        );
    }
}

export default App;
