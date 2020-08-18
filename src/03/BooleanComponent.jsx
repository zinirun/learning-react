import React, { Component } from 'react';

// 실무에서 자주 사용되는 표현!
// boolean형은 props 이름만 전달 시 true
// props 전달 안하면 false로 인식
class BooleanComponent extends Component {
  render() {
    const msg = this.props.bored ? '놀러 가자' : '하던 일 열심히 마무리하기';
    return <div className="msg-container">{msg}</div>;
  }
}

export default BooleanComponent;
