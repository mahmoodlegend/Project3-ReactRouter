import React from 'react';
import { Link } from 'react-router-dom';
//import PageBuilder from './PageBuilder';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

export const KidsProductIndex = () => {

    const shoes = {
        "Baby": {
            name: "Nike Air Max",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-c03d93cd-907a-4db4-9016-d027e39e9018/air-max-90-and-shoe-DRlXBP.jpg"
        },
        "BabyandTaddle": {
            name: "Nike Air Max 2090",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/929386b6-13e8-441e-b390-0ff736200212/air-max-2090-and-shoe-VGwJnn.jpg"
        },
        "BabyandToddieSlide": {
            name: "Nike Kawa",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a2432279-f957-4401-abab-715714e9bb9a/kawa-and-slide-pSbMfL.jpg"
        },
    };

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={10}>
                {Object.entries(shoes).map(([ProductID, { name, img }]) =>
                    (
                        <li className={classes.paper}>
                            {/* key={ProductID} */}
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
