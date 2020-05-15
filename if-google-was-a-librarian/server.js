//Dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const axios = require("axios")
//require models
const db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/book";
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
        if (err) throw err;
        console.log("database connected")
    })
    .then(() => console.log("Database Connected!"))
    .catch(err => console.log(err));

app.get("/search/:search", (req, res) => {
  let search = req.params.search;
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search).then(function(response) {
      let books = response.data.items
      // console.log(books)
      let array =[];
      for(let i=0; i<books.length; i++) {
        if(books[i].volumeInfo.imageLinks !== undefined && books[i].volumeInfo.authors !== undefined){
        let bookInfo = {
              title: books[i].volumeInfo.title,
              authors: books[i].volumeInfo.authors,
              description: books[i].volumeInfo.description,
              image: books[i].volumeInfo.imageLinks.smallThumbnail,
              link: books[i].volumeInfo.infoLink
          }
        array.push(bookInfo);  
      }}
      db.Book
            .create(array)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.json(err))
    })
})

app.get("/api/books", (req, res) => {
  db.Book
    .find({saved: true})
    .then(dbBook => res.json(dbBook))
    .catch(err => res.json(err))
})

app.post("/api/books/:id", (req, res)  => {
  db.Book
    .findOneAndUpdate({_id: req.params.id}, {saved: true}, {new: true})
    .then(dbBook => {
      res.json(dbBook)
    })
})

app.delete("/api/books", (req, res) => {
  db.Book
    .deleteMany({saved: false})
    .then(dbBooks => res.json(dbBooks))
})

app.delete("/api/books/:id", (req, res) => {
  db.Book
    .deleteOne({_id: req.params.id})
    .then(dbBook => res.json(dbBook))
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});