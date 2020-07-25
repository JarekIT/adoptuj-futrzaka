import React from "react";

export class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: `component-input-${this.props.label}`,
    };
  }
  render() {
    const { label, state, setState, type } = this.props;

    return (
      <label htmlFor={this.state.id}>
        {label} 
        <input
          id={this.state.id}
          type={type}
          value={state}
          placeholder={label}
          onChange={(event) => setState(event.target.value)}
        />
        <br />
      </label>
    );
  }
}
