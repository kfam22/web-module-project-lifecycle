import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import InputForm from './components/InputForm';
import axios from 'axios';



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

      componentDidUpdate(prevState){
        if(prevState.user !== this.state.user) {
          axios.get(`https://api.github.com/users/${this.state.user.login}/followers`)
          .then(res=>{
            this.setState({
              ...this.state,
              followers: res.data
            })
          })
          .catch(err=>{
            console.error(err);
          });
        }
      }

      handleChange = (e) => {
        this.setState({
          ...this.state,
          handle: e.target.value
        })
      }

      handleSearch = (e) =>{
        e.preventDefault();
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
    return(<div className='appContainer'>
        <div className='header'>
        <h1>Github Info</h1>
        <InputForm value={this.state.handle} handleChange={this.handleChange} handleSearch={this.handleSearch} />
        </div>
        <User user={this.state.user}/>
        <FollowerList data={this.state.followers} />

    </div>);
  }
}

export default App;
