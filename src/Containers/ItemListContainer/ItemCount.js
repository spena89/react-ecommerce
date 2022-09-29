import React, {useState} from 'react'
import "./itemCount.css"

import {Button} from '@mui/material';

const ItemCount = ({initial, stock, onAdd}) => {

    const [contador,setContador] = useState(initial);
    
    // short circuit conditionals
    const increment = ()=>{     
        contador < stock && setContador(contador +1);
    }

    const decrement = ()=>{
        contador > 1 && setContador(contador -1); 
    }


    return (
        <div>
            <Button disabled={contador === initial} variant="contained" color="primary" onClick ={decrement} size="small">
                        -
            </Button>
            <span className ="contador">{contador}</span>
            <Button disabled={contador === stock} variant="contained" color="primary" onClick={increment} size="small">
                +
            </Button>
            <div className = "addToCartButton">
            <Button variant="contained" color="primary" onClick={onAdd}>
                Add to cart
            </Button>
            </div>
        
        </div>
    )
}

export default ItemCount;