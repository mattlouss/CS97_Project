import React from "react";
import fb from '../firebase_config.js'

export default class SignupPage extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      email: null,
      password: null,
      confirm: null
    };
  }

  async onSubmit(event) { 
    event.preventDefault();

    const userData = {
      email: this.state.email, 
      password: this.state.password, 
      confirm: this.state.confirm
    };

    if (userData.password.length < 6) {
      alert("Password must be a minimum of 6 characters");
      return;
    }

    if(userData.password !== userData.confirm) {
      alert("Password and confirm password must match.");
      return;
    }
    await fb.auth().createUserWithEmailAndPassword(userData.email, userData.password).then(()=>{
      window.location.replace('LoginForm'); 
    }).catch((error) => {
      alert("Not in email address format or email registered already");
      return;
    });
  }

  render() {
    return(<>
      <meta charSet="UTF-8" />
      <title>My Calendar</title>
      <link rel="stylesheet" href="forms.css" />    
      <a href="/"><h1 id="header"> My Calendar </h1></a> <br></br><br></br><br></br>
      <div id="register">
        <form onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="register_un"> Select an email address: </label>
          <input type="signin" name="register_un" placeholder="Email address" 
           onChange={({target}) => this.setState({email: target.value})} autoComplete="off" required /><br /><br />

          <label htmlFor="register_pw"> Select a password: </label> 
          <input type="signin" name="register_pw" placeholder="Password (min length: 6)"
           onChange={({target}) => this.setState({password: target.value})} autoComplete="off" required /><br />

          <label htmlFor="confirm_pw"> Confirm password: </label> 
          <input type="signin" name="confirm_pw" placeholder="Confirm password"
           onChange={({target}) => this.setState({confirm: target.value})} autoComplete="off" required /><br /> <br></br><br></br><br></br>

          <button type="submit"> Create Account </button>
          
          <p className="to_register"> Already have an account? <a href="LoginForm" className="to_register">Login Here</a><br></br><br></br>
          
          </p>
        </form>
      </div>
    </>)
  }
}
