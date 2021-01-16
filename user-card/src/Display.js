import React from 'react';

class Display extends React.Component{
    render(){
        return(
            <div>
                <h2>Welcome! {this.props.data.login}</h2>
                <img src={this.props.data.avatar_url} alt={"Profile Pic"}/>
                <p>Type: {this.props.data.type}</p>
                <p>Location: {this.props.data.location}</p>
                <p>Email: {this.props.data.email}</p>
                <p>Public Repo's : {this.props.data.public_repos}</p>
                <p>Followers: {this.props.data.followers}</p>
            </div>
        )
    }
}

export default Display;