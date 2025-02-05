import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
        return(<div className='flist-container'>

                <h2>Followers:</h2>

                <div className='flist'>
                {this.props.data.map(follower=>{
                return <Follower key={follower.id} follower={follower}/>
                })}
                </div>
          </div>
        )
    }
}

export default FollowerList;