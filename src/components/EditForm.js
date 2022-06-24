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
        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-12">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input value={this.state.first_name} onChange={e => this._handleTextChange('first_name', e.target.value)} required type="text" className="form-control" id="firstName" placeholder="First Name" name="first_name" />
          </div>
          <div className="col-12">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input value={this.state.last_name} onChange={e => this._handleTextChange('last_name', e.target.value)} type="text" className="form-control" id="lastName" placeholder="Last Name" name="last_name" />
          </div>
          <div className="col-12">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input value={this.state.phone_number} onChange={e => this._handleTextChange('phone_number', e.target.value)} required type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" name="phone_number" />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input value={this.state.email} onChange={e => this._handleTextChange('email', e.target.value)} type="email" className="form-control" id="email" placeholder="Email" name="email" />
          </div>
          <div className="col-12">
            <label htmlFor="image" className="form-label">Image</label>
            <input value={this.state.image} onChange={e => this._handleTextChange('image', e.target.value)} type="text" className="form-control" id="image" placeholder="Image" name="image" />
          </div> 
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Update Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
