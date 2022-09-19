import React from 'react'   
import {Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography} from '@mui/material';
import Box from '@mui/material/Box';

    const Item = ({prod}) => { 
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
                <CardActions>    
                </CardActions>
            </Card>
        </Box>
    )
}

export default Item