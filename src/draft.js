// import React from 'react';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';
//
// const customButtonStyles = {
//     root: {
//         padding: '0px 20px 0px 20px',
//         color: '#FFFFFF',
//         borderRadius: 2,
//         fontSize: 14,
//         fontWeight: 600,
//         textAlign: 'center',
//     },
//     containedPrimary: {
//         '&:disabled': {
//             backgroundColor: '#B1B1B1',
//             color: '#FFFFFF',
//         },
//     },
//     outlinedSecondary: {
//         color: '#83A4FF',
//         border: '1px solid #83A4FF',
//     },
// };
//
// const CustomButton = props => {
//     const IconComponent = props.icon;
//     return (
//         <Button {...props}>
//             {
//                 props.icon && <DeleteIcon />
//             }
//             {
//                 props.label
//             }
//         </Button>
//     );
// };
//
// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: '#19B4FF',
//             dark: '#199EDF',
//         },
//         secondary: {
//             main: '#83A4FF',
//             dark: '#3A50B1',
//         },
//     },
// });
//
// const ButtonTest = props => (
//     <MuiThemeProvider theme={theme}>
//         <CustomButton {...props}>
//             {props.label}
//         </CustomButton>
//     </MuiThemeProvider>
// );
//
// export default ButtonTest;
//
