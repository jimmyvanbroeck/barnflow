import React from "react";

export const HorseTableItem: React.FC<{Id: number, name: string, breed: string, deleteHorse: Function}> = (props) => {

    return (
        <tr onClick={() => props.deleteHorse(props.Id)}>
            <th scope="row">{props.Id}</th>
            <td>{props.name}</td>
            <td>{props.breed}</td>
        </tr>
    )
}

