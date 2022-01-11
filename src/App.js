import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

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

class App extends React.Component {
  state = {
    user: [],
    followers: []
  }
  
  render() {
    return(<div>
      {/* header */}
      <h1>Github Info</h1>
       
       {/* form */}
       <form>
         <input type='text'/>
         <button>Search</button>
       </form>

       {/* user component */}
       <User user={dummyData.user}/>


       {/* follower list: maps over each *follower arr from state and returns an image and user login*/}
       <FollowerList />
       

    </div>);
  }
}

export default App;
