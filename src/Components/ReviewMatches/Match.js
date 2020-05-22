import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
    Button,
    Box,
    Divider,
    ExpansionPanelDetails,
    Fab,
    FormControlLabel,
    Grid,
    IconButton,
    Paper,
    Switch,
    Typography
} from '@material-ui/core';
import { Edit, Cancel } from '@material-ui/icons'
import CheckCircle from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { green, red, indigo, orange, blue, grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    ruleSetName: {
        fontSize: theme.typography.pxToRem(15),
        color: "grey",
    },
    ruleSetDescription: {
        fontSize: theme.typography.pxToRem(15),
        color: "grey",
    },
    ruleSetScoreThreshold: {
        fontSize: theme.typography.pxToRem(15),
        color: "grey",
    },
    aggregationMethod: {
        margin: theme.spacing(1),
        fontSize: theme.typography.pxToRem(15),
        width: 200,
    },
    addRule: {
        float: 'right',
    },
    actionButtons: {
        padding: theme.spacing(1, 2),
        textAlign: 'right'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    ruleWeightage: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        textAlign: 'center',
        backgroundColor: grey[200],
        paddingBottom: 0,
    },
    column: {
        flexBasis: '33.33%',
        fontSize: theme.typography.pxToRem(15),
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    ruleHelper: {
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    accept: {
        color: green[500],
        fontWeight: "bold"
    },
    RotateLeft: {
        color: orange[900]
    },
    Timer: {
        color: indigo[500]
    },
    Stop: {
        color: red[500]
    },
    reject: {
        color: red[500],
        fontWeight: "bold"
    }
}));

export default function Match() {
    const classes = useStyles();
    const [ruleStatus, setRuleStatus] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleRuleStatusChange = (event) => {
        setRuleStatus({ ...ruleStatus, [event.target.name]: event.target.checked });
    }
    return (
        <>
            <Typography component={'span'} variant={'body2'}>
                <Box m={1} fontSize="h6.fontSize" style={{ fontWeight: 'bold' }}>
                    Pending Review
                </Box>
            </Typography>
            <div className={clsx(classes.column)} style={{ backgroundColor: grey[300] }}>
                <Grid container>
                    <Grid item xs={2} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Id :</b><br />M1</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Reason : </b><br />This rule matches Full Name on fuzzy and Date of Birth , Email on exact  </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Score :</b><br /> 78</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.actionButtons}>
                        <IconButton aria-label="Start" className={classes.accept}>
                            <CheckCircle />
                        </IconButton>
                        <IconButton aria-label="Start" className={classes.reject}>
                            <Cancel />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <Divider />
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Sources</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Name</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Location</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Priority</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Email</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Country</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Actions</b></Typography>
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 1</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Antony</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Kerala</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p1</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">test@gmail.com</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">India</Typography>
                </div>
                <div className={classes.column} >
                    <IconButton aria-label="Start" size="small">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Antony B</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">New York</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p1</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">antony.b@gmail.com</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">USA</Typography>
                </div>
                <div className={classes.column} >
                    <IconButton aria-label="Start" size="small">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Antony hernando</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Belgium</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">anotny.03@gmail.com</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">UK</Typography>
                </div>
                <div className={classes.column} size="small">
                    <IconButton aria-label="Start" size="small">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </ExpansionPanelDetails>








            <Typography component={'span'} variant={'body2'}>
                <Box m={1} fontSize="h6.fontSize" style={{ fontWeight: 'bold' }}>
                    Approved Matches
                </Box>
            </Typography>

            <div className={clsx(classes.column)} style={{ backgroundColor: grey[300] }}>
                <Grid container>
                    <Grid item xs={2} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Id :</b><br />M2</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Reason : </b><br />This rule matches Full Name on fuzzy and Date of Birth , Email on exact  </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Score :</b><br /> 75</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.actionButtons}>
                        <IconButton aria-label="Start" className={classes.accept}>
                            <CheckCircle />
                        </IconButton>
                        <IconButton aria-label="Start" className={classes.reject}>
                            <Cancel />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <Divider />
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Sources</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Name</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Location</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Priority</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Email</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Country</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Actions</b></Typography>
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Ching yul</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Shangai</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">ching.yul@ydeb.com</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">China</Typography>
                </div>
                <div className={classes.column} >
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Chink chong</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Honk kong</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">chink.chong@htyd.org</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Japan</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption" color="secondary">Deleted</Typography>
                </div>
            </ExpansionPanelDetails>






















            
            <div className={clsx(classes.column)} style={{ backgroundColor: grey[300] }}>
                <Grid container>
                    <Grid item xs={2} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Id :</b><br />M3</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Reason : </b><br />This rule matches Full Name on fuzzy and Date of Birth , Email on exact  </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Score :</b><br /> 78</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.actionButtons}>
                        <IconButton aria-label="Start" className={classes.accept}>
                            <CheckCircle />
                        </IconButton>
                        <IconButton aria-label="Start" className={classes.reject}>
                            <Cancel />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <Divider />
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Sources</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Name</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Location</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Priority</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Email</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Country</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Actions</b></Typography>
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 1</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Antony</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Kerala</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p1</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">test@gmail.com</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">India</Typography>
                </div>
                <div className={classes.column} >
                <Typography variant="caption" color="secondary">Deleted</Typography>
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Antony B</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">New York</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p1</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">antony.b@gmail.com</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">USA</Typography>
                </div>
                <div className={classes.column} >
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Antony hernando</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Belgium</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">anotny.03@gmail.com</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">UK</Typography>
                </div>
                <div className={classes.column} size="small">
                <Typography variant="caption" color="secondary">Deleted</Typography>
                </div>
            </ExpansionPanelDetails>







            <Typography component={'span'} variant={'body2'}>
                <Box m={1} fontSize="h6.fontSize" style={{ fontWeight: 'bold' }}>
                   Rejected Matches
                </Box>
            </Typography>


            <div className={clsx(classes.column)} style={{ backgroundColor: grey[300] }}>
                <Grid container>
                    <Grid item xs={2} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Id :</b><br />M4</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Reason : </b><br />This rule matches Full Name on fuzzy and Date of Birth , Email on exact  </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.ruleHelper}>
                        <Typography variant="caption"><b>Score :</b><br /> 75</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.actionButtons}>
                        <IconButton aria-label="Start" className={classes.accept}>
                            <CheckCircle />
                        </IconButton>
                        <IconButton aria-label="Start" className={classes.reject}>
                            <Cancel />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <Divider />
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Sources</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Name</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Location</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Priority</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Email</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Country</b></Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption"><b>Actions</b></Typography>
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Ching yul</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Shangai</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">ching.yul@ydeb.com</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">China</Typography>
                </div>
                <div className={classes.column} >
                 <Typography variant="caption" color="secondary">Deleted</Typography>
                </div>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Customer Source 2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Chink chong</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Honk kong</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">p2</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">chink.chong@htyd.org</Typography>
                </div>
                <div className={classes.column} >
                    <Typography variant="caption">Japan</Typography>
                </div>
                <div className={classes.column} >
                    <IconButton aria-label="Start" size="small">
                        
                    </IconButton>
                </div>
            </ExpansionPanelDetails>
        </>
    )
}