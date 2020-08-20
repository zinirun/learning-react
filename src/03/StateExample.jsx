import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props); //state 정의
    //forceUpdate 사용시 this.loading=true; 와 같이 직접선언
    this.state = {
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this); //함수로 넘어갈 this는 반드시 생성자에서 bind로 묶어야함
    setTimeout(this.handleData, 3000); //3초 후 저장된 값을 변경
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state; //특수변수 this.state를 사용하여 state값에 접근
    //setState가 호출되면 자동으로 render함수가 호출됨
    //직접 변경하고 검증없이 강제로 render함수를 실행하고 싶다면
    //this로 접근해서 직접 바꾸고 this.forceUpdate() 사용
    //but render에서의 접근은 this.state.data가 아닌 this.data로 접근
    // this.loading = false;
    // this.formData = data + this.formData;
    // this.forceUpdate();

    this.setState({
      loading: false,
      formData: data + formData,
    });
    console.log('loading값', this.state.loading);
  }

  //setState 함수의 인자로 함수를 전달하면 이전 state값을 쉽게 읽을 수 있음
  handleData2(data) {
    this.setState((prevState) => ({
      loading: false,
      formData: data + prevState.formData,
    }));
  }

  render() {
    return (
      <div>
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
