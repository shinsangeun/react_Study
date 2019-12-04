import React from 'react';
import './Movie.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
         <div>
            <MoviePoster poster={this.props.poster}/>
            <h1>{this.props.title}</h1>
        </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <img src={this.props.poster}/>
            </div>
        );
    }
}

export default Movie;
