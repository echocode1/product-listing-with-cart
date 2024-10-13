import { addToCartVisibility } from "@/ui/types/type"
import { Button,Typography } from "@mui/material"

export const AddToCart = ({
    handleAddToCart}:addToCartVisibility) => {
    return(
        <Button 
            onClick={handleAddToCart}
            sx={{
                display: "flex",
                justifyContent: "center",
                border: "0.8px solid  #87635a",
                width: "50%",
                padding: "10px 0",
                margin: "0 auto",
                borderRadius: "25px",
                position: "absolute",
                backgroundColor: "#ffff",
                bottom: -15,
                left: "50%",
                translate: "-50%",
                zIndex: 100,
                transition: "0.3s ease",
                "&:hover": {
                    border: "0.8px solid #c73a0f"
                }
            }}
        >
            <img 
                src= "/assets/images/icon-add-to-cart.svg"  
                alt="cart-icon" 
            />

            <Typography
                sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    marginLeft: "10px",
                    color: "#260f08",
                    textTransform: "none",
                    "&:hover" : { color: "#c73a0f"}
                }}
            >
                Add to Cart
            </Typography>
        </Button>
    )
}