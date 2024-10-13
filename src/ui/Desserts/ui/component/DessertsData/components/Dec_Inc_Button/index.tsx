import { DecIncButtonProps } from "@/ui/types/type";
import { Button, Stack, Typography } from "@mui/material";

export const Dec_Inc_button = ({
    handleDecrement, handleIncrement, count}:DecIncButtonProps) => {
    return(
        <Stack direction={'row'} alignItems={"center"}
            sx={{
                width: {xs:"50%", sm: "60%"},
                padding: "5px 7px",
                justifyContent: "space-between",
                position: "absolute",
                bottom: -15,
                left: "50%",
                translate: "-50%",
                backgroundColor: "#c73a0f",
                borderRadius: "25px",
                zIndex: 100,
            }}
        >
            <Button 
                sx={{display: "flex", justifyContent: "flex-start"}}
                onClick={handleDecrement}
            >
                <img 
                    src="/assets/images/icon-decrement-quantity.svg" 
                    alt="minus-icon"
                    style={{
                        border: "1px solid #ffff",
                        padding: "3px",
                        height: "18px",
                        width: "18px",
                        borderRadius: "50%"
                    }}
                />
            </Button>
            
            <Typography color="#fff">
                {count}
            </Typography>

            <Button 
                sx={{display: "flex", justifyContent: "flex-end"}}
                onClick={handleIncrement}
            >
                <img 
                    src="/assets/images/icon-increment-quantity.svg" 
                    alt="minus-icon"
                    style={{
                        border: "1px solid #ffff",
                        padding: "3px",
                        borderRadius: "50%"
                    }}
                />
            </Button>
        </Stack>
    )
}