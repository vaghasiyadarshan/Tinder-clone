// import database from "./firebase";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";


import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'darshan',
            url: "https://image.cnbcfm.com/api/v1/image/105074018-GettyImages-669889778.jpg?v=1570829866&w=929&h=523",
        }
        ,
        {
            name: 'vaghasiya',
            url: "https://i.insider.com/6154dfbbb414c100186301fb?width=1136&format=jpeg",
        }
    ]);
    

    // useEffect(() => {

    //     database
    //     .collection("people")
    //     .onSnapshot((Snapshot)=>

    //     setPeople(Snapshot.docs.map((doc)=>doc.data()))
    //     );
    // }, []);
    // //   useEffect(() => {
    //     const unsubscribe = database
    //       .collection("people")
    //       .onSnapshot((snapshot) =>
    //         setPeople(snapshot.docs.map((doc) => doc.data()))
    //       );

    //     return () => {
    //       unsubscribe();
    //     };
    //   }, []);

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