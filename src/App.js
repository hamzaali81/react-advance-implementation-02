import React, { Component } from 'react';
//Advantage
//State multiple accesible
// stae update then again run render function
//every component one(own) state
//function two purpose 
//1.JSX render
//2.Event apply in function
//Component mein jitna bhi functions bana ga wo direct access nhi hongy this ka sath acccess honga

class App extends Component {
  constructor(){
    super();
    this.state={
      text:'Sylani my jan',
      condition:true
    }
  }

updateState(){
  if(this.state.condition){

    this.setState({
      text:'I love Sylani',
      condition: false
    })
  }
  else{
    this.setState({
      text:'Sylani meri jaan!',
      condition: true
    })
  }
}
checkJSX(){
  return(
    <h1>JSX Work ..........!</h1>
  )
}

  render() {
    return (
      <div>
      <h1>{this.state.text}</h1>
        <button onClick={()=>{this.updateState()}}>Hello Btn</button>
        <p>{this.checkJSX()}</p>
      </div>
    );
  }
}

export default App;