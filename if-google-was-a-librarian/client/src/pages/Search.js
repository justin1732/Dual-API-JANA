import React from "react";
import API from "../utils/API";
import BookCard from "../components/BookCard.js";

class Search extends React.Component {

    state = {
        search: "",
        books: [],
        title: "",
        author: "",
        synopsis: "",
        error: ""
    };

    componentDidMount() {
    }
    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        this.setState({ search: event.target.value });
        console.log(this.state.search);
    }
    saveBook = data => {

        API.save({
            title: data.title,
            author: data.author,
            synopsis: data.synopsis,
            link: data.link,
            img: data.img
        })
            .then(res => {
                console.log(res.data.config)
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                console.log("what now?")
                console.log(res.data.config)
            })
            .catch(err => console.log(err.response));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }

                console.log("res;;", res)
                this.setState({ books: res.data.items });
                debugger;
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-9 mx-auto">
                    <h1>Search Books by Title</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="titleSearch" placeholder="Title" onChange={this.handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
                {(this.state.books.length > 0) && this.state.books.map(book => (
                    <div className="row" key={book.id}>
                        <div className="col-md-6 mx-auto">
                            <br />
                           return <BookCard
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                key={book.id}
                                id={book.id}
                                synopsis={book.volumeInfo.description}
                                link={book.volumeInfo.previewLink}
                                // image= {book.volumeInfo.imageLinks.thumbnail}
                                saveBook={this.saveBook}
                                
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Search;