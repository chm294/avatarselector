import React from 'react';
import '../styling/App.css';
import AvatarList from './AvatarList.jsx';
import SelectedAvatar from './SelectedAvatar.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAvatar: 1,
      toggleList: false,
    };
    this.handleNewAvatar = this.handleNewAvatar.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  handleNewAvatar = function(avatarId) {
    this.setState({selectedAvatar : avatarId});
  }

  toggleList = function() {
      console.log('run')
      this.setState({toggleList: !this.state.toggleList});
  }
  
  render(){
    return (
      <div className="avatar-picker">
        <SelectedAvatar 
            selectedAvatar={this.state.selectedAvatar} 
            toggleList={this.toggleList}
        />
        {this.state.toggleList? <AvatarList handleNewAvatar={this.handleNewAvatar}/> : null}
      </div>
    );
  }
}

