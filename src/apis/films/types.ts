export interface useGetMoviesProps {
    movieTitle?: string
}

export interface Movie {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    url: string
    price: number
    image: string
}

export interface MoviesResponse {
    count: number
    results: Array<Movie>
}
