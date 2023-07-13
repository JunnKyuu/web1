import {Component} from 'react';
import ClassComponent from './ClassComponent';

class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent />
        <ClassComponent />
      </ul>
    );
  }
}

export default App;
