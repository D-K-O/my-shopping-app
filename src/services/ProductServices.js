const PRODUCTS = [
    {
        id: 100,
        name: 'iPhone XR',
        price: 499,
        image: require('../assets/products/_iphone_xr.jpg'),
        description: 'iPhone XR (stylized and marketed as iPhone Xʀ; pronounced "iPhone Ten R") is a smartphone designed and manufactured by Apple Inc. It is the twelfth generation of the iPhone.Pre-orders began on October 19, 2018, with an official release on October 26, 2018. The phone has a 6.1-inch "Liquid Retina" LCD display, which Apple claims is the "most advanced LCD in the industry.'
    },
    {
        id: 101,
        name: 'iPhone 13',
        price: 999,
        image: require('../assets/products/Apple_iphone13_.jpg'),
        description: 'The iPhone 13 and 13 Mini feature a 6-core CPU, 4-core GPU and 16-core Neural Engine, while the iPhone 13 Pro and 13 Pro Max feature a 5 core GPU. The iPhone 13 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 PPI with a refresh rate of 60Hz..'
    },
    {
        id: 102,
        name: 'iPhone 11',
        price: 699,
        image: require('../assets/products/Apple-iPhone-11.jpg'),
        description: 'The iPhone 11 is the first smartphone with built-in ultra-wideband hardware, via its Apple U1 chip. The iPhone 11 has a 6.1 in (15.5 cm) IPS LCD, unlike the Pro models which have OLED displays. The resolution is 1792 × 828 pixels (1.5 megapixels at 326 ppi) with a maximum brightness of 625 nits and a 1400:1 contrast ratio.'
    },
    {
        id: 103,
        name: 'MacBook Pro',
        price: 6999,
        image: require('../assets/products/apple-macbook-pro-13-inch_550.jpeg'),
        description: 'The MacBook Pro is a line of Macintosh notebook computers introduced in January 2006 by Apple Inc. It is the higher-end model of the MacBook family, sitting above the consumer-focused MacBook Air, and is currently sold with 13-inch, 14-inch, and 16-inch screens..'
    },
    {
        id: 104,
        name: 'iPad Pro',
        price: 699,
        image: require('../assets/products/iPad-Pro-11-2020-.jpg'),
        description: 'The iPad Pro is a high-end tablet computer. The latest iPad Pro models feature a powerful M1 chip, a Thunderbolt port, an improved front-facing camera, a Liquid Retina XDR mini-LED display option on the larger model, and up to 16GB of RAM and 2TB of storage..'
    },
    {
        id: 105,
        name: 'iPhone 11 Pro Max',
        price: 799,
        image: require('../assets/products/iPhone-11-Pro-midnight-green-back-64gb.jpg'),
        description: 'The iPhone 11 is the first smartphone with built-in ultra-wideband hardware, via its Apple U1 chip. The iPhone 11 has a 6.1 in (15.5 cm) IPS LCD, unlike the Pro models which have OLED displays. The resolution is 1792 × 828 pixels (1.5 megapixels at 326 ppi) with a maximum brightness of 625 nits and a 1400:1 contrast ratio..'
    },
    {
        id: 106,
        name: 'iPhone 12',
        price: 899,
        image: require('../assets/products/iphone-12-.jpg'),
        description: 'The iPhone 12 is a device that feels both familiar and new rolled into one. Its flat sides are reminiscent of the iPhone 4, yet it has a 6.1-inch display capable of showing Dolby Vision content. Also, the addition of 5G enables a better gaming and working experience when on the go..'
    },
    {
        id: 107,
        name: 'iPhone X',
        price: 599,
        image: require('../assets/products/iphone-x-silver-back-256GB.jpg'),
        description: 'The iPhone X display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less). Splash, Water, and Dust Resistant 3. Rated IP67 under IEC standard 60529; Chip.'
    },
    {
        id: 108,
        name: 'iPhone XS Max',
        price: 699,
        image: require('../assets/products/iphone-xsmax-gold-back-256GB.png'),
        description: 'The iPhone XS Max features the same hardware and cameras, but has a larger 6.46 inch (164 mm) OLED display (marketed as 6.5 inch) 2688 x 1242 resolution at 458 ppi and battery (3,174mAh). It was also noted by the media that the XS received a smaller battery than that of the X (dropping to 2,658 mAh from 2,716 mAh).'
    },
    {
        id: 109,
        name: 'MacBook Pro',
        price: 7999,
        image: require('../assets/products/MacBookPro-M1-2@2560x1625.jpg'),
        description: 'The MacBook Pro is a line of Macintosh notebook computers introduced in January 2006 by Apple Inc. It is the higher-end model of the MacBook family, sitting above the consumer-focused MacBook Air, and is currently sold with 13-inch, 14-inch, and 16-inch screens.'
    }

];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}