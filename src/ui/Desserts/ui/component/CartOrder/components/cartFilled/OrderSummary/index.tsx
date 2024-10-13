import { Box, Stack, Typography} from "@mui/material";
import { OrderSummaryProps } from "@/ui/types/type";

export const OrderSummary = ({
    Data, 
    count, 
    isAddedToCart, 
    handleDecrement, 
    DessertName}:OrderSummaryProps) => {
    
    return(
        <Box maxHeight={"280px"} 
            sx={{
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                    width: "8px", 
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#c9aea6",  
                    borderRadius: "4px", 
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "#fcf9f7", 
                }
            }}
        >
            {Data.map((item, index) => {
                if(isAddedToCart[index]){
                    return(
                        <Box margin={"20px 0"}>
                            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Stack>
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

                                        <Typography component= "span" color="#87635a">
                                                {/**count total sum/index */}
                                            $ {count[index] * item.price}
                                        </Typography>
                                    </Typography>
                                </Stack>

                                <img 
                                    src="/assets/images/icon-remove-item.svg" 
                                    alt="remove-icon"
                                    onClick={() => handleDecrement(index)}
                                    style={{
                                        border: "1px solid #c9aea6",
                                        borderRadius: "50%",
                                        padding: "4px",
                                        height: "20px"
                                    }}
                                />
                            </Stack>
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
    )
}