import { ReactElement, useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

import { NavbarCart, NavbarContainer, NavbarTitle } from './styles'
import { CartContext } from '@/contexts/CartContext'

const Navbar: React.FC = (): ReactElement => {
    const { setShowCart } = useContext(CartContext)

    return (
        <NavbarContainer>
            <NavbarTitle>Movies</NavbarTitle>
            <NavbarCart onClick={() => setShowCart(true)}>
                <FaShoppingCart size={24} />
            </NavbarCart>
        </NavbarContainer>
    )
}

export default Navbar
