import React from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';
import '../..';
import axios from 'axios';

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
    <div className="App">
      <div className = "col-md=6 offset-md-3 text-center">
        <h1>Login With Google</h1>
              <GoogleLogin
                  clientId="104089845067-92q1i9caoq0jp49p3iucgkdm61rbcfal.apps.googleusercontent.com"
                  buttonText="Login With Google"
                  onSuccess={responseSuccessGoogle}
                  nFailure={responseErrorGoogle}
                  cookiePolicy={'single_host_origin'}
              />      
          );
      </div>
    </div>
  );
}

export default App;