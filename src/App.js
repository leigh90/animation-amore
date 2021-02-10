import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/Input';
import UserOutput from './UserOutput/Output';


class App extends Component {

  state = {
    movies: [
      {title: "The Incredibles", year:2004},
      {title:"WALL-E", year:2008},
      {title:"Shrek",year:2001}
    ]
  }
  switchMovieHandler = (newMovie) =>{
    this.setState({
      movies:[
        {title: "The Incredibles", year:2004},
        {title: newMovie, year:2007},
        {title:"Shrek",year:2001}

      ]
    })
  }

  movieChangedHandler = (event) =>{
    this.setState({
      movies:[
        {title: event.target.value, year:2004},
        {title:"WALL-E", year:2008},
        {title:"Shrek",year:2001}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <button style={style} onClick={this.switchMovieHandler.bind(this,"Ratatouille")} >New Movie</button>
        <UserOutput title={this.state.movies[0].title} age={this.state.movies[0].year}/>
        <UserOutput title={this.state.movies[1].title} age={this.state.movies[1].year} />
        <UserOutput title={this.state.movies[2].title} age={this.state.movies[2].year}/>
        
        <UserInput title={this.state.movies[0].title} age={this.state.movies[0].year} changed={this.movieChangedHandler}/>
        
      </div>
    );
  }
  
  
}

export default App;
