import React from 'react';
import { Link } from 'react-router-dom';
//import PageBuilder from './PageBuilder';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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

export const ProductIndex = () => {

    const shoes = {
        "air-jorden-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&"
        },
        "HardCourtTennis": {
            name: "Nike Air Zoom",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ab7d07a-ce93-4c05-af85-d74371472c82/air-zoom-pegasus-37-running-shoe-qVSCSr.jpg"
        },
        "NikeAirVapormax": {
            name: "Nike React Miler",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f460208-a89e-41e8-a93b-dd253b675911/react-miler-running-shoe-Rl20rZ.jpg"
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