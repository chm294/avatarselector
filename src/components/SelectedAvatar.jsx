import React from 'react';

export default class SelectedAvatar extends React.Component {
  render() {
    return (
      <div className="selectedContainer" onClick={()=>this.props.toggleList()}>
        <img 
        src={require(`../avatars/avatar${this.props.selectedAvatar}.png`)} 
        className="avatar selected"
        alt="" />
      </div>
    );
  }
  }