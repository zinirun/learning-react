import React from 'react';
import TodaysPlan from './03/TodaysPlan';
import MyComponent from './03/MyComponent';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan />
        <MyComponent name="hello message" />
      </div>
    );
  }
}

export default App;
