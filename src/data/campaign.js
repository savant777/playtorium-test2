const campaigns = [
    {
        id: 1,
        name: 'ส่วนลด 5 บาท',
        type: 'coupon_fixed',
        value: 5,
        category: null,
        isPointBased: false,
        tierPrice: 0,
        description: 'ลดราคาสินค้าทั้งตะกร้าจำนวน 5 บาท',
        active: 1
    },
    {
        id: 2,
        name: 'ส่วนลด 10 บาท',
        type: 'coupon_fixed',
        value: 10,
        category: null,
        isPointBased: false,
        tierPrice: 0,
        description: 'ลดราคาสินค้าทั้งตะกร้าจำนวน 10 บาท',
        active: 1
    },
    {
        id: 3,
        name: 'ส่วนลด 50 บาท',
        type: 'coupon_fixed',
        value: 50,
        category: null,
        isPointBased: false,
        tierPrice: 0,
        description: 'ลดราคาสินค้าทั้งตะกร้าจำนวน 50 บาท',
        active: 1
    },
    {
        id: 4,
        name: 'ส่วนลด 5%',
        type: 'coupon_percent',
        value: 5,
        category: null,
        isPointBased: false,
        tierPrice: 0,
        description: 'ลดราคาสินค้าทั้งตะกร้า 5%',
        active: 1
    },
    {
        id: 5,
        name: 'ส่วนลด 10%',
        type: 'coupon_percent',
        value: 10,
        category: null,
        isPointBased: false,
        tierPrice: 0,
        description: 'ลดราคาสินค้าทั้งตะกร้า 10%',
        active: 1
    },
    {
        id: 6,
        name: 'ส่วนลด 15%',
        type: 'coupon_percent',
        value: 15,
        category: null,
        isPointBased: false,
        tierPrice: 0,
        description: 'ลดราคาสินค้าทั้งตะกร้า 15%',
        active: 1
    },
    {
        id: 7,
        name: 'ส่วนลดเสื้อผ้า 10%',
        type: 'ontop_percent_by_category',
        value: 10,
        category: 'clothing',
        isPointBased: false,
        tierPrice: 0,
        description: 'ลดราคาสินค้าหมวดเสื้อผ้า 10%',
        active: 1
    },
    {
        id: 8,
        name: 'ส่วนลดเครื่องประดับ 10%',
        type: 'ontop_percent_by_category',
        value: 10,
        category: 'accessories',
        isPointBased: false,
        tierPrice: 0,
        description: 'ลดราคาสินค้าหมวดเครื่องประดับ 10%',
        active: 1
    },
    {
        id: 9,
        name: 'ส่วนลดอุปกรณ์อิเล็กทรอนิกส์ 10%',
        type: 'ontop_percent_by_category',
        value: 10,
        category: 'electronics',
        isPointBased: false,
        tierPrice: 0,
        description: 'ลดราคาสินค้าหมวดอุปกรณ์อิเล็กทรอนิกส์ 10%',
        active: 1
    },
    {
        id: 10, 
        name: 'ใช้แต้มแลกส่วนลด', 
        type: 'ontop_points', 
        value: 0, 
        category: null, 
        isPointBased: true, 
        tierPrice: 0, 
        description: 'ใช้แต้มแลกส่วนลด (1 แต้ม = 1 บาท) สูงสุด 20%', 
        active: 1 
    },
    {
        id: 11,
        name: 'ส่วนลดพิเศษ 40 บาทเมื่อซื้อครบ 300 บาท',
        type: 'seasonal_tiered',
        value: 40, 
        category: null,
        isPointBased: false, 
        tierPrice: 300,
        description: 'ทุก ๆ 300 บาท ได้รับส่วนลด 40 บาท',
        active: 1
    },
    {
        id: 12,
        name: 'ส่วนลดพิเศษ 50 บาทเมื่อซื้อครบ 500 บาท',
        type: 'seasonal_tiered',
        value: 50,
        category: null,
        isPointBased: false,
        tierPrice: 500,
        description: 'ทุก ๆ 500 บาท ได้รับส่วนลด 50 บาท',
        active: 1
    },
];

export default campaigns;