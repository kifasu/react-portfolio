import React from 'react';
import {BsLink} from 'react-icons/bs'

function Card(props) {
    return (
        <div className="card">
            <div className="card-title">
                <a  className="card-link-title" href={props.desc} rel="noreferrer" target="_blank" >
                <h1>{props.title}</h1>
                </a>
            </div>
            <div className="card-link">
                <a  className="card-link-a" href={props.desc} rel="noreferrer" target="_blank" >
                    <BsLink/>
                </a>
            </div>
        </div>
    )
}

export default Card;
