import React, { Component } from 'react'; 
class Table extends Component { 
  render() { 
    return ( 
      <table style={{ marginTop: 16 }} border="1"> 
        <thead> 
          <tr> 
            <th>#</th> 
            <th>Value 1</th> 
            <th>Value 2</th> 
            <th>Value 3</th> 
          </tr> 
        </thead>  
        <tbody> 
          {this.props.entries.map((entry, index) => ( 
            <tr key={index}> 
              <td>{index + 1}</td> 
              <td>{entry.value1}</td> 
              <td>{entry.value2}</td> 
              <td>{entry.value3}</td> 
              <td>
                <button onClick={() => this.props.onEditItem(entry)}>
                  Edit
                </button>

                <button onClick={() => this.props.onDeleteItem(entry)}>
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
