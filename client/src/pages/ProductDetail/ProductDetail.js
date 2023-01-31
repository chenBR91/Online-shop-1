import React, {useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './ProductDetail.css';

// Metrial Ui //
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import AddCart from '../../components/Carts/AddCart';

function ProductDetail() {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const paramsId = params.productId

  useEffect(() => {
    getProductId()
  }, [])

  const getProductId = async() => {
    //const url = `http://localhost:8000/product/${paramsId}`;
    const url = `http://localhost:8000/api/products/productDetail/${paramsId}`;
    try {
      const res = await fetch(url);
      const product = await res.json();
      setSingleProduct(product[0]);
    } catch(err) {
      console.log('err', err);
    }
  }

  const {image, price, title, category} = singleProduct;
  useEffect(()=>{console.log(singleProduct)},[singleProduct])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

 return (
    <div className='middle-element frame'>
      <div className='products'>
        <Box sx={{ width: '100%'}}>
        <Typography gutterBottom variant="h4">{title} </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Item className='item'>
              <img src={singleProduct.image} alt={singleProduct.image} style={{width: '50%'}}/>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item className='item'>
              <div>{singleProduct.description}</div>
              <div className='btn-add'>
                <AddCart style={{bgColor: "green", color: 'white', width: '110px'}} situation={'increment'} id={singleProduct.id} selectBtn={'regularBtn'}>Add to cart</AddCart>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      </div>
    </div>
  )
}

export default ProductDetail