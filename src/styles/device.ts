interface Size {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
}

const size: Size = {
    xs: '400px', // Small Mobile
    sm: '640px', // Mobile
    md: '768px', // Tablets
    lg: '1024px', // Laptops
    xl: '1280px', // Desktops
}

const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
}

export default device
