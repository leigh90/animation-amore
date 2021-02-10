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
  render() {
    return (
      <div className="App">
        <button onClick={this.switchMovieHandler.bind(this,"Ratatouille")} >New Movie</button>
        <UserOutput title={this.state.movies[0].title} age={this.state.movies[0].year}/>
        <UserOutput title={this.state.movies[1].title} age={this.state.movies[1].year}/>
        <UserOutput title={this.state.movies[2].title} age={this.state.movies[2].year}/>
        
        <UserInput/>
        
      </div>
    );
  }
  
  
}

export default App;
