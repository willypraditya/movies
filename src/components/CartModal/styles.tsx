import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
    0% {
      bottom: -600px;
    }
    100% {
      bottom: 0px;
    }
`

export const ModalContainer = styled.div<{ show: boolean }>`
    display: ${(props) => (props.show ? '' : 'none')};
    padding: 12px;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`

export const ModalContent = styled.div`
    margin: 15% auto;
    border-radius: 8px;
    width: 500px;
    background-color: ${(props) => props.theme.colors.white};
    animation: ${slideIn} 0.5s;
    padding: 12px;
`

export const ModalTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ModalClose = styled.div`
    &:hover {
        cursor: pointer;
    }
`

export const StyledTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: black;
`

export const CartItemContainer = styled.div`
    margin-top: 20px;
`

export const CartItem = styled.div`
    margin-top: 5px;
    color: black;
    display: flex;
    justify-content: space-between;
`

export const DeleteCartItem = styled.div`
    color: ${(props) => props.theme.colors.red};
    &:hover {
        cursor: pointer;
    }
`

export const TotalPrice = styled.div`
    margin-top: 20px;
    text-align: right;
    font-size: 16px;
    font-weight: 600;
    color: black;
`

export const EmptyCart = styled.div`
    color: black;
    text-align: center;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
`

export const ClearCartButton = styled.button`
    width: 50%;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
    &:hover {
        cursor: pointer;
    }
`

export const CheckoutButton = styled.button`
    width: 50%;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
    &:hover {
        cursor: pointer;
    }
`
