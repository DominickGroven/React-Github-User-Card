import './App.css';
import React, { Component } from "react";
import gitCard from './ApiCall'
import Display from './Display'


class App extends Component{

  constructor(){
    super();
    this.state={

      gitUser: [],
      input: "DominickGroven",

       }
    }

    onChange = e =>{
      this.setState({
        input: e.target.value,
      });
    };

    onSubmit = (e) =>{
      e.preventDefault()
      gitCard(this.state.input).then((result) => {
        this.setState({
          gitCard:result.data
        })
      })
      .catch((error)=> {
        console.log("Error", error.response)
      })

    }

    componentDidMount(){
      fetch('https://api.github.com/users/DominickGroven/followers')
      gitCard(this.state.input).then((result)=>{
        this.setState({
          gitCard: result.data
          })
      })
    }

    render(){
      return(
        <div>
          <div>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                value={this.state.input}
                onChange={this.onChange}
                placeholder="Enter Github username"
              />
              <button>Submit</button>
            </form>
          </div>
          {this.state.gitCard === undefined ? (
            <h2>Loading...</h2>
          ) : (
              <div>
                <Display data={this.state.gitCard} />
              </div>
            )}
        </div>
      )
    }
}

export default App;
