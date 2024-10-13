"use client"
import { Box, Stack, Typography, Grid2} from "@mui/material";
import { AddToCart } from "./components/Add_To_CartBtn";
import { Dec_Inc_button } from "./components/Dec_Inc_Button";
import { useCartContext } from "@/ui/CartProvider/index";

export const DessertData = () => {
    const {
        Data,
        count, 
        isAddedToCart, 
        handleIncrement, 
        handleAddToCart,
        handleDecrement} = useCartContext();

    return(
        <Grid2 sx={{gridColumn:{lg: "1/5"}, gridRow: {lg: "1/4"}, }}>
            <Typography marginBottom={"25px"}
                sx={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    lineHeight: 1.3,
                }}
            >
                Desserts
            </Typography>

            <Box 
                sx={{
                    display: "grid",
                    gridTemplateColumns:{
                        lg: "repeat(3, 1fr)"
                    },
                    gap: {lg: "20px"}
                }}
            >
                {Data.map((data,index) => {
                    return(
                        <Box key={index}>
                            <Box position={"relative"}>
                                <img 
                                    srcSet={`${data.image.mobile} 480w,
                                        ${data.image.tablet} 768w,
                                        ${data.image.desktop} 1024`}
                                    
                                    sizes="(max-width: 480px) 480px,
                                        (max-width: 768px) 768px,
                                        1024px"

                                    src={data.image.desktop} 
                                    alt={`${data.category}-img`} 
                                    style={{
                                        width: "100%",
                                        borderRadius: "7px",
                                        border: isAddedToCart[index] ? "2px solid #c73a0f" : 'none',
                                    }}
                                />
                                {!isAddedToCart[index] && 
                                    <AddToCart handleAddToCart = {() => handleAddToCart(index)} />
                                }
                                {isAddedToCart[index] && 
                                    <Dec_Inc_button 
                                        count = {count[index]}
                                        handleIncrement = {() => handleIncrement(index)}
                                        handleDecrement = {() => handleDecrement(index)}
                                    />
                                }
                            </Box>

                            <Stack margin={"30px 0 20px"}>
                                <Typography 
                                    sx={{fontWeight: 400,
                                        fontSize: "14px",
                                        color: " #c9aea6"
                                    }}
                                >
                                    {data.category}
                                </Typography>

                                <Typography 
                                    sx={{fontWeight: 600,
                                        fontSize: "15px",
                                        color: " #260f08"
                                    }}
                                >
                                    {data.name}
                                </Typography>

                                <Typography 
                                    sx={{fontWeight: 600,
                                        fontSize: "16px",
                                        color: "#c73a0f"
                                    }}
                                >
                                    ${(data.price).toFixed(2)}
                                </Typography>
                            </Stack>
                        </Box>
                    )
                })}
            </Box>
        </Grid2>
    )
}