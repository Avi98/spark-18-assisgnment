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
const CheckedCities = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    background-color: #e4e4e4;
    height: 30px;
    border-radius: 7px;
    width: 250px;
    padding: 0px 23px;
    margin: 10px 0;
    .icon{
        color:#8d8d90;
        cursor: pointer;
    }
`

const useStyles = makeStyles({
    root: {
        minWidth: 459,
        padding: '50px 40px',

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

const mapStateToProps = ({ country }: any) => ({ country })


export default connect(mapStateToProps, { selectCities })((props: any) => {
    const classes = useStyles();
    const handleChange = (country: any, id: any) => (_: any) => {
        props.selectCities(id, country, false)
    };

    const checkedNicaraguaCities = Object.values(props.country.nicaragua.cities).filter((obj: any) => obj.checked)
    const checkedPortugalCities = Object.values(props.country.portugal.cities).filter((obj: any) => obj.checked)

    return <Card className={classes.root}>
        <CountryContainer >{checkedPortugalCities.length >0 &&<h1>Portugal</h1>}
            {checkedPortugalCities.map((obj: any) => <CheckedCities><p>{obj.name}</p> <div className="icon" onClick={handleChange('portugal', obj.id)}>X</div></CheckedCities>)}
        </CountryContainer>
        <CountryContainer >{checkedNicaraguaCities.length >0 &&<h1>Nicaragua</h1>}
            {checkedNicaraguaCities.map((obj: any) => <CheckedCities><p>{obj.name}</p> <div className="icon" onClick={handleChange('nicaragua', obj.id)}>X</div></CheckedCities>)}
        </CountryContainer>
    </Card>
})