"use client"
import { DessertData } from "../DessertsData";
import { CartOrder } from "../CartOrder";
import { Box } from "@mui/material";

export const DessertLayouts = () => {
    return(
        <Box 
            sx={{
                backgroundColor: "#f4edeb",
                display: "grid",
                gridTemplateColumns:{
                   xs: "1fr" ,
                   sm: "repeat(2, 1fr)",
                   lg: "repeat(6, 1fr)"
                },
                padding: {
                    xs: "25px" ,
                    sm: "35px",
                    lg: "65px 110px"
                },
                gap: "20px",
                height: "100%",
            }}
        >
            <DessertData/>
            <CartOrder/>
        </Box>
    )
}