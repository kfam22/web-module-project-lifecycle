import React from 'react';

class Follower extends React.Component {

    render() {
        return(
            <div className='follower'>
                <img src={this.props.follower.avatar_url} />
                <a target='blank' href={`https://github.com/${this.props.follower.login}`}><h4>@{this.props.follower.login}</h4></a>
            </div>
        )
    }
}

export default Follower;