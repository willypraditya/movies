import { PiSpinner } from 'react-icons/pi'

import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledLoading = styled(PiSpinner)<{ size: number }>`
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    color: ${(props) => props.theme.colors.yellow};
    animation: ${rotate} 3s infinite linear;
`
