import { useQuery } from 'react-query'

import axiosInstance from '@/utils/axiosInstance'

import { Movie, MoviesResponse, useGetMoviesProps } from './types'
import posters from '@/constants/posters'

const useGetMovies = ({ movieTitle }: useGetMoviesProps) => {
    const { isLoading, error, data } = useQuery('films', async () => {
        const response = await axiosInstance.get('films')

        const data: MoviesResponse = {
            ...response.data,
            results: response.data.results
                .sort((a: Movie, b: Movie) => a.episode_id - b.episode_id)
                .map((item: Movie) => {
                    return {
                        ...item,
                        price: 10,
                        image: posters[item.episode_id],
                    }
                }),
        }

        return data
    })

    let filteredData = data

    if (data && movieTitle) {
        filteredData = {
            ...data,
            results: data.results.filter((item) =>
                item.title
                    .toLocaleLowerCase()
                    .trim()
                    .includes(movieTitle.trim())
            ),
        }
    }

    return {
        isLoading,
        data: filteredData,
        error,
    }
}

export default useGetMovies
