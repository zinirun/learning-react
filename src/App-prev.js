import React from 'react';
import TodaysPlan from './03/TodaysPlan';
import MyComponent from './03/MyComponent';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildProperty from './03/ChildProperty';
import StateExample from './03/StateExample';
import Counter from './03/Counter';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan />
        <MyComponent name="hello message" />
        <PropsComponent name="두잇 리액트!" />
        <ChildComponent
          boolValue={true}
          numValue={1}
          arrayValue={[1, 2, 3]}
          objValue={{ name: '제목', age: 30 }}
          nodeValue={<h1>노드</h1>}
          funcValue={() => {
            console.log('메시지');
          }}
        />
        <div>
          즐거울 때: <BooleanComponent />
        </div>
        <div>
          지루할 때: <BooleanComponent bored />
        </div>
        <div>
          <ChildProperty>
            <div>
              <span>자식 노드</span>
            </div>
          </ChildProperty>
        </div>
        <div>
          <StateExample />
        </div>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

//export default App;
