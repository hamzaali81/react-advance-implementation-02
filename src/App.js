import React, { Component } from 'react';
//Advantage
//State multiple accesible
// stae update then again run render function
//every component one(own) state
//function two purpose 
//1.JSX render
//2.Event apply in function fire
//Component mein jitna bhi functions bana ga wo direct this keyword ka sath access nhi hongy this ka sath acccess honga
//JIS function meinthis mil jay wo binding khelata hai



class App extends Component {
  constructor(){
    super();
    this.state={
      // text:'Sylani my jan',
      // condition:true
      // family:{
      //   brother: 3,
        

      // }
      // text: 'Zebra'
    }
  // this.stateUpdate=this.stateUpdate.bind(this);
  // this.stateUpdate=this.stateUpdate.bind(this);
  }




stateUpdate(el){
  console.log("hello",this);
  // this.setState({
    
  // })
}
// updateState(){
//   if(this.state.condition){

//     this.setState({
//       text:'I love Sylani',
//       condition: false
//     })
//   }
//   else{
//     this.setState({
//       text:'Sylani meri jaan!',
//       condition: true
//     })
//   }
// }
// checkJSX(){
//   return(
//     <h1>JSX Work ..........!</h1>
//   )
// }

//function render ka honga wo ek sath or baki render ka uper

//{{}} {}expression {}object

//super call component constructor
//     updateState(){
//       console.log("one");
//       if(this.state.condition){
//         console.log("two");
//         this.setState({
//        text:'Sylani Pakistan',
//       //  condition: false
// condition: !this.state.condition,
// family:{
//   brother: 3,
  
// }
//     })
//       }
//       else{
//         console.log("hello");
//         this.setState({
//         text: "Sylani meri jaan",
//           condition: true
//         })
//       }
//     }

// mainheader(){
//     return(
//     <h1>Hello World Pakistan</h1>
//     )
  
//   }



  render() {
    return (
      <div>
{/* <h1>{this.state.text}</h1> */}
{/* <button onClick={()=>{this.stateUpdate()}}>Click Me</button> */}
{/* onclick this not component this */}

{/* function mein onclick ka mila ga ar () mein component ka mila ga return*/}
{/* <button onClick={this.stateUpdate}>Click Me</button> */}
<button onClick={this.stateUpdate.bind(this,"hello")}>Click Me</button>

      {/* <h1>{this.state.text}</h1>
        <button onClick={()=>{this.updateState()}}>Hello Btn</button>
        <p>{this.checkJSX()}</p> */}

        {/* <h1>{this.state.text}</h1> */}
        {/* <button onClick={()=>{this.updateState()}}>Hello Btn</button>
        <p>{this.state.family && this.state.family.brother }</p>
   <h2>{this.mainheader()}</h2> */}
      </div>
    );
  }
}


export default App;