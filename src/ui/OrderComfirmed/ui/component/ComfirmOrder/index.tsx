"use client"
import { Box, Stack, Typography,Button} from "@mui/material";
import { useCartContext } from "@/ui/CartProvider";
import Link from "next/link";

export const ComfirmOrder = () => {
    let {
        DessertName,
        Data,
        count, 
        isAddedToCart} = useCartContext();

    function handleNewOrder(index:number){
        isAddedToCart[index]=false
    }
    return(
        <Box marginTop={"30px"}
        sx={{
            height: { sm: "67%",lg: "700px" },
            backgroundColor: "#ffff",
            padding: {xs:"20px", md: "20px 40px"},
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            position: "fixed",
            top: { xs: "6.5%", sm: "50%",lg: "45%" },
            left: { xs: 0, sm: "50%" },
            right: { xs: 0 },
            bottom: { xs: 0 },
            transform: { sm: "translate(-50%, -50%)" },
            width: { xs: "100%", sm: "auto",lg: "550px" }, 
            borderRadius: "10px",
            zIndex: 3000
        }}
        >
            <Stack>
                <img 
                    src="/assets/images/icon-order-confirmed.svg" 
                    alt="comfirm-order-icon"
                    style={{ width: "40px", height: "auto",margin: "15px 0 20px" }} 
                />
                <Typography
                    sx={{
                        fontSize: {xs:"2rem", md: "2.5rem"},
                        fontWeight: {xs: 700, md: 700},
                        lineHeight: "1.2",
                        letterSpacing: "0.8px",
                        color: "#260f08",
                        marginBottom: "10px"
                    }}
                >
                    Order Confirmed
                </Typography>
                <Typography color={"#ad8985"} sx={{marginBottom: {md: "20px"}}}>
                    We hope you enjoy your food!
                </Typography>
            </Stack>
            
            <Box 
                sx={{
                    backgroundColor: "#fcf9f7",
                    padding:"10px 20px 0 20px",
                    borderRadius: "5px"
                }}
            >
                <Box maxHeight={"280px"} 
                    sx={{
                        backgroundColor: "#fcf9f7",
                        overflowY: "auto",
                        "&::-webkit-scrollbar": {
                            width: "8px", 
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#c9aea6",  
                            borderRadius: "4px", 
                        },
                        "&::-webkit-scrollbar-track": { 
                        }
                    }}
                >
                    {Data.map((item, index) => {
                        if(isAddedToCart[index]){
                            return(
                                <Box margin={"20px 0"}>
                                    <Box 
                                        sx={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(5, 1fr)",
                                            alignItems: "center"
                                        }}
                                    >
                                        <img 
                                            src={item.image.thumbnail} 
                                            alt={item.category} 
                                            style={{
                                                gridColumn: "1/2",
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "5px"
                                            }}
                                        />
                                        <Stack marginLeft = {"15px"} sx={{ gridColumn: "2/5"}}>
                                            <Typography fontWeight={600}>
                                                {DessertName.includes(item.name) && item.name}
                                            </Typography> 

                                            <Typography color="#c73a0f">
                                                {count[index]}x  {/**count/index*/}

                                                <Typography component="span" color="#c9aea6"
                                                    sx={{ margin: "0 15px 0 20px" }}
                                                >
                                                    {/**desert price/index */}
                                                    @ ${(item.price).toFixed(2)}
                                                </Typography>
                                            </Typography>
                                        </Stack>

                                        
                                        <Typography 
                                            component= "span" color="#87635a" marginLeft={"10px"} 
                                            sx={{ gridColumn: "5/6"}}>
                                                {/**count total sum/index */}
                                            $ {count[index] * item.price}
                                        </Typography>
                                    </Box>
                                    <hr 
                                        style={{
                                            backgroundColor: "#f4edeb",
                                            margin: "20px 0 10px",
                                            border: "none",
                                            height: "1px"
                                        }}
                                    />
                                </Box>
                            )
                        }
                    })}
                </Box>

                <Stack 
                    direction={"row"} justifyContent={"space-between"} alignItems={"center"}
                    margin={"20px 0 45px"} paddingBottom={"25px"}
                >
                    <Typography 
                        sx={{ wordSpacing: "5px",color: "#ad8985"}}>
                        Order Total
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1.7rem",
                            fontWeight: 800,
                            color: "#260f08"
                        }}
                    >
                        {/**total count sum */}
                        ${isAddedToCart.reduce((total, isAdded, idx) => {
                            return isAdded ? total + (Data[idx].price * count[idx]) : total;
                        }, 0).toFixed(2)}
                    </Typography>
                </Stack>
            </Box>

            <Link href={"./"} passHref>
                <Button
                    onClick={() => {
                        Data.forEach((_, idx) => handleNewOrder(idx));
                    }}
                    sx={{
                        backgroundColor: "#c73a0f",
                        color: "white",
                        textTransform: "none",
                        width: "100%",
                        padding: "15px 0",
                        borderRadius: "25px",
                        "&:hover": {backgroundColor: "#982c0b"}
                    }}
                >
                    <Typography
                        fontSize={"14px"}
                        letterSpacing={"0.5px"}
                    >
                        Start New Order
                    </Typography>
                </Button>
            </Link>
        </Box>
    )
}