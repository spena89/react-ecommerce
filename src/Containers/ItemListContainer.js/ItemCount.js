import React, {useState} from 'react'
import "./itemCount.css"
import { Button } from '@mui/material';

import {Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography} from '@mui/material';

const ItemCount = ({stock, initial}) => {

    const [contador,setContador] = useState(initial);
    
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
        setContador(initial);
        console.log("exito");
        console.log({contador})
    }
    return (
        <>
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                component="img"
                height="140px"
                alt="nvidia rtx 3080"
                image="https://www.tradeinn.com/f/13880/138802072_5/asus-rog-strix-nvidia-geforce-rtx-3080-oc-12gb-gddr6-graphic-card.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nvidia RTX 3080
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Highend graphics card Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Et laudantium maiores facere eius illum doloribus culpa atque voluptatibus nulla quisquam,
                        laborum blanditiis amet. Magni iure repellat itaque ducimus, dolore corporis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick ={decrement} size="small">
                        -
                    </Button>
                    <span className ="contador">{contador}</span>
                    <Button variant="contained" color="primary" onClick={increment} size="small">
                        +
                    </Button>
                </CardActions>
                <Button variant="contained" color="primary" onClick={onAdd} fullWidth>
                    Add to cart
                </Button>
            </Card>
        </>
    )
}

export default ItemCount;