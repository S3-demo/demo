import React from 'react'
import 
    {   
        Box,
        Grid,
        IconButton,
        Typography,
    } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import Options from '../Options/Options';
import MergingOptions from '../Options/MergingOptions';

const attrArray = [
    'First Name',
    'Last Name',
    'DOB',
    'Nationality',
    'Mobile Phone',
    'Personal Email',
]

const mergeArray = [
    'Maximum Occurance',
    'Maximum Occurance',
    'Not Null & any',
    'Maximum Length',
    'Not Null & any',
    'Maximum Occurance'
]
const optionsArray = [
    'First Name',
    'Middle Name',
    'Last Name',
    'Alias Name',
    'Full Name',
    'DOB',
    'Nationality',
    'Personal Email',
    'Business Email',
    'Personal Phone',
    'Mobile Phone',
    'Office Address',
    'Home Address'
]

export default function MergeRules(){
    return (
        <Grid item>
            <Grid container style={{marginTop:'25px'}}>
                <Grid item xs={3} centered="true">
                   
                </Grid>
                <Grid item xs={9} centered="true">
                    <Options attrArray={optionsArray}/>
                    <MergingOptions />
                    <IconButton aria-label="delete">
                        <AddBoxIcon fontSize="large" style={{color: green[500]}}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Typography component={'span'} variant={'body2'}>
                <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold',marginTop: '20px'}}>
                    Available Merge Rules
                </Box>
            </Typography>

                {[0,1,2,3,4,5].map((index)=>(
                    <Grid container style={{marginTop:'0px'}} key={`merge-${index}`}>
                    <Grid item xs={3} centered="true">
                   
                    </Grid>
                    <Grid item xs={9} centered="true">
                        <Options defaultValue={attrArray[index]} attrArray={optionsArray}/>
                        <MergingOptions defaultValue={mergeArray[index]}/>
                        <IconButton aria-label="delete">
                            <RemoveCircleIcon fontSize="small" style={{color: red[500]}}/>
                        </IconButton>
                    </Grid>
                    </Grid>
                ))}
        </Grid>
    )
}