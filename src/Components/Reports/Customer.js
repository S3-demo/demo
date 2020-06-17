import React, { component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PersonIcon from '@material-ui/icons/Person';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ReactSigmaGraph from "./ReactSigmaGraph";
import TvIcon from '@material-ui/icons/Tv';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';

import {
  Box,
  Divider,
  ExpansionPanelDetails,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  Typography,
  Badge,
  TextField,
  SvgIcon
} from '@material-ui/core';
import { Edit, Clear, Add, } from '@material-ui/icons'
import GetApp from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';
//import { green, red, indigo, orange, blue, grey } from 'rsuite';
import { green, cyan, red, indigo, orange, blue, grey, brown } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import { Bar, Line, Pie, Column, Doughnut } from 'react-chartjs-2';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Icon from '@material-ui/core/Icon';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Graph from 'react-sigma-graph';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import mobileimage from './smartphone.svg';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';

const stacktel = {
  labels: ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Broadband',
    data: [300, 200, 240, 380, 270, 290, 320, 300, 210, 250, 280, 310],
    backgroundColor: '#22aa99'
  }, {
    label: 'Digital TV',
    data: [100, 50, 110, 40, 70, 90, 100, 140, 40, 60, 80, 100],
    backgroundColor: '#994499'
  }, {
    label: 'Mobile Data',
    data: [200, 300, 150, 90, 100, 180, 120, 160, 100, 80, 40, 60],
    backgroundColor: '#808000'
  }]
}

const paymentprofile = {
  labels: ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Payment Trend',
    data: [300, 300, 300, 300, 300, 400, 300, 300, 300, 450, 300, 300],
    borderColor: "#3e95cd",
    fill: false
  }]
}


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  table: {
    fontSize: '100pt',
  },
  tablecell: {
    fontSize: '7pt'
  },
  paper: {
    height: 140
  },
  paper3: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  paper2: {
    height: 245
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'left'
  },
  control: {
    padding: theme.spacing(2),
  },
  palette: {
    primary: { main: "#e91e63", contrastText: "#fff" },
    secondary: { main: "#03a9f4", contrastText: "#fff" }
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
  download: {
    flexBasis: '33.33%',
    fontSize: theme.typography.pxToRem(15),
    float: 'right'
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
    color: green[500]
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
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40,
  },
  shapeCircle: {
    borderRadius: '50%',
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingBottom: 5
  },
  cover: {
    width: 65,
    height: 65,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  graph: {
    height: 370
  }
}));



const piedata = {
  datasets: [{
    data: [10, 30],
    backgroundColor: [
      '#22aa99',
      '#994499'
    ],
    hoverBackgroundColor: [
      '#22aa99',
      '#994499'
    ],
  }],
  labels: [
    'Used Data',
    'Unsed Data'
  ],

};

const pie2data = {
  datasets: [{
    data: [10, 20],
    backgroundColor: [
      '#22aa99',
      '#994499'
    ],
    hoverBackgroundColor: [
      '#22aa99',
      '#994499'
    ],
  }],
  labels: [
    'Used Minutes',
    'Unused Minutes'
  ],

};

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 10,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});


function createData(ordernumber, orderdate, status) {
  return { ordernumber, orderdate, status };
}

const rows = [
  createData(1598798989, '21/01/2020', 'Pending'),
  createData(237909090, '8/05/2020', 'Pending'),
  createData(2628898989, '12/06/2020', 'Pending')
];


function createData1(product, serviceid, price) {
  return { product, serviceid, price };
}

const rows1 = [
  createData1('Mobile', 'Data Pack', '8769099'),
  createData1('Digital TV', 'Regional Pack', '9876778'),
  createData1('Broadband', 'High Speed Pack', '9978787')
];


function CutomerView() {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const _data = {
    nodes: [
      { id: 'a', category: 'Customer', name: 'Jack Claim',img:'./smartphone.svg'},
      { id: 'b', category: 'Customer', name: 'Jack Claim' ,img:'./smartphone.svg'},
      { id: 'c', category: 'Customer', name: 'Jack Claim' ,img:'./smartphone.svg'},
      { id: 'd', category: 'Service', name: 'Mobile Phone' ,img:'./smartphone.svg'},
      { id: 'e', category: 'Service', name: 'Broadband' ,img:'./smartphone.svg'},
      { id: 'f', category: 'Service', name: 'Digital TV' ,img:'./smartphone.svg'},
      { id: 'g', category: 'Address', name: 'Houston' ,img:'./smartphone.svg'},
      { id: 'h', category: 'Address', name: 'Houston Richmond' ,img:'./smartphone.svg'},
      { id: 'i', category: 'Service', name: 'Mobile Phone' ,img:'./smartphone.svg'}
    ],
    // edge labels and types are optional
    edges: [
      { source: 'a', target: 'b', label: 'Service Bought', type: 'curvedArrow' },
      { source: 'a', target: 'c', label: 'Service Bought', type: 'curvedArrow' },
      { source: 'a', target: 'd', label: 'Service Bought', type: 'curvedArrow' },
      { source: 'a', target: 'g', label: 'Service Bought', type: 'curvedArrow' },
      { source: 'b', target: 'i', label: 'Service Bought', type: 'curvedArrow' },
      { source: 'c', target: 'e', label: 'Service Bought', type: 'curvedArrow' },
      { source: 'c', target: 'f', label: 'Service Bought', type: 'curvedArrow' },
      { source: 'b', target: 'h', label: 'Service Bought', type: 'curvedArrow' },
      { source: 'c', target: 'h', label: 'Service Bought', type: 'curvedArrow' }
    ]
  };
  // optional color definition, defaults to d3 category10 based on domain of categories in data
  const _categoryColors = {
    'Customer': '#1f77b4',
    'Service': '#808000',
    'Address': '#ff7f0e'
  };


  return (
    <>
    <Grid container className={classes.root}>
      <Grid container xs={9} spacing={3}>
        <Grid item xs={4}>
          <Card className={classes.root} style={{ margin: '4px', height: '370px' }}>
            <div className={classes.details}>
              <CardContent className={classes.content} align="center">
                
              <AccountBoxIcon fontSize="large" color="primary" align="center"/>

                <Typography variant="h4" display="block" gutterBottom align="center">
                  Jack Ryan
                </Typography>
                <Grid container>
                <Grid xs={12} style={{paddingBottom: 10}}>
                  <HomeIcon fontSize="small" />
                  <Typography variant="subtitle1" display="block" gutterBottom align="center">
                  325,Richmond Street<br />
                  Rover,WA 560102,USA<br />
                  </Typography>
                </Grid>
                <Grid xs={12}>
                <EmailIcon fontSize="small" color="secondary" /> 
                <Typography variant="subtitle1" display="block" gutterBottom align="center">
                  jryan@gmail.com
                </Typography>
                </Grid>
                <Grid xs={12}>
                <PhoneIcon fontSize="small" color="primary" /> 
                <Typography variant="subtitle1" display="block" gutterBottom align="center">
                  (651) 876-098
                </Typography>
                </Grid>
                </Grid>
                <br/>
                </CardContent>
                <Divider />
                <CardContent style={{paddingTop:5}}>
                <Typography variant="caption" display="block" gutterBottom >
                  <b>Payement Due :</b> $150
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  <b>Payement Due Date:</b> 14th June,2020
              </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Paper className={clsx(classes.paper1, classes.graph)} elevation={3}>
            <ReactSigmaGraph data={_data} categoryColors={_categoryColors} />
          </Paper>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={4}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Asset</StyledTableCell>
                  <StyledTableCell align="right">Package</StyledTableCell>
                  <StyledTableCell align="right">ServiceId</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <StyledTableRow key={row.product} >
                    <StyledTableCell component="th" scope="row" className={classes.tablecell}>
                      {row.product}
                    </StyledTableCell>
                    <StyledTableCell align="right" className={classes.tablecell}>{row.serviceid}</StyledTableCell>
                    <StyledTableCell align="right" className={classes.tablecell}>{row.price}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper1} elevation={1}>

            <Pie
              width="10%"
              height="7%"
              data={piedata}
              options={{
                title: {
                  display: true,
                  text: 'Broadband Usage(GB)',
                  fontSize: 9
                },
                legend: {
                  display: true,
                  boxWidth: 5,
                  padding: 7,
                  fontSize: 5,
                  position: 'bottom',
                  responsive: true,
                  fullWidth: false,
                  maintainAspectRatio: true
                },
                responsive: true,
              }}
            />
          </Paper >
        </Grid>


        <Grid item xs={4}>
          <Paper className={classes.paper1} elevation={3} >

            <Doughnut
              width="10%"
              height="7%"
              data={pie2data}
              options={{
                title: {
                  display: true,
                  text: 'Voice Usage',
                  fontSize: 9
                },
                legend: {
                  display: true,
                  boxWidth: 5,
                  padding: 7,
                  fontSize: 5,
                  position: 'bottom',
                  responsive: true,
                  fullWidth: false,
                  maintainAspectRatio: true
                },
                responsive: true,
              }}
            />
          </Paper >
        </Grid>
      </Grid>
      </Grid>
      <Grid xs={3}>

          <Paper className={classes.paper1} elevation={3} style={{ marginLeft: '20px',marginBottom:'10px' }}>
            <div style={{ display: 'flex' }}>
              <Grid xs={6} align="center">
 
              <Avatar className={classes.large} style={{ backgroundColor: green[500] }} align="center">
                70
       
              </Avatar>
 
              <Typography variant="body2" display="block" gutterBottom font={2}>
                KYC
              </Typography>
              </Grid>

              <Grid xs={6} align="center">
 
              <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        badgeContent={6} color="secondary">
              <Avatar className={classes.large} style={{ backgroundColor: blue[500] }} align="center">
                <GroupIcon fontSize="large" />
       
              </Avatar>
              </Badge> 
 
              <Typography variant="body2" display="block" gutterBottom font={1}>
                Matching
              </Typography>
              </Grid>

              <Grid xs={6} align="center">
              <Avatar className={classes.large} style={{ backgroundColor: red[400] }}>
                <WarningIcon fontSize="small" />
              </Avatar>
              <Typography variant="body2" display="block" gutterBottom>
                Fraud Alert
              </Typography>
              </Grid>
            </div>
            </Paper>
<Paper className={classes.paper1} style={{marginLeft: '20px'}}>


              
<Timeline align="left">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            June 01 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <MobileScreenShareIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="body2" display="block" gutterBottom align="left">
              Customer Ordered for New Mobile Connection</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          June 04 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <PhoneCallbackIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="body2" display="block" gutterBottom align="left">
              Call back requested by Ryan</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          June 07 2020
          </Typography>
        </TimelineOppositeContent> 
        <TimelineSeparator>
          <TimelineDot color="primary">
            <PhoneCallbackIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="body2" display="block" gutterBottom align="left">
              Call back customer in 2 hrs</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          June 10 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <MobileScreenShareIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="body2" display="block" gutterBottom align="left">
              Call Following up with Ryan</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
             June 12 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <MobileScreenShareIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" display="block" gutterBottom align="left">
              Replacement for new setupbox
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          June 14 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <MobileScreenShareIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="body2" display="block" gutterBottom align="left">
              Placed an order new IPTV</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>


    </Paper >
        </Grid>

      </Grid>
      

      <Grid container xs={12} spacing={3} style={{marginTop: '5px '}}>
        <Grid item xs={6} >
          <div >
            <Bar
              width="20%"
              height="10%"
              data={stacktel}
              options={{
                title: {
                  display: true,
                  text: 'Billing Profile(Last 12 Billing)',
                  fontSize: 15,
                  Align: 'left'
                },
                legend: {
                  display: true,
                  position: 'top',
                  responsive: true, maintainAspectRatio: true
                },
                scales: {
                  xAxes: [{
                    stacked: true
                  }],
                  yAxes: [{
                    stacked: true
                  }]
                }
              }}
            />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div >
            <Line
              width="20%"
              height="10%"
              data={paymentprofile}
              options={{
                title: {
                  display: true,
                  text: 'Payment Profile(Last 12 Billing)',
                  fontSize: 15,
                  Align: 'left'
                },
                legend: {
                  display: true,
                  position: 'top',
                  responsive: true, maintainAspectRatio: true
                }
              }}
            />
          </div>
        </Grid>
      </Grid>
      </>
  );
}

export default CutomerView;