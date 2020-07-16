import React from 'react';
import { Link } from 'react-router-dom';
//import PageBuilder from './PageBuilder';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './ProductIndex.css';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 450,
//     },
//   });

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
      },
    paper: {
        padding: theme.spacing(1),
        Alignitems: 'center',
        color: theme.palette.text.secondary,
      },
    }));

export const Home = () => {

    const shoes = {
        "LadiesProducts": {
            name: "Nike For Women",
            img:
                "https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/69510770-3585-4587-8024-de4a5414aca2/free-metcon-3-training-shoe-B0MTbs.jpg"
        },
        "MensProducts": {
            name: "Nike for Men",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/02f027b3-cef8-4414-9160-c8f3ac544cd8/zoom-fly-3-running-shoe-9SdJdh.jpg"
        },
        "KidsProducts": {
            name: "Nike for Kids",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b903b1f-e7b0-4559-886d-115619bd492d/blazer-low-younger-shoe-xx05NM.jpg"
        },
    };

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={10}>

                {Object.entries(shoes).map(([ProductID, { name, img }]) =>
                    (
                        <li className={classes.paper}>
                            key={ProductID}
                            <Grid item xs={10} >
                                <Link to={ProductID}>
                                    <h2>{name}</h2>
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="230"
                                                    image={img}
                                                    title="Contemplative Reptile"               // <img src={img} alt={name} />
                                                />

                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Lizard
                                            </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                            </Typography>
                                            </CardContent>
                                            </CardActionArea>
                                        </Card>
                                </Link>
                            </Grid>
                        </li>
                    )
                )}
            </Grid>
        </div>
    )
}