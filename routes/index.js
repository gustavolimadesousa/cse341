const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.get("/", lesson1Controller.hello);
routes.get("/name", lesson1Controller.name);
routes.get("/school", lesson1Controller.school);

module.exports = routes;
