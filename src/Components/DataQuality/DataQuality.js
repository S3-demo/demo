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
import {green,red,indigo,orange,blue,grey,cyan,lightBlue} from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/core/Icon';

function createData(name, minvalue, maxvalue, minlength, maxlength,lov,nulallowed) {
    return { name, minvalue, maxvalue, minlength, maxlength,lov,nulallowed };
  }
  
  const rows = [
    createData('Range Check', 0, 255,'','','',''),
    createData('Length Check', '', '',20,40,'',''),
    createData('List of Values', 262, 16.0, 24, 6.0),
    createData('Null Check', 305, 3.7, 67, 4.3)
  ];

  const editIcon = (
    <IconButton onClick={1}>
      <EditIcon color="primary" />
    </IconButton>
  );

const useStyles = makeStyles((theme)=>({
    root: {
        minWidth: 275,
    },
    table: {
        minWidth: 650,
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
        backgroundColor: lightBlue[10],
        borderWidth: 0,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        bordertopWidth: 1,
        borderbottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid'
        
    },
    column: {
        flexBasis: '33.33%',
        fontSize: theme.typography.pxToRem(15)
        
    },
    column1: {
        flexBasis: '33.33%',
        fontSize: theme.typography.pxToRem(15),
        borderWidth: 0,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        bordertopWidth: 1,
        borderbottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid'
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
                                <Typography variant="caption"><b>DQ Name: </b><br/> Customer Name Check</Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>DQ Description</b><br/>Defining rule for data quality of Customer Name </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Select Source</b><br/>Customer Source 1</Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Select Attribute</b><br/> cust_name</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.ruleHelper}>
                                <Button variant="outlined" size="small" className={classes.addRule} >
                                    <Add fontSize="small"/> Add DQ Rule 
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />



                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column}>
                        <Typography variant="caption"><b>Rule Type</b><br/> Range Check</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Minimum Value</b><br/> 
                            0
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Maximum Value</b><br/> 
                            255
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
                        <Typography variant="caption"><b>Rule Type</b><br/> Length Check</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Minimum Length</b><br/> 
                            10
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Maximum Length</b><br/> 
                            50
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
                        <Typography variant="caption"><b>Rule Type</b><br/> List of Values</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>List of Values</b><br/> 
                            
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

                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Rule Type</b><br/> Null Check</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Null Allowed</b><br/> 
                            No
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





                    <Divider />

                    <div className={clsx(classes.column)} style={{backgroundColor: grey[300]}}>
                        <Grid container>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>DQ Name: </b><br/> Transaction Type Check</Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>DQ Description</b><br/>Defining rule for data quality of Transaction Type </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Select Source</b><br/>Customer Source 2</Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Select Attribute</b><br/> Transactiontype</Typography>
                            </Grid>
                        </Grid>
                    </div>


                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Rule Type</b><br/> Range Check</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Minimum Value</b><br/> 
                            0
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Maximum Value</b><br/> 
                            255
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
                        <Typography variant="caption"><b>Rule Type</b><br/> Length Check</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Minimum Length</b><br/> 
                            10
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Maximum Length</b><br/> 
                            50
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
                        <Typography variant="caption"><b>Rule Type</b><br/> List of Values</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>List of Values</b><br/> 
                            Cash,Cheque,Online
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

                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Rule Type</b><br/> Null Check</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Null Allowed</b><br/> 
                            Yes
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





        </Paper>
        </>
    )
}

export default DataQuality;