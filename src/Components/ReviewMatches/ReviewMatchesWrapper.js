import React from 'react';
import {
    Box,
    Paper,
    Typography
} from '@material-ui/core';

import Match from './Match';

function ReviewMatches() {

    
    return (<>
        <Paper variant="outlined" >
            <Typography component={'span'} variant={'body2'}>
                <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{ fontWeight: 'bold' }}>
                    Review Matches
                </Box>
            </Typography>



            
            <Match />
        </Paper>
    </>
    )
}

export default ReviewMatches;