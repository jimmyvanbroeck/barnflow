import React, {useState} from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarFooter/navbar";
import {ExploreBarnflow} from "./layouts/HomePage/ExploreBarnflow";
import {HorseTable} from "./components/HorseTable";


export const App = () => {

    const [horses, setHorses] = useState([
            {id: 1, name: 'Darkie', breed: 'appa'},
            {id: 2, name: 'Greeye', breed: 'Micro'},
            {id: 3, name: 'Johny', breed: 'Indian'},
            {id: 4, name: 'Coboy', breed: 'Not Indian'}
        ]
    );

    const deleteHorse = (id: number) => {

    }


    return (
        <div>
            <Navbar/>
            <ExploreBarnflow/>

            <div className='mt-5 container'>
                <div className='card'>
                    <div className='card-header'>
                        Horsies
                    </div>
                    <div className="card-body">
                        <HorseTable horses={horses} deleteHorse={deleteHorse}/>

                    </div>
                </div>
            </div>
        </div>


    );
}

