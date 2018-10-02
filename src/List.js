import React from 'react';

const DataS= [
    'Item 1',
    'Item2',
    'Item 3',
    'Item 4',
    'Item 5'
]

const List = () => (
    <ul>
        {DataS.map( (item, index)=> ( <li key ={index} > {item} </li> ) )}
    </ul>
)

export default List