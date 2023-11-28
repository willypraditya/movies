import { ReactElement, useState } from 'react'

import { useDebounce } from 'use-debounce'

import Card from '@/components/Card'
import CartModal from '@/components/CartModal'
import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import MovieDetailModal from '@/components/MovieDetailModal'

import {
    CardsContainer,
    HomeContainer,
    LoadingContainer,
    StyledInput,
} from './styles'
import useGetMovies from '@/apis/films'
import { Movie } from '@/apis/films/types'

const Home: React.FC = (): ReactElement => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [debouncedValue] = useDebounce(searchQuery, 1000)

    const [selectedMovie, setSelectedMovie] = useState<Movie>()
    const [showMovieDetail, setShowMovieDetail] = useState<boolean>(false)

    const { data, isLoading } = useGetMovies({
        movieTitle: debouncedValue,
    })

    return (
        <>
            <Layout>
                <HomeContainer>
                    <StyledInput
                        placeholder="Search by Movie Title..."
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                        }}
                    />

                    {data && !isLoading ? (
                        <CardsContainer>
                            {data.results.map((item) => (
                                <Card
                                    key={item.title}
                                    movie={item}
                                    onClick={() => {
                                        setSelectedMovie(item)
                                        setShowMovieDetail(true)
                                    }}
                                />
                            ))}
                        </CardsContainer>
                    ) : (
                        <LoadingContainer>
                            <Loading size={70} />
                        </LoadingContainer>
                    )}
                </HomeContainer>
            </Layout>
            <MovieDetailModal
                show={showMovieDetail}
                setShow={setShowMovieDetail}
                movie={selectedMovie}
            />
            <CartModal />
        </>
    )
}

export default Home
