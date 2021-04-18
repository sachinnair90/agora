import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@devon-india/t-shaped-app",
  app: () => System.import("@devon-india/t-shaped-app"),
  activeWhen: [ "/" ]
});

start({
  urlRerouteOnly: true
});
