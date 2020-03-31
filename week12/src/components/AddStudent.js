import React from 'react';
import axios from 'axios';

class AddStudent extends React.Component {

  state = {
    name: ""
  }

  handleChange = event => {
    this.setState({name: event.target.value})
  };

  handleSubmit = event => {
    this.addName();
    event.preventDefault();
  };

  async addName() {
    const nameToAdd = this.state.name;
    const user = {
      name: nameToAdd
    }
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', user);
    console.log(res)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button onClick={this.props.fetchData} type="submit">Add</button>
        </form>
        </div>
    )
  }
}

export default AddStudent