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
        <AddForm editing={this.state.editingItem} onAddEntry={this._addEntry} />

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
      </div>
    );
  }
}

export default App;
