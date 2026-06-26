const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const routes = {
    "/": "index.html",
    "/home": "index.html",
    "/home.html": "index.html",
    "/about": "about.html",
    "/about.html": "about.html",
    "/activities": "activities.html",
    "/activities.html": "activities.html",
    "/schedule": "schedule.html",
    "/schedule.html": "schedule.html",
    "/gallery": "gallery.html",
    "/gallery.html": "gallery.html",
    "/apply": "apply.html",
    "/apply.html": "apply.html",
    "/learn-more": "learn-more.html",
    "/learn-more.html": "learn-more.html"
};

app.use(express.static(ROOT_DIR));

Object.entries(routes).forEach(([route, file]) => {
    app.get(route, (req, res) => {
        res.sendFile(path.join(ROOT_DIR, file));
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
