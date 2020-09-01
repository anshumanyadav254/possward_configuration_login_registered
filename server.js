var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var bcrypt = require("bcrypt");
const initializePassport = require("passport");
const passport = require("passport");
var users = [];
app.set("view-engine", "ejs");
app.use(bodyParser());

app.get("/", (req, res) => {
    res.render("index.ejs", { name: "Anshu" });
});
// initializePassport(passport, email => {
//     return users.find((user) => user.email === email);
// })
app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs", { name: "Anshu" });
});

app.post("/login", (req, res) => {
    let { email, password } = req.body;

    let foundEmail = users.find((user) => {
        return user.email === email;
    });
    console.log("Found Email is ", foundEmail);
    // Find the email in the array

    // If Found compare the passwords entered and password
    //entered while signing up

    // if not Found then show user error
    //You are not registered
});

app.post("/register", async(req, res) => {
    try {
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        let { name, email } = req.body;
        //Check if user already exists
        let foundEmail = users.find((user) => {
            return user.email === email;
        });
        if (foundEmail) {
            res.redirect("/register", { error: "You are already registered" });
        }

        //insert into database
        
        else {
            users.push({
                name,
                email,
                password: hashPassword,
            });
            res.redirect("/login");
        }
    } catch (error) {
        res.redirect("/register");
    }
});

app.listen(3000, () => {
    console.log("Starting the application");
});