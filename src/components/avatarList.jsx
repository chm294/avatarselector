import React from 'react';
import AvatarListEntry from './AvatarListEntry';

sampleData = [
  { "src": "../../public/avatars/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "../../public/avatars/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "../../public/avatars/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "../../public/avatars/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "../../public/avatars/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "../../public/avatars/avatar6.png", "label": "Avatar 6", "id": 6 }
]

export default class AvatarList extends React.component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		<div>
			{sampleData.forEach(function(avatar) {
				return <AvatarListEntry avatar="avatar" />
			})}
		</div>
	}
}