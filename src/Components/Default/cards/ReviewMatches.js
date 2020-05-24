import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import orange from '@material-ui/core/colors/orange'
import Button from '@material-ui/core/Button';
import { Card, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';


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
        'linear-gradient( 136deg, rgb(63, 81, 181) 0%, rgb(63, 81, 181) 50%, rgb(63, 137, 181) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }

}));

export default function ReviewMatches (){
    const classes = useStyles();

    return (
        <>  
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 3000 }}>
        <Card>
                <CardContent>
                    <div >
                        <Grid container spacing={3} align="center" >
                        <Grid item xs={12}>
                            <Typography variant="h3" gutterBottom className={classes.inactive}>
                                <b>2</b>
                            </Typography>
                            Total Pending
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>
                            <b> </b>
                        </Typography>
                         
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>
                                <b></b>
                            </Typography>
                             
                    </Grid><Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>
                            <b> </b>
                        </Typography>
                         
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>
                                <b></b>
                            </Typography>
                             
                    </Grid><Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>
                            <b> </b>
                        </Typography>
                         
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>
                                <b></b>
                            </Typography>
                             
                    </Grid>
                        
                        </Grid>
                        <Button href="#/ReviewMatches" fullWidth variant="contained" color="primary" className={classes.button}>
                        Review matches
                        </Button>
                    </div>
                </CardContent>
            </Card>
            </Grow>
        </>
    )
}