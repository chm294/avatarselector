import React from 'react';
import AvatarListEntry from './AvatarListEntry.jsx';

const sampleData = [
  { "src": "/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "/avatar6.png", "label": "Avatar 6", "id": 6 }
]

export default class AvatarList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<div className="avatar-list-container">
				<p className="choose-avatar-text">Choose your avatar</p>
				<div className="avatar-list">
					{
						sampleData.map( (avatar) => {
							return <AvatarListEntry 
												avatar={avatar} 
												key={avatar.id} 
												handleNewAvatar={this.props.handleNewAvatar} 
												/>
						})
					}
				</div>
			</div>
		)
	}
}