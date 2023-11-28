import { ReactElement } from 'react'

import { LayoutContainer } from './styles'

import Navbar from '../Navbar'

interface LayoutProps {
    children?: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutContainer>
            <Navbar />
            {children}
        </LayoutContainer>
    )
}

export default Layout
