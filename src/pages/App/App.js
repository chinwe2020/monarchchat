import React, { Component }from 'react';
import './App.css';
import '../..';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
// import Chat from '../../pages/ProfilePage/ProfilePage';


class App extends Component {

responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:3000/",
      data: {}
    })
}

responseErrorGoogle = (response) => {

}
  render(){
  return (
    <div>
      <header>
      <NavBar />
      </header>

      <Route exact path="/profile" render={()=>
          <ProfilePage />
          }/>
      
  

      <div>
        <h1>Welcome to ChatturFly</h1>
      </div>

      <footer>
        &nbsp;
        <h5>App coded in <span>React</span> by <span>Tech Monarchs</span> </h5>
      </footer>
    </div>
    );
  }
}

export default App;
