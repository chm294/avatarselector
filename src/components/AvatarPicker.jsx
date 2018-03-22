import React from 'react';
import '../styling/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AvatarList from './AvatarList.jsx';
import SelectedAvatar from './SelectedAvatar.jsx';

const sampleData = [
  { "src": "/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "/avatar6.png", "label": "Avatar 6", "id": 6 }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAvatar: 1,
      currentlyFocused: 1,
      currentlySelected: null,
      toggleList: false,
      sampleData: sampleData,
    };
    this.handleNewAvatar = this.handleNewAvatar.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
    this.onSelectAvatar = this.onSelectAvatar.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      this.handleKeyEvent(keyName);
    });
  };

  handleNewAvatar = function(avatarId) {
    this.setState({
      currentlySelected : avatarId,
      currentlyFocused : avatarId
    });
    setTimeout(()=>{
      this.setState({selectedAvatar : avatarId});
    },1000);
  };

  toggleList = function() {
    if(!this.state.toggleList) {
      this.setState({toggleList:true});
    } else {
      setTimeout(() => {
        this.setState({ toggleList: !this.state.toggleList, currentlySelected: null });
      }, 1000);
    };
  };

  onSelectAvatar(avatarId) {
    this.handleNewAvatar(avatarId);
    this.toggleList();
  };

  handleKeyEvent = function(key) {
    if(key.toUpperCase() === 'A'){
      if(this.state.toggleList === false) {
        this.setState({toggleList: true});
      } else {
        this.setState({toggleList: false});
      };
    };
    if(this.state.toggleList) {
      if(key.toUpperCase() === "ARROWRIGHT" && this.state.currentlyFocused < this.state.sampleData.length) {
        this.setState({currentlyFocused: this.state.currentlyFocused + 1});
      }
      if(key.toUpperCase() === "ARROWLEFT" && this.state.currentlyFocused > 1) {
        this.setState({currentlyFocused: this.state.currentlyFocused - 1});
      }
    }
    if(key.toUpperCase() === "ENTER") {
      this.setState({currentlySelected : this.state.currentlyFocused});
      this.onSelectAvatar(this.state.currentlyFocused);
    };
  };
  
  render(){
    return (
      <div className="avatar-picker">
        <SelectedAvatar 
        selectedAvatar={this.state.selectedAvatar} 
        toggleList={this.toggleList}
        />
        <ReactCSSTransitionGroup
        transitionName="popover"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        >
        {this.state.toggleList? 
        <AvatarList
        currentlyFocused={this.state.currentlyFocused}
        sampleData={this.state.sampleData}
        currentlySelected={this.state.currentlySelected}
        onSelectAvatar={this.onSelectAvatar}
        />
        : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
};
