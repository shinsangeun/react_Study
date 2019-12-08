import React from 'react';
import {Component} from 'react'
import './App.css';
import Movie from './Movie';

class App extends Component {

    //Render: componentWillMount() -> render() -> componentDidMount()
    //Update

    state = {};

    componentDidMount() {
        setTimeout(() => {
            this.setState({
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
                    },
                    {
                        title: "test",
                        poster: "http://images.christiantoday.co.kr/data/images/full/323947/2.jpg?w=654"
                    }

                ]
            })
        }, 4000)
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
        });
        return movies
    };

    render() {
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : 'Loading...'}
            </div>
        );
    }
}

export default App;
