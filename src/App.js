import React, { Component } from 'react';
import api from './api';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import Table from './components/Table';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      editingItem: null
    };
  }

  componentDidMount() {
    // fetch items from server
    api
      .fetchItems()
      .then(results => {
        this.setState({
          entries: results.data.items
        });
      })
      .catch(error => {
        console.log('Something went wrong...');
      });
  }

  _addEntry = entry => {
    api
      .addItem(entry)
      .then(results => {
        this.setState({
          entries: [...this.state.entries, results.data.item]
        });
      })
      .catch(error => {
        console.log('Failed to add item...');
      });
  };

  _editEntry = entry => {
    this.setState({
      editingItem: entry
    });
  };

  _updateEntry = entry => {
    api
      .updateItem(entry)
      .then(() => {
        // update entries
        // return new entry where id matches one being editing
        this.setState({
          editingItem: null,
          entries: [...this.state.entries].map(i => {
            if (i.id === entry.id) {
              return entry;
            } else {
              return i;
            }
          })
        });
      })
      .catch(error => {
        console.log('Failed to update item...');
      });
  };

  _deleteEntry = entry => {
    if (window.confirm('Delete contact?') == true) {
      api
      .deleteItem(entry)
      .then(() => {
        // filter entries where ids dont match one being deleted
        this.setState({
          entries: [...this.state.entries].filter(i => i.id !== entry.id)
        });
      })
      .catch(error => {
        console.log('Failed to delete item...');
      });
    }
  };

  render() {
    return (
      <div className="App">

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addContactModal">
          Add Contact 
        </button>

        {this.state.editingItem ? (
          <EditForm
            editing={this.state.editingItem}
            onUpdateEntry={this._updateEntry}
          />
        ) : null}

        <Table
          entries={this.state.entries}
          onEditItem={this._editEntry}
          onDeleteItem={this._deleteEntry}
        />

        <div className="modal fade" id="addContactModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <AddForm editing={this.state.editingItem} onAddEntry={this._addEntry} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
