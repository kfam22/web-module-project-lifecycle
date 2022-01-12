import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

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
    user: {},
    followers: [],
    handle: ""
  }

 componentDidMount(){
   axios.get('https://api.github.com/users/kfam22')
   .then(res=>{
     this.setState({
       ...this.state,
       user: res.data
     })
   })
   .catch(err=>{
     console.error(err);
   });
 };

// componentDidUpdate(prevProps, prevState){
  // check for update
  // check if user updated
  // axios call
  // console.log('user changed')

// }

      handleChange = (e) => {
        this.setState({
          ...this.state,
          handle: e.target.value
        })
      }

      handleSearch = (e) =>{
        e.preventDefault();
        // get gh handle input
        // axios call
        // save response from the call to state
        const handle = this.state.handle;
        axios.get(`https://api.github.com/users/${handle}`)
        .then(res=>{
          this.setState({
            ...this.state,
            user: res.data,
            handle: ''
          })
        })
      };

  render() {
    console.log('updated state:', this.state.user)
    return(<div>
      
        <h1>Github Info</h1>
       
        <form>
         <input value={this.state.handle} onChange={this.handleChange} placeholder='Github Handle' type='text'/>
         <button onClick={this.handleSearch} >Search</button>
        </form>

        <User user={this.state.user}/>
        <FollowerList data={dummyData.followers} />

    </div>);
  }
}

export default App;
