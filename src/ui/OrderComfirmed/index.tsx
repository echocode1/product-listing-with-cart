import { ComfirmOrder } from "./ui/component";
import { DessertLayouts } from "../Desserts/ui/component";
import { Box } from "@mui/material";

export const OrderLayout = () => {
    return(
        <Box
            sx={{
                padding: "25px",
                position: "relative",
                height:"100%"
            }}
        >
            <DessertLayouts/>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    backgroundColor: "#000",
                    opacity: "40%",
                    zIndex: 2000,
                    Height: "100vh"             
                }}
            />
            <ComfirmOrder/>
        </Box>
    )
}