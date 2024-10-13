import Link from "next/link"; 
import { Box, Stack, Typography, Button } from "@mui/material";
import { useCartContext } from "@/ui/CartProvider";
import { OrderSummary } from "./OrderSummary";

export const CartFilled = () => {
    const {
        DessertName,
        Data,
        count,
        isAddedToCart,
        handleDecrement
    } = useCartContext();

    // Calculate total number of all desserts in the cart
    const totalCount = count.reduce((total, current, index) => {
        return isAddedToCart[index] ? total + current : total;
    }, 0);

    return (
        <Box marginTop={"30px"}
            sx={{
                backgroundColor: "#ffff",
                padding: "20px",
                borderRadius: "10px",
                position: {sm: "fixed", md: "static"},
                right: {sm: "30px", md:"auto"},
                left: {sm: "52%", md:"auto"},
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

            <OrderSummary
                Data={Data}
                count={count}
                isAddedToCart={isAddedToCart}
                handleDecrement={handleDecrement}
                DessertName={DessertName}
            />

            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                marginTop={"20px"}
            >
                <Typography
                    sx={{ wordSpacing: "5px", color: "#ad8985" }}>
                    Order Total
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#260f08"
                    }}
                >
                    ${isAddedToCart.reduce((total, isAdded, idx) => {
                        return isAdded ? total + (Data[idx].price * count[idx]) : total;
                    }, 0).toFixed(2)}
                </Typography>
            </Stack>

            <Stack
                direction={"row"}
                spacing={"10px"}
                sx={{
                    margin: "20px 0",
                    backgroundColor: "#fcf9f7",
                    padding: "10px 0 10px 20px",
                    borderRadius: "5px",
                }}
            >
                <img
                    src="/assets/images/icon-carbon-neutral.svg"
                    alt="carbon-icon"
                    style={{
                        width: "20px",
                        height: "auto"
                    }}
                />
                <Typography fontSize={"14px"}>
                    This is a
                    <Typography
                        component="span"
                        sx={{
                            margin: "0 5px",
                            fontWeight: 600,
                            fontSize: "14px"
                        }}
                    >
                        carbon-neutral
                    </Typography>
                    delivery
                </Typography>
            </Stack>

            <Link href="/comfirmed" passHref>
                <Button
                    sx={{
                        backgroundColor: "#c73a0f",
                        color: "white",
                        textTransform: "none",
                        width: "100%",
                        padding: "12px 0",
                        borderRadius: "25px"
                    }}
                >
                    <Typography
                        fontSize={"14px"}
                        letterSpacing={"0.5px"}
                    >
                        Confirm Order
                    </Typography>
                </Button>
            </Link>
        </Box>
    );
};
