import { StyledLoading } from './styles'

interface LoadingProps {
    size?: number
}

const Loading = ({ size = 20 }: LoadingProps) => {
    return <StyledLoading size={size} />
}

export default Loading
