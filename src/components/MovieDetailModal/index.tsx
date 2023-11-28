import { useContext } from 'react'
import { IoClose } from 'react-icons/io5'

import dayjs from 'dayjs'
import { ThemeContext } from 'styled-components'

import {
    AddToCartButton,
    ContentWrapper,
    ModalClose,
    ModalContainer,
    ModalContent,
    StyledDescription,
    StyledImage,
    StyledNames,
    StyledPrice,
    StyledTitle,
    StyledYear,
    TitleWrapper,
} from './styles'
import { MovieDetailModalProps } from './types'
import { Movie } from '@/apis/films/types'
import { CartContext } from '@/contexts/CartContext'

const MovieDetailModal = ({ show, setShow, movie }: MovieDetailModalProps) => {
    const theme = useContext(ThemeContext)

    const { cart, handleAddMovie } = useContext(CartContext)

    const onClickAddToCart = (movie: Movie) => {
        handleAddMovie(movie)
    }

    return (
        <ModalContainer show={show}>
            <ModalContent>
                <StyledImage src={movie?.image} alt={movie?.title} />
                <ContentWrapper>
                    <div>
                        <TitleWrapper>
                            <StyledTitle>{movie?.title}</StyledTitle>
                            <ModalClose onClick={() => setShow(false)}>
                                <IoClose
                                    size={22}
                                    color={theme?.colors.black}
                                />
                            </ModalClose>
                        </TitleWrapper>

                        <StyledYear>
                            {dayjs(movie?.release_date).format('YYYY')}
                        </StyledYear>
                        <StyledNames>
                            {movie?.director} - {movie?.producer}
                        </StyledNames>
                        <StyledDescription>
                            {movie?.opening_crawl}
                        </StyledDescription>

                        <StyledPrice>${movie?.price} to rent</StyledPrice>
                    </div>

                    <div>
                        <AddToCartButton
                            onClick={() => {
                                if (movie) {
                                    onClickAddToCart(movie)
                                }
                            }}
                            disabled={movie && cart.includes(movie)}
                        >
                            {movie && cart.includes(movie)
                                ? 'Added to Cart'
                                : 'Add to Cart'}
                        </AddToCartButton>
                    </div>
                </ContentWrapper>
            </ModalContent>
        </ModalContainer>
    )
}

export default MovieDetailModal
