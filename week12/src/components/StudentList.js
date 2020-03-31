import React from "react";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";

class UserList extends React.Component {
  state = {
    users: []
  };

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    const users = response.data;
    this.setState({ users: users });
  };

  deleteItem = (event, userId) => {
    event.persist();
    const users = this.state.users.filter(user => user.id !== userId);
    this.setState({ users: users });
    console.log(userId);
    console.log("Triggered");
  };

  render() {
    return (
      <div>
        <AddStudent fetchData={this.fetchData} />
        <ul>
          {this.state.users.map(user => (
            <div key={user.id}>
              <li key={user.name}>{user.name}</li>
              <DeleteStudent key={user.id} passedFunction={this.deleteItem} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
