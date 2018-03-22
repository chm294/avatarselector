import React from 'react';
import PropTypes from 'prop-types';

export default class SelectedAvatar extends React.Component {
  render() {
    let selectedClass = ["avatar", "border"];
    if(this.props.isListActive) {
      selectedClass.push('selected');
    };
    return (
      <div 
      className="selected-container"
      onClick={()=>this.props.toggleList()}
      >
        <img 
        className={selectedClass.join(' ')} 
        src={require(`../../avatars/avatar${this.props.selectedAvatar}.png`)} 
        alt="" 
        />
      </div>
    );
  }
};

SelectedAvatar.propTypes = {
  toggleList : PropTypes.func.isRequired,
  selectedAvatar: PropTypes.number.isRequired,
  isListActive: PropTypes.bool.isRequired
}