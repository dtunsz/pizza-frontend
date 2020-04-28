import React from 'react';


function Item(props){
    const {singleItem} = props

    return(
        <tr>
            <td>{singleItem.productName}</td>
            <td>{singleItem.productPrice}</td>
            <td>{singleItem.quantity}</td>
        </tr>
    )
}

export default Item