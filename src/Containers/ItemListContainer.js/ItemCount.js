import React, {useState} from 'react'
import "./itemCount.css"
import {Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button} from '@mui/material';

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
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                component="img"
                height="140px"
                alt={prod.product}
                image={prod.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {prod.product}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {prod.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button disabled={contador === initial} variant="contained" color="primary" onClick ={decrement} size="small">
                        -
                    </Button>
                    <span className ="contador">{contador}</span>
                    <Button disabled={contador === prod.stock} variant="contained" color="primary" onClick={increment} size="small">
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