import React from 'react';
import PropTypes from 'prop-types';

export default class AvatarListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function(avatarId) {
    this.props.handleNewAvatar(avatarId)
  }

  render() {
      return (
        <div onClick={() => this.handleClick(this.props.avatar.id)}>
          <img className="avatar list-item" src={require(`../avatars${this.props.avatar.src}`)} alt=""/>
        </div>
      )
    }
  }
  
AvatarListEntry.propTypes = {
  avatar: PropTypes.object.isRequired
}