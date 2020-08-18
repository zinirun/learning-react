import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends Component {
  render() {
    const { objValue } = this.props;
    return (
      <div>
        {/* 객체를 문자열로 변환하여 출력 */}
        <div>객체값: {String(Object.entries(objValue))}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  //객체 프로퍼티의 자료형은 PropTypes의 shape를 사용하여 정의
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default ChildComponent2;
