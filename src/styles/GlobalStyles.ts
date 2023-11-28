import { createGlobalStyle } from 'styled-components'

import '@fontsource/montserrat'
import '@fontsource/montserrat/400-italic.css'
import '@fontsource/montserrat/400.css'

const GlobalStyles = createGlobalStyle`
   body {
        color: ${(props) => props.theme.colors.white};
        font-family: 'Montserrat';
        background-image: ${(props) =>
            `radial-gradient(circle,  ${props.theme.colors.lightBlue}, ${props.theme.colors.darkBlue})`}; 
    }
`

export default GlobalStyles
