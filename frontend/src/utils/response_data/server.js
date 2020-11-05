var dish = require("./dish_ID_11587236.json");
var menu = require("./menu_ID_642873.json");
var restaurant = require("./restaurant_ID_48246_details.json");
var dish = require("./restaurant_ID_48246_dishes.json");
var restaurant_menu = require("./restaurant_ID_48246_menu_list.json");
var search = require("./search_phở cuốn.json");

const db = () => {
    return {
        dish,
        menu,
        restaurant,
        dish,
        restaurant_menu,
        search,
    };
};

var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router(db());
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3001, function () {
    console.log("JSON Server is running");
});
