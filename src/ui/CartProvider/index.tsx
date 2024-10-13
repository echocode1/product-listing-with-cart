"use client"
import { DessertDataProps } from "@/ui/types/type";
import { useState, useContext, createContext} from "react";
import Data from "@/ui/data.json";

const CartContext = createContext<DessertDataProps | undefined>(undefined);

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [count, setCount] = useState(Array(Data.length).fill(0));
    const [isAddedToCart, setIsAddedToCart] = useState(Array(Data.length).fill(false));
    const [DessertName, setDessertName] = useState<string[]>([]);
    console.log("CartProvider rendered");

    function handleAddToCart(index:number){
       setIsAddedToCart(prevSate => {
        const newState = [...prevSate]
        newState[index] = true;
        
        //this checks an include the category(dessert) when clicked
        setDessertName(prevName => {
            if (!prevName.includes(Data[index].name)) {
                return [...prevName, Data[index].name];
            }
            return prevName;
        });


        setCount(prevCounts => { 
            const newCounts = [...prevCounts];
            newCounts[index] = 1;
            return newCounts
        })

        return newState
       })
    }

    function handleIncrement(index: number){
        setCount(prevCount => {
            const newCount = [...prevCount];
            newCount[index] += 1;
            return newCount
        })
    }
    function handleDecrement(index: number){
        setCount(prevCount => {
            let newCount = [...prevCount];
            if(newCount[index] > 1){
                newCount[index] -= 1;
            }else {
                newCount[index] = 0
                setIsAddedToCart(prevState => {
                    const newState = [...prevState];
                    newState[index] = false;
                    return newState
                });
                
                setDessertName(prevName =>
                    prevName.filter((name) => name !== Data[index].category)
                );
            }
            return newCount
        })
    }

    return(
        <CartContext.Provider 
            value={{ DessertName,handleAddToCart, handleDecrement, handleIncrement, count, isAddedToCart,Data}}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext);
    if(!context){
        throw new Error("useCartContext cant be used outside cartProvider");
    }
    return context;
}