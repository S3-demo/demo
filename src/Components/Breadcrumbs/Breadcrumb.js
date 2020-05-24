import React from 'react'
import { makeStyles,emphasize, withStyles  } from '@material-ui/core/styles';
import {
    Breadcrumbs,
    Chip,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    }
  }));
  
  function handleClick(event) {
    event.preventDefault();
  }
  
export default function Breadcrumb(props){
const {path} = props;
  const classes = useStyles();
  return(
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
    {
        path.map((value,index)=>(
            <StyledBreadcrumb
        component="a"
        href={value.URL}
        label={value.displayName}
        icon={value.displayIcon == "Home" ? <HomeIcon fontSize="small" />: null}
        onClick={handleClick}
        key={index}
      />
        ))
    }
    </Breadcrumbs>
  )
}