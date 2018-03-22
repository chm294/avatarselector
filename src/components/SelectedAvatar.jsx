import React from 'react';
import PropTypes from 'prop-types';

export default class SelectedAvatar extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      addClass : false,
    }
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    this.setState({addClass : !this.state.addClass});
  };
  render() {
    let selectedClass = ["avatar", "border"];
    if(this.state.addClass) {
      selectedClass.push('selected');
    };
    return (
      <div 
        className="selected-container"
        onClick={()=>this.props.toggleList()}
      >
        <img 
        onClick={()=>this.toggleClass()}
        className={selectedClass.join(' ')} 
        src={require(`../avatars/avatar${this.props.selectedAvatar}.png`)} 
        alt="" 
        />
      </div>
    );
  }
};

SelectedAvatar.propTypes = {
  toggleList : PropTypes.func.isRequired,
  selectedAvatar: PropTypes.number.isRequired
}