const PRODUCTS = [
    {
        id: 100,
        name: 'iPhone XR',
        price: 499,
        image: require('../assets/products/_iphone_xr.jpg'),
        description: 'lorem ipsum lorem ipsum lorem ipsum det sed allis lor allos'
    },
    {
        id: 101,
        name: 'iPhone 13',
        price: 999,
        image: require('../assets/products/Apple_iphone13_.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'iPhone 11',
        price: 699,
        image: require('../assets/products/Apple-iPhone-11.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 103,
        name: 'MacBook Pro',
        price: 6999,
        image: require('../assets/products/apple-macbook-pro-13-inch_550.jpeg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 104,
        name: 'iPad Pro',
        price: 699,
        image: require('../assets/products/iPad-Pro-11-2020-.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 105,
        name: 'iPhone 11 Pro Max',
        price: 799,
        image: require('../assets/products/iPhone-11-Pro-midnight-green-back-64gb.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 106,
        name: 'iPhone 12',
        price: 899,
        image: require('../assets/products/iphone-12-.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 107,
        name: 'iPhone X',
        price: 599,
        image: require('../assets/products/iphone-x-silver-back-256GB.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 108,
        name: 'iPhone XS Max',
        price: 699,
        image: require('../assets/products/iphone-xsmax-gold-back-256GB.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 109,
        name: 'MacBook Pro',
        price: 7999,
        image: require('../assets/products/MacBookPro-M1-2@2560x1625.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }

];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}