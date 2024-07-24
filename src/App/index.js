import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUi';

class App extends React.Component {
  render() {
    return (
      <TodoProvider>
          <AppUi />
      </TodoProvider>
    );
  }

}
export default App;

// function App() {
//   return (                         REACT 18
//     <TodoProvider>
//         <AppUi />
//     </TodoProvider>
//   );
// }






