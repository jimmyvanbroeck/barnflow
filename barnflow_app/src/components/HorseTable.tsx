import { HorseTableItem } from "./HorseTableItem"
import React from "react";

export const HorseTable: React.FC<{horses: HorseModel[], deleteHorse: Function}> = (props ) => {
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Breed</th>
            </tr>
            </thead>
            <tbody>
            {props.horses.map(horse => (
                <HorseTableItem
                    key={horse.id}
                    Id={horse.id}
                    name={horse.name}
                    breed={horse.breed}
                    deleteHorse={props.deleteHorse}

                />
            ))}
            </tbody>
        </table>
    )
}

