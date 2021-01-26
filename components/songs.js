import React, { Component } from "react";

class Songs extends Component {

    state={
        songs:[]
    }

    loadsongs = () =>{
        fetch('http://127.0.0.1:8000/api/v1/songs/',{
            method:'GET',
            headers:{'Content-Type':'application/json',
                Authorization :`Token  ${this.props.token}`        
        },
            body:JSON.stringify(this.state.credentials)
        })
        .then(data =>data.json())
        .then(
            data => {
               this.setState({songs:data})

            }
        ).catch(error => console.error("here",error))


    }
   
    render() {
        return (
            <div>
                    <h1>songs</h1>
                    {this.state.songs.map(book=>{
                        return <h3 key={songs.id}>{songs.title}</h3>
                    })}
                    <button onClick={this.loadsongs} >Load songs</button>
            </div>
        );
    }
}

export default Songs;