import React, { Component } from 'react';

class ClassBased extends React.Component {
  render() {
    return (
      <div>
        <h2>This is a classbased component</h2>
        <h2>Message: {this.props.message}</h2>
      </div>
    );
  }
}

export default ClassBased;

// const classBased = new ClassBased(props);
// classBased.props = props;
// classBased.render();
