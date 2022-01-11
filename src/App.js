import React from 'react';

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
         <input/>
         <button>Search</button>
       </form>

       {/* user component */}
       <div className='userImageContainer'>
          <img src='#'/>
       </div>
       <div className='userInfoContainer'>
          <h2>User Login</h2>
          <p>User url</p>
          <p>Total Repos: 100</p>
          <p>Total Followers: 43</p>
       </div>

       {/* follower */}
       <div className='follower'>
         <img src='#'/>
         <h4>follower name</h4>
       </div>

       {/* follower list */}
       {/* maps over followers arr from state and returns an image and user login */}

    </div>);
  }
}

export default App;
