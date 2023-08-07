import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import Header from "./components/header";
import LinkCreate from "./components/link_create";
import LinkList from "./components/link_list";
import { links } from "../imports/collections/links";

const App = () => {
  return (
    <div className="container">
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  );
};

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  const root = createRoot(container);
  root.render(<App />);
});
