import React, {useState} from 'react'
import "./itemCount.css"
import { Button } from '@mui/material';

const ItemCount = ({stock   }) => {
    
    
    const [contador,setContador] = useState(1);

    const increment = ()=>{
        if(contador < stock){
            setContador(contador +1);
        }
    }
    
    const decrement = ()=>{
        if(contador > 1 ){
            setContador(contador -1);  
        }
    }
const onAdd= () =>{
    console.log("exito");
    console.log({contador})
}
    
    return (
            <>
        <div>
            <p>Entregable contador de addToCart</p>
            <Button variant="contained" color="primary" onClick ={decrement} size="small">
            -
            </Button>
            <span className ="contador">{contador}</span>
            <Button variant="contained" color="primary" onClick={increment} size="small">
            +
            </Button>
        </div>
        <div>
            <button className="addToCart" onClick={onAdd}>add To Cart</button>
        </div>
            </>
        )
}

export default ItemCount;