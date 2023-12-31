import { Mongo } from "meteor/mongo";
import validUrl from "valid-url";
import { check, Match } from "meteor/check";

Meteor.methods({
  "links.insert": function (url) {
    // validate the url with custom validation using Match
    check(
      url,
      Match.Where((url) => validUrl.isUri(url))
    );
    const token = Math.random().toString(36).slice(-5);
    links.insert({ url, token, clicks: 0 });
  },
});

export const links = new Mongo.Collection("links");
