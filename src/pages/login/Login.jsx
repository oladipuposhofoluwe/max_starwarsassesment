import React, { Component } from "react";
import "./login.css";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    
  }

  



  // const [signIn, setSignIn] = useState('')
  // const [password, setPaasword] = useState('')

  handleSubmit = (e) => {

    e.preventDefault(e);
    let error = {};
    // const passwordRegex = /(?=,*[0-9])/;
    // if(this.state.password.length < 8 || this.state.password.con ){
    //     error.password = "password must be atleast 8 character long"
    // } else if (!passwordRegex.test(this.state.password)) {
    //   error.password = "invalid password, must contain one number"
    //   return error;
    // } else {
    //   this.props.history.push("/")
    // }

  console.log("its clicking")

  };


  render() {


    const { email, password } = this.state;
    return (
      <div className="login">
        <div className="login_wrapper-left">
          <h1 className="left-side__text">
            Welcome to Star wars the clone wars
          </h1>
          <div className="login_wrapper-leftside_img">
            <img
              className="login_img "
              src="/images/undraw_To_the_stars_qhyy.svg"
              alt=""
            />
          </div>
        </div>

        <div className="right_side">
          <img
            className="right_side-icon"
            src="/images/undraw_Astronaut_xko2.svg"
            alt=""
          />

          <div className="login_wrapper-right">
            <h2>Sign in to continue your account</h2>

            <form  onSubmit={this.handleSubmit}>
              <div>
                <div className="sign_in">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={(e)=>this.setState({email: e.target.value})}
                    value={email}
                    required
                  />
                </div>

                <div className="sign_in">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter strong password"
                    onChange={(e)=>this.setState({password: e.target.value})}
                    required
                  />
                </div>
                <button type="submit" className="button" onClick={(e) => this.handleSubmit(e)}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
}
export default Login;
