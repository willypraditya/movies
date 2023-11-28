import styled from 'styled-components'

import device from '@/styles/device'

export const HomeContainer = styled.div`
    padding: 12px;
`

export const StyledInput = styled.input`
    width: 200px;
    height: 20px;
    border-radius: 6px;
`

export const CardsContainer = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 2rem;
    @media ${device.lg} {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media ${device.md} {
        grid-template-columns: 1fr 1fr;
    }
    @media ${device.sm} {
        grid-template-columns: 1fr 1fr;
    }
    @media ${device.xs} {
        grid-template-columns: 1fr;
    }
`

export const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
