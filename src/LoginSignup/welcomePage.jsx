import React from "react";
import wallpaper from '../wallpaper.jpg';


export default class WelcomePage extends React.Component {
  render() {
    return(<>
      <meta charSet="UTF-8" />
      <title>Welcome To My Calendar</title>
      <div>
      </div>
      <link rel="stylesheet" href="forms.css" />

      <div className="header_description">welcome to my calendar</div>    
      <div className="main_title"> <strong className="white"></strong>WELCOME TO GOCAL</div>   
      <div className="description"> a new way to plan your life </div>   
    
      <a className="signup" href="SignupForm"><button> sign up </button></a>           <a className="login" href="LoginForm"><button> login </button></a> <br></br>
      
      <a className="cal" href="calendar"><button> Calendar (testing) </button></a>
    </>);
  }
}
