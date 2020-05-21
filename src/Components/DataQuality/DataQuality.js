import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
    Button,
    Box,
    Divider,
    ExpansionPanelDetails,
    FormControlLabel,
    Grid,
    IconButton,
    Paper,
    Switch,
    Typography
} from '@material-ui/core';
import { Edit, Clear, Add, } from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import {green,red,indigo,orange,blue,grey} from '@material-ui/core/colors';


const useStyles = makeStyles((theme)=>({
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
    addRule:{
        float: 'right',
    },
    actionButtons:{
        float: 'right',
        paddingBottom: '10px',
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
        alignItems: 'center',
        backgroundColor: grey[200],
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
    PlayArrow: {
      color:green[500]
    },
    RotateLeft: {
      color:orange[900]
    },
    Timer: {
      color:indigo[500]
    },
    Stop: {
      color: red[500]
    }
}));

function DataQuality(){

    const classes = useStyles();

    const [ruleStatus, setRuleStatus] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleRuleStatusChange = (event) => {
        setRuleStatus({ ...ruleStatus, [event.target.name]: event.target.checked });
    }

    return (<>
        <Paper variant="outlined" >
            <Typography component={'span'} variant={'body2'}>
            <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold'}}>
                Data Quality
            </Box>
            </Typography>
            <div className={clsx(classes.column)} style={{backgroundColor: grey[300]}}>
                        <Grid container>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Name: </b><br/> Match FullName DOB Email</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Description</b><br/>This rule matches Full Name on fuzzy and Date of Birth , Email on exact  </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Weightage</b><br/> 25</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.ruleHelper}>
                                <Button variant="outlined" size="small" className={classes.addRule} >
                                    <Add fontSize="small"/> Add Attribute 
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> Full Name</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Fuzzy
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Fuzzy Cut Off: </b><br/> 
                            25
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> DOB</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Exact Match
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> Email</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Exact Match
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
        </Paper>
        </>
    )
}

export default DataQuality;