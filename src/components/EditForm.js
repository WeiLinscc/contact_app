import React, { Component } from 'react';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.editing
    };
  }

  _handleTextChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  _update = () => {
    this.props.onUpdateEntry(this.state);
    this._clear();
  };

  _clear = () => {
    this.setState({
      id: null,
      value1: '',
      value2: '',
      value3: ''
    });
  };

  render() {
    return (
      <div style={{ marginTop: 16 }}>
        <Button title="Update" onClick={this._update} />

        <br />

        <input
          type="text"
          placeholder="Value 1"
          value={this.state.value1}
          onChange={event =>
            this._handleTextChange('value1', event.target.value)
          }
        />
        <input
          type="text"
          placeholder="Value 2"
          value={this.state.value2}
          onChange={event =>
            this._handleTextChange('value2', event.target.value)
          }
        />
        <input
          type="text"
          placeholder="Value 3"
          value={this.state.value3}
          onChange={event =>
            this._handleTextChange('value3', event.target.value)
          }
        />
      </div>
    );
  }
}

export default Form;
