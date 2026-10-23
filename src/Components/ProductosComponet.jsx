import { useEffect, useState } from 'react'

import {Button,
    Box,
    Grid,
    Card, 
    CardMedia,
    Typography,
    CardContent
  } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function ProductosComponet(){

    const [productos, setProductos] = useState([])

    const [ordenAsc, setOrdenAsc] = useState(false)

    const ordenarAscedente = () => {
        const orden = [...productos].sort((a,b)=> ordenAsc ? Number(b.price ?? b.price ) - Number(a.price ?? a.price)
        : 
         Number(a.price ?? a.price ) - Number(b.price ?? b.price)
    )

        setProductos(orden)
        setOrdenAsc(!ordenAsc)
    }

    useEffect(() => {
        

        const ObtenerProductos = async ()=>{
            try{
                const response = await fetch("https://devsapihub.com/api-ecommerce",
                {
                    method : "GET"
                })
                const data = await response.json()
                const orden =data.sort((a,b)=> Number(b.price ?? b.price ) - Number(a.price ?? a.price))

                setProductos(orden)
            }
            catch(error){
                console.log(error)
            }
        }
        ObtenerProductos();
    }, [])
    
    return(
        <>
        <Box sx={{display:"flex", flexWrap: "wrap", gap:2, justifyContent:"center", p: 2 }}>

        <Button 
        onClick={ordenarAscedente} 
        color="success"
        variant="contained"
        endIcon={
            ordenAsc ? 
            <ArrowUpwardIcon /> : 
            <ArrowDownwardIcon />
        }>{ordenAsc ? "Ascendente":"Descendente"}</Button>
        </Box>
    <Box sx={{display:"flex", flexWrap: "wrap", gap:2, justifyContent:"center", p: 2 }}>
      {productos.map((productos)=>(
        <Grid key={productos.id} size={{ xs: 6, md: 8, lg:12 }}
        >
            <Card sx={{ width:250, height: "100%" }}>
                <CardMedia
                    component="img"
                    sx={{ height: 250 }}
                    image={productos.img}
                    title={productos.title}
                    alt={productos.title}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {productos.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {productos.price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

      ))}
    </Box>
        </>
    )
}


export default ProductosComponet