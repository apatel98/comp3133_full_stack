import React from "react";
import axios from "axios";

class DeleteStudent extends React.Component {
  handleSubmit = event => {
    this.deleteItem();
    event.preventDefault();
  };

  async deleteItem() {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${this.props.key}`
    );
    console.log(res);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.passedFunction} type="button">
          Delete
        </button>
      </div>
    );
  }
}

export default DeleteStudent;
