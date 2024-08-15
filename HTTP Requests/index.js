import express from "express"

const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World");
});

app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.get("/contact", (req, res) => {
    res.send("Contact us at 123-456-7890");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

