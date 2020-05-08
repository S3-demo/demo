import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import orange from '@material-ui/core/colors/orange'
import Button from '@material-ui/core/Button';
import { Card, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    active: {
        color: green[500]
    },
    inactive: {
        color: red[500]
    },
    current: {
        color: orange[500]
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    button: {
        marginTop: '15px',
        backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }

}));

export default function ReviewMatches (){
    const classes = useStyles();

    return (
        <>  <Card>
                <CardContent>
                    <div >
                        <Grid container spacing={3} align="center" >
                        <Grid item xs={12}>
                            <Typography variant="h3" gutterBottom className={classes.inactive}>
                                <b>13</b>
                            </Typography>
                            New Matches
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'center'}}>
                            <Typography variant="h3" gutterBottom className={classes.active}>
                                <b>72</b>
                            </Typography>
                            Matches Verified
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'center'}}>
                            <Typography variant="h3" gutterBottom className={classes.current}>
                                <b>32</b>
                            </Typography>
                            Under Review
                        </Grid>
                        
                        </Grid>
                        <Button href="#/execution" fullWidth variant="contained" color="primary" className={classes.button}>
                        Review matches
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}