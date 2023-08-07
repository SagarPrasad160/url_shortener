import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { links } from "../../imports/collections/links";

class LinkList extends React.Component {
  renderedRows() {
    return this.props.Links.map((link) => {
      const { url, token, clicks } = link;
      const shortLink = `http://localhost:3000/${token}`;
      return (
        <tr key={link.token}>
          <td>{url}</td>
          <td>
            <a href={shortLink}>{shortLink}</a>
          </td>
          <td>{clicks}</td>
        </tr>
      );
    });
  }
  render() {
    console.log(this.props.Links);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>URLs</th>
            <th>Shortened Links</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>{this.renderedRows()}</tbody>
      </table>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("links");
  return { Links: links.find({}).fetch() };
})(LinkList);
