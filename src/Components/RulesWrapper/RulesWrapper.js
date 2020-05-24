import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MatchingRules from '../Rules/MatchingRules';
import MergeRules from '../Rules/MergeRules';
import {
    AppBar,
    Box,
    Card,
    CardContent,
    FormControl,
    Grid,
    IconButton,
    Typography,
    TextField,
    Tooltip,
} from '@material-ui/core';
import { Edit, Clear, Category,MergeType } from '@material-ui/icons'
import PlayArrow from '@material-ui/icons/PlayArrow';
import {green,red,indigo} from '@material-ui/core/colors';
import Visibility from '@material-ui/icons/Visibility';


import Breadcrumb from '../Breadcrumbs/Breadcrumb';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  PlayArrow: {
    color:green[500]
  },
  Timer: {
    color:indigo[500]
  },
  Visibility: {
    color: red[500]
  },
  actionButtons:{
      float: 'right',
      paddingBottom: '10px',
  },
  breadcrumbs:{
    paddingBottom: '10px',
  }
}));


export default function RulesWrapper() {
  
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [ruleSetNameEdit, setRuleSetNameEdit] = React.useState(false);
  const [ruleSetName, setRuleSetName] = React.useState('Rule Set Name');
  const [ruleSetDescriptionEdit, setRuleSetDescriptionEdit] = React.useState(false);
  const [ruleSetDescription, setRuleSetDescription] = React.useState('This is the place for Rule Set Description. Please click on the edit button to edit the content.');
  const [path, setpath] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  React.useEffect(()=>{
    setpath([{
      displayName: 'Home',
      displayIcon: 'Home',
      URL: '#/dashboard'
    },
    {
      displayName: 'Rules',
      displayIcon: '',
      URL: '#/rules'
    },
    {
      displayName: 'Add',
      displayIcon: '',
      URL: '#/rules/add'
    }])
  },[])

  React.useEffect(()=>{
    const path = window.location.hash;
    if(path === "#/rules/1"){
        setRuleSetName("Customer Rules");
        setpath([{
          displayName: 'Home',
          displayIcon: 'Home',
          URL: '#/dashboard'
        },
        {
          displayName: 'Rules',
          displayIcon: '',
          URL: '#/rules'
        },
        {
          displayName: 'Customer Rules',
          displayIcon: '',
          URL:''}])
    }else if(path === "#/rules/2"){
        setRuleSetName("Account Rules");
        setpath([{
          displayName: 'Home',
          displayIcon: 'Home',
          URL: '#/dashboard'
        },
        {
          displayName: 'Rules',
          displayIcon: '',
          URL: '#/rules'
        },
        {
          displayName: 'Account Rules',
          displayIcon: '',
          URL:''}])
    }
},[window.location.hash]);

 

  return (
    <div className={classes.root}>
    <Breadcrumb path={path}/>
    <Card className={classes.root} variant="outlined">
    <CardContent>
    <Grid container>
      <Grid item xs={3}>

      </Grid>
      <Grid item xs={6}>
      <Typography component={'span'} variant={'body2'}>
          <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{ fontWeight: 'bold' }}>
              Deduplication Rules
          </Box>
      </Typography>
      </Grid>
      <Grid className={classes.actionButtons}>
          <Tooltip title="Simulate">
              <IconButton aria-label="Start" className={classes.PlayArrow}>
                  <PlayArrow />
              </IconButton>
          </Tooltip>
          <Tooltip title="View Result">
              <IconButton aria-label="schedule" className={classes.Visibility}>
                  <Visibility />
              </IconButton>
          </Tooltip>
      </Grid>
    </Grid>

    
    <Grid container>
        <Grid item xs={4}>
            {!ruleSetNameEdit ? (
                <div>
                    <div className={classes.ruleSetName}><b>Ruleset Name: <br/></b> {ruleSetName}
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetNameEdit(true)}>
                            <Edit fontSize="small" />
                        </IconButton>
                    </div>
                </div>
            ) : (
                    <div>
                        <TextField id="outlined-basic" size="small" label="Rule Set Name" value={ruleSetName} variant="outlined" onChange={e => setRuleSetName(e.target.value)} />
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetNameEdit(false)}>
                            <Clear fontSize="small" />
                        </IconButton>
                    </div>
                )}

        </Grid>

        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
            {!ruleSetDescriptionEdit ? (
                <div>
                    <div className={classes.ruleSetDescription}><b>Ruleset Description: <br/></b> {ruleSetDescription}
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetDescriptionEdit(true)}>
                            <Edit fontSize="small" />
                        </IconButton>
                    </div>
                </div>
            ) : (
                    <div>
                        <FormControl fullWidth className={classes.margin}>
                            <TextField id="outlined-multiline-static" label="Rulset Description" multiline rows={3} variant="outlined" value={ruleSetDescription} onChange={e => setRuleSetDescription(e.target.value)} />
                            <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetDescriptionEdit(false)}>
                                <Clear fontSize="small" />
                            </IconButton>
                        </FormControl>
                    </div>
                )}

        </Grid>

            
        </Grid>
        </CardContent>
        <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
          centered
        >
          <Tab icon={<Category />} label="Matching Rules" {...a11yProps(0)} />
          <Tab icon={<MergeType />} label="Merge Rules" {...a11yProps(1)} />
        </Tabs>
        </AppBar>
        <CardContent>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MatchingRules />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MergeRules />
        </TabPanel>
      </SwipeableViews>

      </CardContent>
        </Card>
    </div>
  );
}