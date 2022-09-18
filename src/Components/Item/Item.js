import React from 'react'   
import {Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography} from '@mui/material';

const Item = ({prod}) => { 
    return(
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
                </CardActions>
            </Card>
        </>
    )
}

export default Item