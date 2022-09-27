import React from 'react'   
import {Card,
    CardContent,
    CardMedia,
    Typography} from '@mui/material';
import Box from '@mui/material/Box';
import ItemCount from '../../Containers/ItemListContainer/ItemCount';
import "../../Containers/ItemListContainer/itemCount.css"

const ItemDetails = ({prod}) => { 
    return(
        <Box sx={{marginRight:10}}>
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
                        {/* el 2 es temporal mientras resuelvo como traer el stock real */}
                    only 2{prod.stock} in stock!
                    </Typography>
                </CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                    {/* stock hardcodeado hasta definir como manejarlo */}
                <ItemCount initial = {1} stock ={10} />    
                </Box>
                    
            </Card>
        
        </Box>
    )
}

export default ItemDetails