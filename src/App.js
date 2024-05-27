import React,{useState} from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'


function App() {
  // Use useState hook to manage the state of the cart
  let [cart,setCart] = useState(0);
  // Define an array of product data, each with an id, image, productName, price, and description
  const data = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuc-1cn9vom_KWJVqSgmxGgThjIcMig47DNN1lIkd_Pg&s',
      productName: 'Samsung Galaxy S21',
      price: '₹28,999',
      description: 'The Samsung Galaxy S21 features a 6.2-inch Dynamic AMOLED display, Exynos 2100 processor, 8GB RAM, and a triple-camera setup for stunning photos and videos.'
      
    },
    {
      id: 2,
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/MM/YA/KS/55789556/apple-macbook-air-m1-chip.jpg',
      productName: 'Apple MacBook Air (M1)',
      price: '₹72,299',
      description: 'The MacBook Air with M1 chip offers unparalleled performance and battery life in a sleek and lightweight design. Features a 13.3-inch Retina display and 256GB SSD.'
    },
    {
      id: 3,
      image: 'https://www.lg.com/content/dam/channel/wcms/in/images/refrigerators/gr-x31fmqhl_amcqebn_eail_in_c/GR-X31FMQHL-Refrigerators-Food-Front-Light-On-450.jpg',
      productName: 'LG InstaView Door-in-Door Refrigerator',
      price: '₹1,61,999',
      description: 'Resolution: 3840x2160, HDR: Yes, Smart TV Features: Android, Connectivity: 4 HDMI, 3 USB, Sound Output: 20W'
    },
    {
      id: 4,
      image: 'https://images-cdn.ubuy.co.in/64c6b91665828b7b8d15d343-samsung-galaxy-tab-s7-128gb-mystic-black.jpghttps://images-cdn.ubuy.co.in/64c6b91665828b7b8d15d343-samsung-galaxy-tab-s7-128gb-mystic-black.jpg',
      productName: 'Samsung Galaxy Tab S7',
      price: '₹55,999',
      description: 'Display: 11-inch (1600x2560), Processor: Snapdragon 865+, RAM: 6GB, Storage: 128GB, Battery: 8000mAh'
    },
    {
      id: 5,
      image: 'https://m.media-amazon.com/images/I/71GIYSZpW+L._SX679_.jpg',
      productName: 'Apple Watch 7 Series',
      price: '₹41,999',
      description: 'The Apple Watch Series 7 offers a larger, always-on Retina display, advanced health monitoring, and robust fitness tracking features.'
    },
    {
      id: 6,
      image: 'https://m.media-amazon.com/images/I/61qS1eDVy9S._SX679_.jpg',
      productName: 'Microsoft Surface Pro 7 ',
      price: '₹30599',
      description: 'The Microsoft Surface Pro 7 is a versatile 2-in-1 tablet with a 12.3-inch touchscreen, Intel Core i5 processor, and 8GB RAM. Perfect for both work and play.'
    },
    {
      id: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBgKUbbQX0lcIqvkR_bIA3hBlHV5XoySD_bGiTnD47g&s',
      productName: 'Bose QuietComfort 35 II Wireless Bluetooth Headphones',
      price: '₹3,299',
      description: 'Bose QuietComfort 35 II are wireless noise-cancelling headphones known for their superior sound quality and comfort, perfect for travel and daily commutes.'
    },
    {
      id: 8,
      image: 'https://in.canon/media/image/2020/07/04/862a1f43feed4fab85897aee45b6324c_R5_Front_BODY.png',
      productName: 'Canon EOS R5 Camera',
      price: '₹3,65,995',
      description: 'The Canon EOS R5 is a professional-grade mirrorless camera with a 45MP full-frame sensor, 8K video recording, and advanced autofocus capabilities.'
    },
    {
      id: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAX-lQFsbB4zb5rOzDd_BONMXwJeBHbp79JGgCJv5AMQ&s',
      productName: 'WHIRLPOOL WFW6620HC Washing Machine',
      price: '₹1,43,999',
      description: 'The Whirlpool front load washer offers a 4.5 cu. ft. capacity, Load & Go dispenser, and intuitive controls, making laundry day easier than ever.'
    },
    {
      id: 10,
      image: 'https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw94c20180/2022/FA22/set_0929_smartwatches_lm/Slices/Gen5E/0929_Gen5E_Learnmore_Hero1_Mobile.jpg',
      productName: 'Fossil Gen 5 Smartwatch',
      price: '₹22,995',
      description: 'Display: 1.28-inch AMOLED, Processor: Snapdragon Wear 3100, RAM: 1GB, Storage: 8GB, Battery Life: 24 hours'
    },
    {
      id: 11,
      image: 'https://m.media-amazon.com/images/I/31ngaLjEzLS._QL92_SH45_SS200_.jpg',
      productName: 'Fitbit Charge 4 Fitness Tracker',
      price: '₹14,999',
      description: 'Display: OLED, Tracking: Heart Rate, Sleep, GPS: Built-in, Battery Life: 7 days, Water Resistance: 50m'
    },
    {
      id: 12,
      image: 'https://m.media-amazon.com/images/I/81c3ItE+jyL.jpg',
      productName: 'DeLonghi Espresso Coffee Machine',
      price: '₹18,999',
      description: 'Type: Espresso, Power: 1450W, Pressure: 15 bar, Water Tank: 1.2L, Milk Frother: Yes, Dimensions: 23x20x32 cm'
    }
  ];
  

  return <>
    {/* NavBar component, passing the cart state to display the number of items */}
    <NavBar cart={cart}/>
    {/* Header component */}
    <Header/>
    {/* Section component, passing the product data, cart state, and setCart function */}
    <Section 
      data = {data} 
      cart = {cart}
      setCart = {setCart}
    />
    {/* Footer component */}
    <Footer/>
  </>
}

export default App