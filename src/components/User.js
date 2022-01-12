import React from 'react';

class User extends React.Component {
   

    render() {
        return(<div className='userContainer'>
        
            <div className='userImageContainer'>
                <img src={this.props.user.avatar_url} width='300'/>
            </div>

            <div className='userInfoContainer'>
                <a target='blank' href={`https://github.com/${this.props.user.login}`}><h2>{this.props.user.name}</h2></a>
                <h3>@{this.props.user.login}</h3>
                <h3>Total Repos: {this.props.user.public_repos}</h3>
                <h3>Total Followers: {this.props.user.followers}</h3>
            </div>

       </div>)
    }
}

export default User;