import { motion } from 'framer-motion'

import { CardContainer, StyledImage } from './styles'
import { CardProps } from './types'

const Card = ({ movie, onClick }: CardProps) => {
    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <CardContainer onClick={onClick}>
                <StyledImage src={movie.image} alt={movie.title} />
                <div style={{ marginTop: 5 }}>{movie.title}</div>
            </CardContainer>
        </motion.div>
    )
}

export default Card
