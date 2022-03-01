import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: '#ff9900',
        white: '#fff',
        black: '#000',
        lightGray: '#CECECE'
    },
    fonts: {
        roboto: '"Roboto", sans-serif',
        get general() {
            return this.roboto
        }
    },
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700
    },
    dimensions: {
        page: {
            width: '100%',
            height: '100%'
        }
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;