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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 10 2"
                    style={{
                        border: "1px solid #ffff",
                        padding: "3px",
                        height: "22px",
                        width: "22px",
                        borderRadius: "50%",
                        transition: "0.3s ease",
                        cursor: "pointer" 
                    }}
                    onMouseOver={(e) => {
                        const target = e.currentTarget as SVGSVGElement; 
                        target.querySelector('path')?.setAttribute('fill', '#c73a0f'); 
                        e.currentTarget.style.backgroundColor =  "#fff"
                    }}
                    onMouseOut={(e) => {
                        const target = e.currentTarget as SVGSVGElement;
                        target.querySelector('path')?.setAttribute('fill', '#fff'); 
                        e.currentTarget.style.backgroundColor =  "inherit"
                    }}
                >
                    <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                </svg>
            </Button>
            
            <Typography color="#fff">
                {count}
            </Typography>

            <Button 
                sx={{display: "flex", justifyContent: "flex-end"}}
                onClick={handleIncrement}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 10 10"
                    style={{
                        border: "1px solid #ffff",
                        padding: "3px",
                        height: "22px",
                        width: "22px",
                        borderRadius: "50%",
                        transition: "0.3s ease",
                        cursor: "pointer" 
                    }}
                    onMouseOver={(e) => {
                        const target = e.currentTarget as SVGSVGElement; 
                        target.querySelector('path')?.setAttribute('fill', '#c73a0f'); 
                        e.currentTarget.style.backgroundColor =  "#fff"
                    }}
                    onMouseOut={(e) => {
                        const target = e.currentTarget as SVGSVGElement;
                        target.querySelector('path')?.setAttribute('fill', '#fff'); 
                        e.currentTarget.style.backgroundColor =  "inherit"
                    }}
                >
                    <path fill="#fff" 
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                </svg>
            </Button>
        </Stack>
    )
}