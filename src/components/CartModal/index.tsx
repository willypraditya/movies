import { useContext } from 'react'
import { IoClose } from 'react-icons/io5'

import { ThemeContext } from 'styled-components'

import {
    ButtonContainer,
    CartItem,
    CartItemContainer,
    CheckoutButton,
    ClearCartButton,
    DeleteCartItem,
    EmptyCart,
    ModalClose,
    ModalContainer,
    ModalContent,
    ModalTitleWrapper,
    StyledTitle,
    TotalPrice,
} from './styles'
import { CartContext } from '@/contexts/CartContext'

const CartModal = () => {
    const theme = useContext(ThemeContext)

    const { showCart, setShowCart, cart, handleRemoveMovie, handleClearCart } =
        useContext(CartContext)

    return (
        <ModalContainer show={showCart}>
            <ModalContent>
                <ModalTitleWrapper>
                    <StyledTitle>Cart</StyledTitle>
                    <ModalClose onClick={() => setShowCart(false)}>
                        <IoClose size={22} color={theme?.colors.black} />
                    </ModalClose>
                </ModalTitleWrapper>

                <CartItemContainer>
                    {cart.length > 0 ? (
                        <>
                            {cart.map((item) => {
                                return (
                                    <CartItem key={item.title}>
                                        <div>{item.title}</div>
                                        <div
                                            style={{ display: 'flex', gap: 5 }}
                                        >
                                            <div>${item.price}</div>
                                            <DeleteCartItem
                                                onClick={() =>
                                                    handleRemoveMovie(item)
                                                }
                                            >
                                                Delete
                                            </DeleteCartItem>
                                        </div>
                                    </CartItem>
                                )
                            })}
                            <TotalPrice>
                                Total Price $
                                {cart.reduce((acc, val) => acc + val.price, 0)}
                            </TotalPrice>
                        </>
                    ) : (
                        <EmptyCart>Your Cart is Empty</EmptyCart>
                    )}
                </CartItemContainer>

                <ButtonContainer>
                    <ClearCartButton onClick={handleClearCart}>
                        Clear Cart
                    </ClearCartButton>
                    <CheckoutButton>Checkout</CheckoutButton>
                </ButtonContainer>
            </ModalContent>
        </ModalContainer>
    )
}

export default CartModal
