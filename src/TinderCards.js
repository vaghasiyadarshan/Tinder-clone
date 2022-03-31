// import database from "./firebase";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";


import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'darshan',
            url: "",
        }
        ,
        {
            name: 'vaghasiya',
            url: "",
        }
    ]);
    



    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;