import { Dispatch, SetStateAction, createContext, useState } from 'react'

import { CartProviderProps } from './types'
import { Movie } from '@/apis/films/types'

type CartContextType = {
    showCart: boolean
    setShowCart: Dispatch<SetStateAction<boolean>>
    cart: Array<Movie>
    handleAddMovie: (movie: Movie) => void
    handleRemoveMovie: (movie: Movie) => void
    handleClearCart: () => void
}

const CartContext = createContext<CartContextType>({
    showCart: false,
    setShowCart: () => {},
    cart: [],
    handleAddMovie: () => {},
    handleRemoveMovie: () => {},
    handleClearCart: () => {},
})

const CartProvider = ({ children }: CartProviderProps) => {
    const [showCart, setShowCart] = useState<boolean>(false)
    const [cart, setCart] = useState<Array<Movie>>([])

    const handleAddMovie = (movie: Movie) => {
        setCart((prevState) => [...prevState, movie])
    }

    const handleRemoveMovie = (movie: Movie) => {
        setCart((prevState) =>
            prevState.filter((item) => item.title !== movie.title)
        )
    }

    const handleClearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                showCart,
                setShowCart,
                cart,
                handleAddMovie,
                handleRemoveMovie,
                handleClearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
