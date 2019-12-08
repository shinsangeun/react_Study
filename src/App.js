import React from 'react';
import { Component } from 'react'
import './App.css';
import Movie from './Movie';

class App extends Component {

    //Render: componentWillMount() -> render() -> componentDidMount()
    //Update

    state = {
        greeting: 'Hello',
        movies: [
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
    };

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                movies:[
                ...this.state.movies,
                {title: "test",
                poster:"http://images.christiantoday.co.kr/data/images/full/323947/2.jpg?w=654"
                }
                ]
            })
        },1000)
    }

    render() {
        return (
            <div className="App">
                {this.state.greeting}
                {this.state.movies.map((movie, index) => {
                    return <Movie title = {movie.title} poster = {movie.poster} key={index}/>
                })}
            </div>
        );
    }
}

export default App;
