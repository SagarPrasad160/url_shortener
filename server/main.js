import { Meteor } from "meteor/meteor";
import { links } from "../imports/collections/links";
import { WebApp } from "meteor/webapp";
import ConnectRoute from "connect-route";
Meteor.startup(() => {
  Meteor.publish("links", function () {
    return links.find({});
  });
});

function onRoute(req, res, next) {
  const link = links.findOne({ token: req.params.token });
  if (link) {
    // redirect to the url
    // increment clicks of the link
    links.update(link, { $inc: { clicks: 1 } });
    res.writeHead(307, { Location: link.url });
    res.end();
  } else {
    //load our react app, move next
    next();
  }
}

const middleware = ConnectRoute(function (router) {
  router.get("/:token", onRoute);
});

WebApp.connectHandlers.use(middleware);
