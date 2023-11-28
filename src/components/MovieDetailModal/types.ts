import { Dispatch, SetStateAction } from 'react'

import { Movie } from '@/apis/films/types'

export interface MovieDetailModalProps {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    movie?: Movie
}
