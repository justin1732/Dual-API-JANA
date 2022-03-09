import React from "react";
import Header from "../components/Header"
import AResults from "../components/AResults"
import API from "../utils/API"
import ReactDOM from "react-dom";
class Search extends React.Component {
    state = {
        animes: [],
        search: "",
        status: "Search for some Anime!",
    }
    handleSearch = (search) => {
        API.searchAnimes(search)
            .then(res => {
                this.setState({ animes: res.data, status: "Search Results:" })
                console.log(this.state)
                const results = ReactDOM.findDOMNode(this.refs.test);
                results.scrollIntoView({behavior: 'smooth'});
            })
    }
    updateInput = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    componentWillUnmount() {
        API.deleteAllAUnsaved()
    }
    render() {
        return (
            <div>
                <Header
                    handleSearch={this.handleSearch}
                    search={this.state.search}
                    updateInput={this.updateInput}
                />
                <div ref="test" >
                    <AResults
                        animes={this.state.animes}
                        status={this.state.status}
                        buttonText="Save"
                    />
                </div>
            </div>
        )
    }
}

export default Search