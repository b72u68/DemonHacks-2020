import React, { useState, Component } from 'react';
import Button from 'react-bootstrap/Button'
import SearchBox from './components/Searchbox';
import WelcomeMsg1 from './components/WelcomeMsg1'
import ReactTimeout from 'react-timeout'
import './components/searchbox.css'
import './components/button.css'
import './App.css'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchField: '',
      visible: true,
    };
  }

  handleClick(){
    this.setState({
      visible: false,
    });
  }
  
  render() {
    return(
      <div className="App">

        <div
        className={this.state.visible ? "test-visible" : "test-hidden"}
        onClick={this.handleClick.bind(this)}
        >
          <WelcomeMsg1 />
          <p>Click to begin</p>
        </div>

        <header className="App-header">

          <div className="titles">
            <h1 className="App-title">coFit</h1>
            <p className="sub-title">Staying fit during COVID-19</p>
          </div>

        </header>
        <div className="outer">
          <div className="middle">
            <div className="inner">
              <p className="Options">
              <div className="Select-diff">
                <h2>Search for an exercise:</h2>
                
                <br>
                </br>
                
                <SearchBox className="search--primary" placeholder={"Downward-Facing Dog..."} handleChange={(e) => this.setState({searchField:e.target.value})}/>
                &nbsp;&nbsp;
                <Button type="button" className="btn--primary--solid" style={{height: '30px', width: '75px'}}>Search</Button>
                </div>
                
                <br></br>
                
                <h2>OR</h2>
                <div className="Select-diff">
                  <h2>Select a difficulty:</h2>
                  <br></br>
                  <>
                  <Button type="button" className="btn--primary--solid" style={{height: '75px', width: '150px'}}>Beginner</Button>
                  &nbsp;&nbsp;
                  <Button type="button" className="btn--primary--solid" style={{height: '75px', width: '150px'}}>Intermediate</Button>
                  &nbsp;&nbsp;
                  <Button type="button" className="btn--primary--solid" style={{height: '75px', width: '150px'}}>Advanced</Button>
                  &nbsp;&nbsp;
                  <Button type="button" className="btn--primary--solid" style={{height: '75px', width: '150px'}}>All</Button>
                  </>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

/*<WelcomeMsg1 />
  <Modal1 />*/

 /*
        <Modal isOpen={true}>
          <h2>Namaste</h2>
          <p>Modal Body</p>
        </Modal>
        */
