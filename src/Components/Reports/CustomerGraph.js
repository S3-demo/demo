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
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
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
  SvgIcon,
  Button
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


const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);


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



function createData(Name, Gender,Dob,address,devices,loyalty) {
  return {Name, Gender,Dob,address,devices,loyalty };
}

const rows = [
  createData('Jack Ryan','Male','3rd-Dec-1980','Houston','Mobile','Gold'),
  createData('Steve Collin','Female','5th-May-1990','Virginia','IPTV','Bronze'),
  createData('Satish Babu','Male','6th-Oct-1985','LA','Mobile','Broadband','Silver'),
  createData('Rack Cobs','Male','3rd-Nov-1998','Washingtom','Mobile','Diamond'),
  createData('Dynam sam','Male','13th-Sep-1970','Houston','IPTV','Gold'),
  createData('Collin som','Female','18th-Jan-1986','Charolotte','Mobile','Gold'),
  createData('Penta Tack','Female','3rd-Dec-1989','Houston','Mobile','Gold'),
  createData('Tekso Trak','Male','26th-Dec-1972','Houston','Mobile','Platinum'),
  createData('Cheki Lokiu','Female','23rd-Feb-2001','Texas','IPTV','Gold'),
  createData('Huiko Loiu','Female','3rd-Mar-1980','Houston','Broadband','Gold'),
];


function CutomerGraphView() {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <>
    <Grid container className={classes.root}>

<Grid xs={12}>

<Paper className={classes.paper1} elevation={3} style={{ marginLeft: '2px',marginBottom:'50px' }}>
  <div style={{ display: 'flex' }}>
    <Grid xs={12} align="center" spacing={3}>
    <Button variant="contained" style={{ marginRight: '15px'}}>
        High Usage 
</Button>
    <Button variant="contained" style={{ marginRight: '15px'}}>
        Corporate 
</Button>
<Button variant="contained" style={{ marginRight: '15px'}}>
        Defaulted 
</Button>

<Button variant="contained" style={{ marginRight: '15px'}}>
        Risky 
</Button>


    </Grid>
  </div>
  </Paper>

  <Grid container xs={12} spacing={3} style={{ marginLeft: '2px'}}>
  <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="right">Gender</StyledTableCell>
                  <StyledTableCell align="right">Date of Birth</StyledTableCell>
                  <StyledTableCell align="right">Address</StyledTableCell>
                  <StyledTableCell align="right">Device</StyledTableCell>
                  <StyledTableCell align="right">Loyalty</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.Name} >
                    <StyledTableCell align="left" component="th" scope="row" className={classes.tablecell}>
                        {row.Name}
                    </StyledTableCell>
                    <StyledTableCell align="right" className={classes.tablecell}>{row.Gender}</StyledTableCell>
                    <StyledTableCell align="right" className={classes.tablecell}>{row.Dob}</StyledTableCell>
                    <StyledTableCell align="right" className={classes.tablecell}>{row.address}</StyledTableCell>
                    <StyledTableCell align="right" className={classes.tablecell}>
                    <PhoneAndroidIcon fontSize="small"/>
                    </StyledTableCell>
                    <StyledTableCell align="right" className={classes.tablecell}>{row.loyalty}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      </Grid>
</Grid>


      </Grid>
      

      </>
  );
}

export default CutomerGraphView;