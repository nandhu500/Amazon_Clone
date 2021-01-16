import React from "react";
import "./Product.css";
import CardActions from "@material-ui/core/CardActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import orange from "@material-ui/core/colors/orange";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    objectFit: "contain",
  },

  media: {
    height: 200,
  },
});

export const Product = () => {
  const classes = useStyles();
  return (
    <div className="productss">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Books/XCM_CUTTLE_1280771_1443216_CA_GH20_3474075_758x608_2X_en_CA._SY608_CB417355660_.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Thea lean startup
            </Typography>
            <Typography variant="body2" component="p">
              <small>$</small>
              <strong>19</strong>
            </Typography>
          </CardContent>
        </CardActionArea>

        <Button size="large" style={{ color: "black" }}>
          Buy now
        </Button>
      </Card>
    </div>
  );
};
export default Product;

/* <div className="product">
      <div className="product_info">
        <p>Thea lean startup</p>
        <p className="productprice">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Books/XCM_CUTTLE_1280771_1443216_CA_GH20_3474075_758x608_2X_en_CA._SY608_CB417355660_.jpg"
        alt=""
      />

      <button>Add to Basket</button>
    </div> */
