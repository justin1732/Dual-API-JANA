import React, { Component } from "react";
import "./AResults.css"
import API from "../../utils/API"


class AResults extends Component {
    handleSave = (id) => {
        API.saveAnime(id).then(res => console.log(res.status))
    }
    handleDelete = (id) => {
        API.deleteAnime(id).then(() => this.props.getAnime())
    }
    handleButton = (id) => {
        if (this.props.buttonText === "Save") {
            this.handleSave(id)
        }
        else {
            this.handleDelete(id)
        }
    }
    render() {
        return (
            <div className="results">
                <h1>{this.props.status}</h1>

                {this.props.animes.map(anime => (
                    <div className="result-box" key={anime.type}>
                         <div className="row">
                            <div className="col-md-8">
                                <p className="title">{anime.title}</p><br />
                                <p className="type">Type: {anime.type}</p>
                            </div>
                            <div className="col-md-4">
                                <div className="buttonDiv">
                                <button className="save btn" onClick={() => this.handleButton(anime._id)} style={this.props.buttonColor}>{this.props.buttonText}</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-10">
                                <p className="description">{anime.description}</p>
                            </div>
                        </div>
                        <br />
                      </div>
                ))}
            </div>

        )
    }
};

export default AResults;