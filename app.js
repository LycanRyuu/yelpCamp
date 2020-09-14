var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    { name: "Salmon Creek", image: "https://invinciblengo.org/photos/event/slider/mount-abu-trekking-camp-aravalli-hills-rajasthan-nbMgzbA-1440x810.jpg" },
    { name: "Granite Hill", image: "https://images.unsplash.com/photo-1599894907209-4abc9d19805a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
    { name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1599893326379-a95509d47f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
    { name: "Salmon Creek", image: "https://invinciblengo.org/photos/event/slider/mount-abu-trekking-camp-aravalli-hills-rajasthan-nbMgzbA-1440x810.jpg" },
    { name: "Granite Hill", image: "https://images.unsplash.com/photo-1599894907209-4abc9d19805a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
    { name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1599893326379-a95509d47f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
    { name: "Salmon Creek", image: "https://invinciblengo.org/photos/event/slider/mount-abu-trekking-camp-aravalli-hills-rajasthan-nbMgzbA-1440x810.jpg" },
    { name: "Granite Hill", image: "https://images.unsplash.com/photo-1599894907209-4abc9d19805a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
    { name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1599893326379-a95509d47f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" }
]

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs")
})

app.listen(8000, process.env.IP, function () {
    console.log(process.env.PORT);
    console.log("YelpCamp server started");
});