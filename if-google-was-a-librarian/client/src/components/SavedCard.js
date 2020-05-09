import React from "react";
return (
function SavedCard (props){
    <div className="card" key={props.id}>
        <div className="card-body">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="card-title">{props.title}</h1>
                    <h3 className="card-subtitle mb-2 text-muted">by {props.author}</h3>
                </div>
                <div className="col-md-3">
                    <img src={props.img} alt={props.title} />
                </div>
            </div>
            <hr />
            <div className="row">

<p className="card-text">{props.synopsis}</p>
</div>
<a href={props.link} className="card-text">Preview</a>
<br />
<button className="card-link" onClick={() => props.saveBook(props)}>Save</button>
</div>
</div>
})

export default SavedCard;