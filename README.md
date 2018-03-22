# Avatar Selector 
Simple React Component: an avatar picker

## Behaviour & Use
- Go to the project directory and npm start to open localhost:3000
- Click on the default avatar. Or navigate by keyboard: press the 'a' to get started
- A list of avatar icons should pop up
- Click on your desired avatar to select
- Or navigate by keyboard: use the right arrow / left arrow keys to navigate your choices. Press Enter to select. Press esc to close.

## Implementation
The application follows a top-down unidirectional data flow using React

#### App.js
- this is the highest component

#### AvatarPicker.jsx
- this is where all the state lives and where all the props get passed down
- This is where key event listeners exist
- It contains 2 subcomponents, SelectedAvatar and AvatarList

#### SelectedAvatar
- Simple component for the selected avatar

#### AvatarList
- maps the sampledata prop down to AvatarListEntry to be rendered

#### AvatarListEntry
- receives each individual sampledata element 
- renders each with conditional classNames and CSS styling depending on the props passed down