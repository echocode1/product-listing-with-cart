import { Box, Typography } from "@mui/material";
import { useCartContext } from "@/ui/CartProvider/index";

export const CartEmpty = () => {
    const {count,  isAddedToCart} = useCartContext();

    // Calculate total number of all desserts in the cart
    const totalCount = count.reduce((total, current, index) => {
        return isAddedToCart[index] ? total + current : total;
    }, 0);

    return(
        <Box 
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "30px 0 20px",
                alignItems: "center",
                backgroundColor: "#ffff",
                padding: "20px",
                borderRadius: "10px",
            }}
        >
            <Typography
                sx={{
                    marginBottom: "20px",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#c73a0f",
                }}
            >
                Your Cart ({totalCount}) 
            </Typography>

            <img 
                src="/assets/images/illustration-empty-cart.svg" 
                alt="empty-cart-icon" 
                style={{
                    width: "128px",
                    height: "auto",
                }}
            />

            <Typography
                sx={{
                    color: "#260f08",
                    fontWeight: 400,
                    marginTop: "30px"
                }}
            >
                Your added items will appear here
            </Typography>
        </Box>
    )
}