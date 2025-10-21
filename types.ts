export interface Product {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    sizes?: string[];
    colors?: string[];
}

export interface CartItem {
    id: number;
    product: Product;
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export interface Category {
    name: string;
    imageUrl: string;
    gridClass: string;
}