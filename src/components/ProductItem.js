import React from "react";
import { Grid, Card, CardContent, Rating, colors } from "@mui/material";


const ProductItem = ({ item }) => {
  return (
    <Grid item xs={3} sx={{margin:"20px"}}>
      <Card sx={{ bgcolor: "blue",color: "white", textAlign: "center" }}>
        <CardContent>
          <img src={item.image} width="150px" height="150px" alt={item.title}/>
          <h3>{item.title}</h3>
          <h5>{item.category}</h5>
          <Rating name="rate" value={item.rating.rate} />
          {"(" + item.rating.count + ")"}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductItem