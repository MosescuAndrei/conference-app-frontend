import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ConferenceItem from "./ConferenceItem";


const ConferenceList = (props) => {
    const { conferences } = props

    return (
        <Grid container spacing={2}>
            {conferences?.map (conference => 
            <Grid item xs={10} lg={3} key={conference.id}>
                <ConferenceItem 
                 conference ={conference} 
                />
            </Grid>
             )}
        </Grid>
    )
}

ConferenceList.propTypes = {
    conferences: PropTypes.array.isRequired
}

export default ConferenceList;