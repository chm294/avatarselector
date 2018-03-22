import React from 'react';
import PropTypes from 'prop-types';


export default class AvatarListEntry extends React.Component {
  render() {
    return (
      <div>
        <li
        onClick={() => this.props.onSelectAvatar(this.props.avatar.id)}
        className={`list-item ${this.props.isFocused ? "currently-focused" : null}`}
        >
          <img className="avatar" src={require(`../avatars${this.props.avatar.src}`)} alt=""/>
          <div className={this.props.isSelected ? "spin" : null}></div>
        </li>
      </div>
    );
  }
}
  
AvatarListEntry.propTypes = {
  avatar: PropTypes.object.isRequired,
  onSelectAvatar: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired
}