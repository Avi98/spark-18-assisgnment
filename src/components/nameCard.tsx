import * as React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import styled from 'styled-components';
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

const mapStateToProps = (store: any) => {
    return {
        country: store
    }
}
export default connect(mapStateToProps)((props: any) => {
    const classes = useStyles();
    const handleChange = (country:any,name:any) => (event:any) => {
        debugger
        // setState({ ...state, [name]: event.target.checked });
      };
    return <Card className={classes.root}>{Object.keys(props.country).map(country => <CountryContainer key={country}><h1>{country}</h1>{
        props.country[country].cities.map((obj: any) => {
            return (
                <FormControlLabel
                    key={obj.id}
                    control={
                        <Checkbox
                            checked={obj.checked}
                            onChange={handleChange(country, obj.id)}
                            value={obj.id}
                            color="primary"
                        />
                    }
                    label={obj.name}
                />
            )
        }
        )
    }
    </CountryContainer>
    )
    }
    </Card>
})