import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
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

export default function Rules (){
    const classes = useStyles();

    return (
        <>  
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }}>
        <Card>
            <CardContent>
                <div align="center">
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                            <b>5</b>
                        </Typography>
                        Total Rules
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
                             
                    </Grid>

                    </Grid>
                    <Button fullWidth href="#/rules/add" variant="contained" color="primary" className={classes.button}>
                        Create Rule
                    </Button>
                </div>
            </CardContent>
        </Card>
        </Grow>
        </>
    )
}