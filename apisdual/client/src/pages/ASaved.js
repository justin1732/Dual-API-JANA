import React from "react";
import SavedHeader from "../components/SavedHeader"
import API from "../utils/API"
import AResults from "../components/AResults";

class ASaved extends React.Component {
    state = {
        saved: [],
        btnColor: {background: 'red'} 
    }

componentDidMount (){
    this.getAnime()
}

getAnime = () =>{
    API.getAllAnimes()
    .then(res => {
        this.setState({saved: res.data})
    }
        )
}
render() {
    return (
        <div>
            <SavedHeader />
            <AResults
                animes = {this.state.saved}
                status = "Saved Anime:"
                buttonText = "Delete"
                buttonColor = {this.state.btnColor}
                getAnime = {this.getAnime}
            />
            </div>
    )

}
}
export default ASaved