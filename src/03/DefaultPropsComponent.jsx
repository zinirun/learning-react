import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends Component {
  render() {
    let msg1 = '';
    if (this.props.boolValue === false) {
      msg1 = 'boolValue 기본값 false';
    }
    let msg2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      msg2 = 'boolValueWithoutDefault 기본값 false';
    }
    return (
      <div className="msg-container">
        {msg1}
        {msg2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

DefaultPropsComponent.defaultProps = {
  // boolValue 프로퍼티에만 기본값을 false로 지정
  boolValue: false,
};

export default DefaultPropsComponent;
