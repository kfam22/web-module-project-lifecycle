import React from 'react';

class User extends React.Component {
   

    render() {
        return(<div>
        
            <div className='userImageContainer'>
                <img src={this.props.user.avatar_url} width='300'/>
            </div>

            <div className='userInfoContainer'>
                <h2>{this.props.user.name}</h2>
                <p>@{this.props.user.login}</p>
                <p>Total Repos: {this.props.user.public_repos}</p>
                <p>Total Followers: {this.props.user.followers}</p>
            </div>

       </div>)
    }
}

export default User;