import React from 'react';
import styles from './Test.module.css';
import {formatDollars} from "../../common/utils";


const Test = ({jeremyState}) => {
    const people = [
        {
            id: 1,
            name: 'Alice',
            pets: ['dog', 'cat'],
        },
        {id: 2, name: 'Bob', pets: ['turtle', 'rabbit']},
        {id: 3, name: 'Carl', pets: ['hamster', 'parrot']},
    ];

    return (
        <div>
            {people.map((person, index) => (
                <div key={index}>
                    <h2>Name: {person.name}</h2>

                    {person.pets.map((pet, index) => (
                        <div key={index}>
                            <h2>Pet: {pet}</h2>
                        </div>
                    ))}

                    <hr/>
                </div>
            ))}
        </div>
    );
}


export default Test;
