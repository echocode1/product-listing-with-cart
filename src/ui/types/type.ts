export interface imageProps{
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface DessertDataType{
    image:imageProps;
    name:string;
    category: string;
    price:number;
}

export interface DecIncButtonProps {
    count: number;
    handleIncrement: () => void;
    handleDecrement: () => void;
}

export interface addToCartVisibility{
    handleAddToCart: () => void;
}

export interface DessertDataProps {
    DessertName:string[];
    Data: DessertDataType[];
    count: number[];
    handleIncrement: (index: number) => void;
    handleDecrement: (index: number) => void;
    handleAddToCart: (index: number) => void;
    isAddedToCart: boolean[];
}
export interface OrderSummaryProps{
    Data: DessertDataType[];
    count: number[] ;
    isAddedToCart: boolean[];
    handleDecrement: (index: number) => void;
    DessertName: string[];
}