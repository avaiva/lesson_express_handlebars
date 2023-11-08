require("dotenv").config();
const express = require("express");

const port = process.env.SERVER_PORT || 3000;
const app = express();

app.use(express.static(__dirname + "/public"))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.get("/", (request, response, next) => {
    let data = {
        name: "Ironhacker",
        bootcamp: "Ironhack Web Dev",
        cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"]
      };
    response.render("index", data)
})

app.get("/about", (request, response, next) => {
 response.render("about")
})

app.listen(3002, ()=> {
    console.log("Listening to 3002")
})



