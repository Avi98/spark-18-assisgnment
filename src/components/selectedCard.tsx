import * as React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectCities } from '../redux/actions'
import { FormControlLabel, Checkbox } from '@material-ui/core';

const CountryContainer = styled.div`
    padding:10px 40px;
    text-transform: capitalize;
    display:flex;
    flex-direction: column;
`

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
});

const mapStateToProps = ({ country, selectCites }: any) => ({ country, selectCites })

export default connect(mapStateToProps, { selectCities })((props: any) => {
    const classes = useStyles();
    const handleChange = (country: any, id: any) => (event: any) => {

        props.selectCities(id)
    };
    return <Card className={classes.root}>
    </Card>
})