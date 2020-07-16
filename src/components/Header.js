import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SplitButton from './DropDownButton';
// import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ width: '100%' }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography>
                        <h4>ShoesStore</h4>
                    </Typography>

                    <SplitButton />

                    {/* <Link to="Home">Home</Link>  {'    '}
                    <Link to="LadiesProducts">LadiesProduct</Link> */}

                </Toolbar>
            </AppBar>
        </div>
    );
}


// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import { Link } from 'react-router-dom'

// export const Header = () => {
//     return (
//         <nav>
//             <Link to="Home">Home</Link>  {'    '}
//             <Link to="Products">Product</Link>
//         </nav>
//     )
// }