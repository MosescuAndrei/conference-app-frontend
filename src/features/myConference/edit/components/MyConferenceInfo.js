import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import CustomTextField from '@bit/totalsoft_oss.react-mui.custom-text-field';
import DateTime from '@bit/totalsoft_oss.react-mui.date-time';
import Autocomplete from '@bit/totalsoft_oss.react-mui.autocomplete';
import { onTextBoxChange } from 'utils/propertyChangeAdapters';

const MyConferenceInfo = (props) => {

    
    const { types, categories, conference, dispatch} = props
    const { name, startDate, endDate, type, category } = conference
    const { t } = useTranslation();
    
    const handleDispatch = actionType => value => dispatch({ type: actionType, payload: value })

    return <Grid container spacing={3}>
        <Grid item container lg={9} spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
                <CustomTextField
                    label={t('Conference.Name')}
                    fullWidth
                    value={name}
                    onChange={onTextBoxChange(handleDispatch("name"))}
                />
            </Grid>
        </Grid>
        <Grid item container lg={12} spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
                <DateTime
                    label={t('Conference.StartDate')}
                    showTime={true}
                    value={startDate}
                    onChange={handleDispatch("startDate")}
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <DateTime
                    label={t('Conference.EndDate')}
                    showTime={true}
                    value={endDate}
                    onChange={handleDispatch("endDate")}

                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Autocomplete
                    label={t('Conference.Type')}
                    createdLabel='Conference.Type'
                    fullWidth
                    isClearable
                    options={types}
                    value={type}
                    onChange={handleDispatch("type")}
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Autocomplete
                    label={t('Conference.Category')}
                    createdLabel='Conference.Category'
                    fullWidth
                    isClearable
                    options={categories}
                    value={category}
                    onChange={handleDispatch("category")}
                />
            </Grid>
        </Grid>
    </Grid >
}

MyConferenceInfo.propTypes = {
    types: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    conference: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}
    

export default MyConferenceInfo;