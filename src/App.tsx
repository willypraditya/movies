import { QueryClient, QueryClientProvider } from 'react-query'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/GlobalStyles'
import theme from '@/styles/theme'

import { CartProvider } from './contexts/CartContext'
import Home from '@/pages/Home'

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <CartProvider>
                    <Home />
                </CartProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
