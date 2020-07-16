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

export const MensProductIndex = () => {

    const shoes = {
        "TennisShoes": {
            name: "Nike Court Air Zoom",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f30c4703-04e8-40ca-92d8-a509ddd1c851/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg"
        },
        "MensShoes": {
            name: "Nike Air Max",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7059d927-f94d-43a1-8e84-5016c98d07f0/air-max-plus-iii-shoe-pcRszz.jpg"
        },
        "MensRunningShoes": {
            name: "Nike Zoom Fly",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/02f027b3-cef8-4414-9160-c8f3ac544cd8/zoom-fly-3-running-shoe-9SdJdh.jpg"
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
