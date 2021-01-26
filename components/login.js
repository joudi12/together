import React, { Component } from "react";

class Login extends Component {
    state = {
        credentials: {username:'', password:''}
    }

    login = event =>{
       
        fetch('http://127.0.0.1:8000/api/v1/songs/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state.credentials)
        })
        .then(data =>data.json())
        .then(
            data => {
                console.log('hi')
                this.props.userLogin(data.token)

            }
        ).catch(error => console.error("here",error))
    
    }
    inputChanged = event =>{
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials : cred});
    }
    render() {
        return (
            <div>
                <h1> login user form</h1>
                <lable>
                    Username:
                    <input type="text" name="username"
                    value={this.state.credentials.username} 
                    onChange={this.inputChanged}/>
                </lable>
                <br/>
                <lable>
                    Password : 
                    <input type="password" name="password"
                    value={this.state.credentials.password} 
                    onChange={this.inputChanged}/>
                </lable>
                <br/>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}
export default Login;