import React , {Component} from "react";
import Lottery from "./Lottery";

class App extends Component{
  render(){
    return(
      <div>
          <Lottery />
          <Lottery title = {"Daily Lotto"} numBalls = {4} />
      </div>
      
    )
  }
}

export default App;