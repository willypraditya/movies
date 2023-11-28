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
    position: relative;
    display: flex;
    margin: 15% auto;
    border-radius: 8px;
    width: 500px;
    height: 300px;
    background-color: ${(props) => props.theme.colors.white};
    animation: ${slideIn} 0.5s;
`

export const StyledImage = styled.img`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    height: 300px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;
    padding: 12px;
`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
`

export const StyledYear = styled.div`
    margin-top: 4px;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey};
`

export const StyledNames = styled.div`
    margin-top: 4px;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey};
`

export const StyledPrice = styled.div`
    margin-top: 8px;
    font-size: 12px;
    font-weight: 600;
`

export const StyledDescription = styled.div`
    margin-top: 8px;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`

export const ModalClose = styled.div`
    &:hover {
        cursor: pointer;
    }
`

export const AddToCartButton = styled.button`
    width: 100%;
    border-radius: 6px;
    font-size: 14px;
    background-color: ${(props) => props.theme.colors.white};
    &:hover {
        cursor: pointer;
    }
`
