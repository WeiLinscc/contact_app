import React, { Component } from 'react'; 
class Table extends Component { 
  render() { 
    return ( 
      <table className="table" style={{ marginTop: 16 }} border="1"> 
        <thead> 
          <tr> 
            <th>#</th> 
            <th>First Name</th> 
            <th>Last Name</th> 
            <th>Phone Number</th>
            <th>Email</th>
            <th>Image</th>
          </tr> 
        </thead>  
        <tbody> 
          {this.props.entries.map((entry, index) => ( 
            <tr key={index}> 
              <td>{index + 1}</td> 
              <td>{entry.first_name}</td> 
              <td>{entry.last_name}</td> 
              <td>{entry.phone_number}</td>
              <td>{entry.email}</td> 
              <td>{entry.image}</td> 
              <td>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editContactModal" onClick={() => this.props.onEditItem(entry)}>
                  Edit
                </button>
                <button type="button" className="btn btn-danger" onClick={() => this.props.onDeleteItem(entry)}>
                  Delete
                </button>
              </td>
            </tr> 
          ))} 
        </tbody> 
      </table> 
    ); 
  } 
} 
export default Table;
