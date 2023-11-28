import { Movie } from '@/apis/films/types'

export interface CardProps {
    movie: Movie
    onClick: () => void
}
