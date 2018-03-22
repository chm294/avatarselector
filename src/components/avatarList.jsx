import React from 'react';
import AvatarListEntry from './AvatarListEntry.jsx';
import PropTypes from 'prop-types';

export default class AvatarList extends React.Component {
	render(){
		return(
			<div>
				<div className="triangle"></div>
				<div className="avatar-list-container">
					<p className="text">Choose your avatar</p>
					<ul className="avatar-list">
						{this.props.sampleData.map( (avatar) => {
							return <AvatarListEntry 
							isFocused={this.props.currentlyFocused === avatar.id}
							isSelected={this.props.currentlySelected === avatar.id}
							avatar={avatar} 
							key={avatar.id}
							onSelectAvatar={this.props.onSelectAvatar}
							/>
						})}
					</ul>
				</div>
			</div>
		);
}
};

AvatarList.propTypes = {
	sampleData: PropTypes.array.isRequired,
	currentlyFocused: PropTypes.number.isRequired,
	onSelectAvatar: PropTypes.func.isRequired,
	currentlySelected: PropTypes.number
}