import React from 'react';
import Follower from './Follower';

const dummyData = {
    user: {
      name: 'Kayla Sade',
      login: 'kfam22',
      avatar_url: 'https://avatars.githubusercontent.com/u/92267062?v=4',
      public_repos: 37,
      followers: 16,
      following: 23,
    },
    followers: [{login: 'AlexiusThomas', avatar_url: 'https://avatars.githubusercontent.com/u/89950175?v=4', id: 89950175}, {login: 'lomelo-x', avatar_url: 'https://avatars.githubusercontent.com/u/91914856?v=4', id: 91914856}, {login: 'kimnivore', avatar_url: 'https://avatars.githubusercontent.com/u/91563653?v=4', id: 91563653}]
  }

class FollowerList extends React.Component {

    render() {
        return(<div>
            <h2>Followers:</h2>
            {dummyData.followers.map(follower=>{
              return <Follower key={follower.id} follower={follower}/>
            })}
          </div>
        )
    }
}

export default FollowerList;