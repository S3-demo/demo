import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(0),
        backgroundColor: 'inherit'
    },
}));


export default function Options(props){
    const {defaultValue, attrArray} = props;
    const classes = useStyles();
    const [attribute,setAttribute] = React.useState(defaultValue);

    const handleChange = (event) => {
        setAttribute(event.target.value);
    };
    
    return (
        <FormControl size="small" variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Matching Attribute</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={attribute}
          onChange={handleChange}
          label="Select Matching Attribute"
        >
            <MenuItem value="" disabled>
                Select Matching Attribute
            </MenuItem>
            
            {attrArray.map((value,index)=>(
                <MenuItem key= {index} value={value}>{value}</MenuItem>
            ))}
            
        </Select>
        </FormControl>
    );
}