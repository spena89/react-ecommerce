import React from 'react'   
import {Card,
    CardContent,
    CardMedia,
    Typography} from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { height } from '@mui/system';

    const Item = ({prod}) => { 
        const urlDetails = `../product/${prod.id}`
        
        return(  
            <Box sx={{margin: "0 auto", height:"350"}}>
                <Card raised sx={{ maxWidth: 230, margin:1.5, height:500 }}>
                    <CardMedia sx={{padding:"1em", width:"90%", margin:"0 auto"}}
                        component="img"
                        height="140px"
                        alt={prod.title}
                        image={prod.image}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {prod.title}
                    </Typography>
                    <Typography sx={{textAlign:"center", marginTop:"20px"}} >
                        $ {prod.price}
                    </Typography>
                    </CardContent>
                    <Box sx={{ textAlign:"center"}}>
                    <NavLink to ={urlDetails}> ver más</NavLink>
                    </Box>
            </Card>
        </Box>
    )
}

export default Item