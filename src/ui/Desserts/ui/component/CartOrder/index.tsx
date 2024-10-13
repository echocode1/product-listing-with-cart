import { Stack} from "@mui/material";
import { CartEmpty, CartFilled } from "./components";
import { useCartContext } from "@/ui/CartProvider/index";

export const CartOrder = () => {
    const { count, isAddedToCart } = useCartContext();

    // Calculate total number of all desserts in the cart
    const totalCount = count.reduce((total, current, index) => {
        return isAddedToCart[index] ? total + current : total;
    }, 0);

    return (
        <Stack
            sx={{
                gridColumn: { lg: "5/7" },
                gridRow: { lg: "1/2" },
                height: (totalCount===0 )? { sm: "300px" }: {sm: "590px"},
            }}
        >
            {totalCount === 0 ? <CartEmpty /> : <CartFilled />}
        </Stack>
    );
};
