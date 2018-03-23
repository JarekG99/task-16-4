import React from 'react';

class Title extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          text: 'To Do List',

      };
    }


  render () {
    return (
      <h1>{this.state.text}</h1>
    );
  }
}

export default Title;
