import axios from "axios";

export default {
 
  getAllBooks: function () {
    return axios.get("/api/books")
    .then (console.log ("Here is the Book All function!"))
  },
 
  saveBook: function (id) {
    return axios.post(`/api/books/${id}`)
    .then (console.log("Book saved."))
  },

  searchBooks: function (search) {
    return axios.get(`/book/${search}`)
    .then (console.log ("Here is the Book Search function!"))
  },
 
  deleteAllUnsaved: function() {
    return axios.delete(`/api/books`)
    .then ((console.log ("Here is the Book Delete All function!")))
  }, 

  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`)
    .then(console.log("Book deleted."))
  }, 

  getAllAnimes: function () {
    return axios.get("/api/animes")
    .then (console.log("Here is the Anime All function!"))
  },
 
  saveAnime: function (id) {
    return axios.post(`/api/animes/${id}`)
    .then (console.log("Anime saved."))
  },

  searchAnimes: function (search) {
    return axios.get(`/anime/${search}`)
    .then (console.log("Here is the Anime Search function!"))
  },
 
  deleteAllAUnsaved: function() {
    return axios.delete("/api/animes")
    .then(console.log("Here is the Anime Delete All function!"))
  }, 

  deleteAnime: function(id) {
    return axios.delete(`/api/animes/${id}`)
    .then(console.log("Anime deleted."))
  }, 
}