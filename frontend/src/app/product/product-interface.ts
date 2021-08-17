export interface product {
    id: number;
    category_id: number;
    name: string;
    description: string;
    img_src: string;
}

export interface productInfo {
    id: number;
    name: string;
    description: string;
    img_src: string;
    quantity: number;
    price: number;
    calory: number;
    benefits: string;
    harm: string;
}
