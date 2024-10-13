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
                        <Box margin={"20px 0"} key={index}>
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

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width= "20"
                                    height = "20"
                                    onClick={() => handleDecrement(index)}
                                    style={{
                                        border: "1px solid #c9aea6",
                                        borderRadius: "50%",
                                        padding: "4px",
                                        height: "20px",
                                        cursor: "pointer"
                                    }}

                                    onMouseOver={(e) => {
                                        const target = e.currentTarget as SVGSVGElement;
                                        target.querySelector("path")?.setAttribute("fill", "#000");
                                        e.currentTarget.style.border = "0.8px solid #000"
                                    }}
                                    onMouseOut={(e) => {
                                        const target = e.currentTarget as SVGSVGElement;
                                        target.querySelector("path")?.setAttribute("fill", "#CAAFA7")
                                        e.currentTarget.style.border = "0.8px solid #CAAFA7"
                                    }}
                                >
                                  <path
                                    fill = "#CAAFA7" 
                                    d = "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"  
                                  />
                                </svg>
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