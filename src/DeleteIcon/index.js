import React, { Component } from 'react';
import { TodoIcon } from '../TodoIcon';

class DeleteIcon extends Component {
  render() {
      const { onDelete } = this.props;

    return (
      <TodoIcon
        type="delete"
        color="gray"
        onClick={onDelete}
      />
    );   
  }
}

export { DeleteIcon };





// import React from 'react';
// import { TodoIcon } from '../TodoIcon';

// function DeleteIcon({ onDelete }) {
//     return (
//       <TodoIcon                                REACT 18
//         type="delete"
//         color="gray"
//         onClick={onDelete}
//       />
//     );  
// }

// export { DeleteIcon };