import React, { Component } from "react";
import PropTypes from "prop-types";

import React, { Component } from "react";

class ClassBasedComponent extends Component {
  //eslint disable next line no-useless constructor
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Ram",
      studentRoll: "1",
    };
  }

  componentWillMount() {}

  componentDidMount() {
    //Will be loaded first
  }

  componentWillReceiveProps(nextProps) {
    //Will be triggered when the component receives props from another component
  }

  shouldComponentUpdate(nextProps, nextState) {
    //determines whether the component should be updated
    //returns boolean value
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    //will be triggered when the components unmounts
  }

  updateName() {
    this.setState({ studentName: "Hari", studentRoll: "200" });
  }

  render() {
    return (
      <div>
        {this.state.studentName}
        <button onClick={() => {}}></button>
      </div>
    );
  }
}

ClassBasedComponent.propTypes = {};

export default ClassBasedComponent;
