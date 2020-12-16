import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import ProfilePage from '../ProfilePage/ProfilePage'
import HomePage from '../HomePage/HomePage'

function App() {

  const responseSuccessGoogle = (response) => {
      console.log(response);
      axios({
        method: "POST",
        url: "http://localhost:3000/",
        data: {}
      })
  }

  const responseErrorGoogle = (response) => {
    
  }

  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>

      <Switch>
        <Route exact path='/' render={() => <><HomePage /> </>} />
        <Route exact path='/profile' render={() => <ProfilePage />} />
      </Switch>
    
    <div className="App">
      <div className = "col-md=6 offset-md-3 text-center">
        <h1>Login With Google</h1>

        ReactDOM.render(
              <GoogleLogin
                  clientId="104089845067-92q1i9caoq0jp49p3iucgkdm61rbcfal.apps.googleusercontent.com"
                  buttonText="Login With Google"
                  onSuccess={responseSuccessGoogle}
                  nFailure={responseErrorGoogle}
                  cookiePolicy={'single_host_origin'}
              />,
        document.getElementById('googleButton')
                );
      </div>
    </div> 

    <footer>
        &nbsp;
        <h5>App coded in <span>React</span> by <span>Tech Monarchs</span> </h5>
      </footer>
    <>

  );
}

export default App;
