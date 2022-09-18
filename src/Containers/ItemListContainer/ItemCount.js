import React, {useState} from 'react'
import "./itemCount.css"
import {Button} from '@mui/material';

const ItemCount = ({initial, prod}) => {

    const [contador,setContador] = useState(initial);
    
    // short circuit conditionals
    const increment = ()=>{
        contador < prod.stock && setContador(contador +1);
    }

    const decrement = ()=>{
        contador > 1 && setContador(contador -1); 
    }

    const onAdd= () =>{
    setContador(initial);
        console.log("exito");
        console.log({contador})
    }
    return (
        <>
            <Button disabled={contador === initial} variant="contained" color="primary" onClick ={decrement} size="small">
                        -
            </Button>
            <span className ="contador">{contador}</span>
            <Button disabled={contador === prod.stock} variant="contained" color="primary" onClick={increment} size="small">
                +
            </Button>
            <div className = "divButton">
            <Button variant="contained" color="primary" onClick={onAdd}>
                Add to cart
            </Button>
            </div>
        
        </>
    )
}

export default ItemCount;