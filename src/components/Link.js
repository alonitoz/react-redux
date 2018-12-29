import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    palette:{
        primary:{
            main: '#ff4400',
        },
        secondary: {
            text: '#ff4400',
            main: '#48ffc0',
            background: '#eeff20'
        }
    },

})

const Link = ({ active, children, onClick}) => (
    <div>
        <MuiThemeProvider theme={theme}>
            <Button
                variant="contained"
                color="secondary"
                onClick={onClick}
                disabled={active}
                style={{margin: '4px'}}
            >
                {children}
            </Button>
            <Typography  color="secondary" variant="h2">
                title
            </Typography>
        </MuiThemeProvider>
    </div>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Link;