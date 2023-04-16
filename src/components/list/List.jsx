import React from 'react';

const List = ({items = []}) => {
    if (!items.length) return null
    return(
        <div>
            <ul>
                {
                    items.map(el => (
                        <li key={el}>{el}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default List;