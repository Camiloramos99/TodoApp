// import React from 'react';
// import { TodoIcon } from '../TodoIcon'; 

// function CompleteIcon( {completed, onComplete} ) {          REACT 18
//     return (
//       <TodoIcon
//         type="check"
//         color={completed ? '#4caf50' : 'gray'}
//         onClick={onComplete}
//       />
//     );
// }

// export { CompleteIcon };



import React, { Component } from 'react';
import { TodoIcon } from '../TodoIcon'; 

class CompleteIcon extends Component {
  render() {
    const { completed, onComplete } = this.props;
    const iconColor = completed ? '#4caf50' : 'gray';

    return (
      <TodoIcon
        type="check"
        color={iconColor}
        onClick={onComplete}
      />
    );
  }
}

export { CompleteIcon };