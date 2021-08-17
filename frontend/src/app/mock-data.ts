import { category } from './category/category-interface';
import { product, productInfo } from './product/product-interface';

export const CategoriesData: category[] = [
    { id: 1, name: 'Vegetables', description: 'This is vegetable interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 2, name: 'Cosmetics', description: 'This is cosmetic interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 3, name: 'Fruit', description: 'This is fruit interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 4, name: 'Stationary', description: 'This is Stationary interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 5, name: 'Hygiene', description: 'This is Hygiene interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 6, name: 'Kitchen', description: 'This is Kitchen interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 7, name: 'Fast Food', description: 'This is fast food interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' }
];


export const ProductData: product[] = [
    { id: 1, category_id: 1, name: 'Carrot', description: 'This is vegetable interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 2, category_id: 1, name: 'Broccoli', description: 'This is vegetable interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 3, category_id: 1, name: 'Asparagus', description: 'This is vegetable interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 4, category_id: 1, name: 'Cauliflower', description: 'This is vegetable interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 5, category_id: 1, name: 'Corn', description: 'This is vegetable interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 6, category_id: 2, name: 'Apple', description: 'This is fruit interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
    { id: 7, category_id: 2, name: 'Orange', description: 'This is fruit interface', img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png' },
];

export const ProductInfoData: productInfo[] = [
    { id: 1, name: 'Carrot', description: 'This is vegetable interface', 
    img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png', 
    quantity: 5.5, price: 40, calory: 200 , 
    benefits: 'The fiber in carrots can help keep blood sugar levels under control. And they are loaded with vitamin A and beta-carotene, which there is evidence to suggest can lower your diabetes risk. They can strengthen your bones.', 
    harm: 'Eating too many carrots can bring in too much beta-carotene the molecule responsible for carrots bright orange hue and a precursor of vitamin A. This can lead to excess blood carotene which can discolor the skin.'},
    { id: 2, name: 'Broccoli', description: 'This is vegetable interface', 
    img_src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png', quantity: 5.5, price: 40, calory: 200 , 
    benefits: 'The fiber in carrots can help keep blood sugar levels under control. And they are loaded with vitamin A and beta-carotene, which there is evidence to suggest can lower your diabetes risk. They can strengthen your bones.', 
    harm: 'Eating too many carrots can bring in too much beta-carotene the molecule responsible for carrots bright orange hue and a precursor of vitamin A. This can lead to excess blood carotene which can discolor the skin.'}
]