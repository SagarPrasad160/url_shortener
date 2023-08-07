import React from "react";

class LinkCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    Meteor.call("links.insert", this.refs.url.value, (error) => {
      if (error) {
        this.setState({ error: "Enter a valid URL" });
      } else {
        this.setState({ error: "" });
        this.refs.url.value = "";
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Enter an URL</label>
          <input ref="url" type="text" className="form-control" />
          <p className="text-danger">{this.state.error}</p>
        </div>
        <button className="btn btn-success">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
