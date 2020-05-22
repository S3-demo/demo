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
//import { LineChart, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
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


function createData(time, amount) {
    return { time, amount };
  }
  
  

function DataQualityReport(){

    const classes = useStyles();

    const [ruleStatus, setRuleStatus] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleRuleStatusChange = (event) => {
        setRuleStatus({ ...ruleStatus, [event.target.name]: event.target.checked });
    }

    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May','June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Record Passed',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56]
          }
        ]
      }    

      const state1 = {
        labels: ['January', 'February', 'March',
                 'April', 'May','June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Record Passed',
            backgroundColor: 'rgb(191, 191, 63)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [45,34,57,68,90]
          }
        ]
      }    

      const state2 = {
        labels: ['January', 'February', 'March',
                 'April', 'May','June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Record Passed',
            backgroundColor: 'rgba(71, 231, 249, 0.2)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [15,45,35,22,14]
          }
        ]
      }    

      const state3 = {
        labels: ['January', 'February', 'March',
                 'April', 'May','June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Record Passed',
            backgroundColor: 'rgb(191, 127, 63)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [40, 21, 32, 15, 70]
          }
        ]
      }    



    return (<>
        <Paper variant="outlined" >
            <Typography component={'span'} variant={'body2'}>
            <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold'}}>
                Data Quality Report
            </Box>
            </Typography>

                    <Divider />
                    <ExpansionPanelDetails className={classes.details} style={{backgroundColor: 'rgba(75,192,192,1)'}}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Rule Type</b><br/> Range Check</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record Passed</b><br/> 
                            341
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record Failed</b><br/> 
                            45
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record</b><br/> 
                            386
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                  
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails className={classes.details} style={{backgroundColor: 'rgb(191, 191, 63)'}}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Rule Type</b><br/>Length Check</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record Passed</b><br/> 
                            294
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record Failed</b><br/> 
                            43
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record</b><br/> 
                            337
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                  
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails className={classes.details} style={{backgroundColor: 'rgba(71, 231, 249, 0.2)'}}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Rule Type</b><br/>List of Values</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record Passed</b><br/> 
                            131
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record Failed</b><br/> 
                            15
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record</b><br/> 
                            146
                        </Typography>
                    </div>

                    <div className={classes.column} >
                    </div>
                  
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails className={classes.details} style={{backgroundColor: 'rgb(191, 127, 63)'}}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Rule Type</b><br/>Null Check</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record Passed</b><br/> 
                            178
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record Failed</b><br/> 
                            8
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Total Record</b><br/> 
                            186
                        </Typography>
                    </div>

                    <div className={classes.column} >
                    </div>
                  
                    </ExpansionPanelDetails>





            <div>
        <Bar
        width="20%"
        height="2%"
          data={state}
          options={{
            title:{
              display:true,
              text:'Range Check Record By Month(Last 12 Months)',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right',
              responsive: true, maintainAspectRatio: true
            }
            
          }}
        />
      </div>

      <div>
        <Bar
        width="20%"
        height="2%"
          data={state1}
          options={{
            title:{
              display:true,
              text:'Length Check Record By Month(Last 12 Months)',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right',
              responsive: true, maintainAspectRatio: true
            }
            
          }}
        />
      </div>

      <div>
        <Bar
        width="20%"
        height="2%"
          data={state2}
          options={{
            title:{
              display:true,
              text:'List of Values Record By Month(Last 12 Months)',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right',
              responsive: true, maintainAspectRatio: true
            }
            
          }}
        />
      </div>


      <div>
        <Bar
        width="20%"
        height="2%"
          data={state3}
          options={{
            title:{
              display:true,
              text:'Null Check Record By Month(Last 12 Months)',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right',
              responsive: true, maintainAspectRatio: true
            }
            
          }}
        />
      </div>


        </Paper>
        </>
    )
}

export default DataQualityReport;