import React, {useState} from 'react'   
import {Card,
    CardContent,
    CardMedia,
    Typography} from '@mui/material';
import Box from '@mui/material/Box';
import ItemCount from '../../Containers/ItemListContainer/ItemCount';
import "../../Containers/ItemListContainer/itemCount.css"
import {Link} from "react-router-dom"
import {Button} from '@mui/material';

const ItemDetails = ({prod}) => { 

    const[goToCart, setGoToCart] = useState(false)
    
    const onAdd= () =>{
        setGoToCart(true);
        console.log(goToCart)
    }
    
    const generateStock = () =>{
        const stock = Math.floor(Math.random()*20)
        prod.stock = stock;
    
    }
    generateStock();

    return(
        <Box sx={{marginTop:10}}>
            <Card sx={{ maxWidth: 800, height: 700 } }>
                <CardMedia
                    component="img"
                    height="300px"
                    alt={prod.title}
                    image={prod.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {prod.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {prod.description}
                    </Typography>
                    <Typography align="center" variant="h5">
                    $ {prod.price} 
                    {console.log(prod)}
                    </Typography>
                    <Typography align ="center">
                    only {prod.stock} in stock!
                    </Typography>
                </CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                    {/* stock hardcodeado hasta definir como manejarlo */}
                {
                   goToCart ? <Link style = {linkStyles.links} to ='/cart'> <Button variant="contained" color="primary">Finish Purchase </Button> </Link> :  
                   <ItemCount initial = {1} stock ={prod.stock} onAdd={onAdd} />    

                  
                }
                </Box>

            </Card>
        
        </Box>
    )
}

const linkStyles = {
    links: {
      textDecoration:"none",
      color:"white"
    }
}

export default ItemDetails