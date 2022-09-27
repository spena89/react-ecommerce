import React from 'react'   
import {Card,
    CardContent,
    CardMedia,
    Typography} from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

    const Item = ({prod}) => { 
        const url = `../product/${prod.id}`
        
        return(  
            <Box sx={{marginRight:10}}>
                <Card sx={{ maxWidth: 230 }}>
                    <CardMedia
                        component="img"
                        height="140px"
                        alt={prod.title}
                        image={prod.image}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {prod.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap gutterBottom>
                        {prod.description}
                    </Typography>
                    <Typography align="center" >
                    $ {prod.price}
                    </Typography>
                    </CardContent>

                    <NavLink to ={url}> ver más</NavLink>
            </Card>
        </Box>
    )
}

export default Item