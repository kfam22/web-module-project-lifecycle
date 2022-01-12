import React from 'react';

class Follower extends React.Component {

    render() {
        return(
            <div className='follower'>
                <img src={this.props.follower.avatar_url} />
                <h4>@{this.props.follower.login}</h4>
            </div>
        )
    }
}

export default Follower;