import React,{component} from 'react';
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
import Avatar from '@material-ui/core/Avatar';
import {Bar,Line,Pie,Column} from 'react-chartjs-2';
//import CanvasJSReact from 'canvasjs';
//import CanvasJSReact from './canvasjs.react';
//import CanvasJS from './CanvasJS'; 
//const CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 

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


function DataQualityReport(){

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
                Data Quality Report
            </Box>

            </Typography>





        </Paper>
        </>
    )
}

export default DataQualityReport;