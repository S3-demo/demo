import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Options from '../Options/Options';
import { Button } from '@material-ui/core';

const attrArray = [
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
    'Work Address',
    'Home Address'
]
const useStyles = makeStyles({
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
    tableCellStyle:{
        padding:0
    },
    tableContainer:{

    }
});
const cust1options = [
    'FirstName',
    'MiddleName',
    'LastName',
    'AliasName',
    'FullName',
    'DOB',
    'Nationality',
    'PersonalEmail',
    'BusinessEmail',
    'PersonalPhone',
    'MobilePhone',
    'WorkAddress',
    'HomeAddress'
]

const cust2options = [
    'First_Name',
    'Middle_Name',
    'Last_Name',
    'Alias_Name',
    'Full_Name',
    'Date_Of_Birth',
    'Nationality',
    'Personal_Email',
    'Business_Email',
    'Personal_Phone',
    'Mobile_Phone',
    'Office_Address',
    'Home_Address'
]

const cust1defaultvalue = [
    'FirstName',
    'MiddleName',
    'LastName',
    'AliasName',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]

const cust2defaultvalue = [
    'First_Name',
    'Middle_Name',
    'Last_Name',
    'Alias_Name',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]
export default function Standardization(props) {
        
        const classes = useStyles();
        return(<>
                <Typography component={'span'} variant={'body2'}>
                    <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold'}}>
                        Standardization of Attributes from Multiple Sources
                    </Box>
                    <Button variant="outlined" size="medium" color="primary" style={{float: "right"}}>
                        Save
                    </Button>
                </Typography>
                <TableContainer className={classes.tableContainer}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableCellStyle}>Standardized Attributes</TableCell>
                            <TableCell className={classes.tableCellStyle} align="center">Customer Source 1</TableCell>
                            <TableCell className={classes.tableCellStyle} align="center">Customer Source 2</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {attrArray.map((value,index) => (
                            <TableRow key={index}>
                                <TableCell className={classes.tableCellStyle}>{value}</TableCell>
                                <TableCell align="center" className={classes.tableCellStyle}>
                                    <Options attrArray={cust1options} defaultValue={cust1defaultvalue[index]}/>
                                </TableCell>
                                <TableCell align="center"className={classes.tableCellStyle}>
                                    <Options attrArray={cust2options} defaultValue={cust2defaultvalue[index]}/>
                                </TableCell>
                            </TableRow>

                        ))}
                      </TableBody>
                    </Table>
                </TableContainer>
                </>
        )
    }