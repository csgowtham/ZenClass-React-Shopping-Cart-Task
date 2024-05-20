import React,{useState} from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'


function App() {
  
  let [cart,setCart] = useState(0);

  const data = [
    {
      id: 1,
      image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683562472/Croma%20Assets/Communication/Mobiles/Images/267258_0_ii7gma.png?tr=w-600',
      productName: 'Redmi Note 12 Pro+ 5G',
      price: '₹19,999',
      description: 'Display: 6.67-inch (1080x2000), Front Camera: 16MP, Rear Camera: 200MP + 8MP + 2MP, RAM: 8GB, Storage: 256GB, Battery Capacity: 4980mAh'
      
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSq1JZatvkhyjCwsTslHG3Kft1-Vzy8O95RATIAmC-A&s',
      productName: 'LG Double Door Refrigerator',
      price: '₹45,999',
      description: 'Capacity: 407L, Energy Rating: 4 Star, Cooling Technology: Multi Air Flow, Dimensions: 70.3 x 68.6 x 178.5 cm'
    },
    {
      id: 3,
      image: 'https://nandilathgmart.com/wp-content/uploads/2023/05/43x70l-381.jpg',
      productName: 'Sony Bravia 55 inch 4K UHD Smart TV',
      price: '₹89,999',
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
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSH6fT3jhX3fQ-CfkYHb98GqQPRIfHO0AGWW-VLIs7ZIxpywF0HUAWnsmUFOvQytrUn4z2PqEn7M9cM6gYBodaU6EEAjA_TF2xiPZUroT1F&usqp=CAE',
      productName: 'Dyson Supersonic Hair Dryer',
      price: '₹29,999',
      description: 'Power: 1600W, Technology: Air Multiplier, Heat Settings: 3, Speed Settings: 3, Attachments: 5'
    },
    {
      id: 6,
      image: 'https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2196728/2018/2/13/11518522610522-Roadster-Men-Navy-Blue-Solid-Round-Neck-T-shirt-8451518522610271-1.jpg',
      productName: 'Roadster Men’s Solid T-Shirt',
      price: '₹599',
      description: 'Material: Cotton, Fit: Regular, Sleeve: Half Sleeve, Neck: Round Neck, Color: Black'
    },
    {
      id: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLbBvE_vY-QPU8v_gnmSLT8pRnbk17h_BgjkquIKm2A&s',
      productName: 'Handmade Crochet Octopus',
      price: '₹1,299',
      description: 'Material: Cotton Yarn, Filling: Polyester Fiber, Size: 15cm, Color: Blue, Handcrafted with love'
    },
    {
      id: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Xjv6Hl7X8w9sN9KNoD_-veCAditmd9GTfmRhYL2u5g&s',
      productName: 'SanDisk Cruzer Blade 64GB USB Flash Drive',
      price: '₹499',
      description: 'Storage Capacity: 64GB, Interface: USB 2.0, Form Factor: Compact, Color: Black and Red, Warranty: 5 Years'
    },
    {
      id: 9,
      image: 'https://www.justcanon.in/cdn/shop/products/eos-1500d_04.jpg?v=1659021357',
      productName: 'Canon EOS 1500D DSLR Camera',
      price: '₹39,999',
      description: 'Resolution: 24.1MP, Sensor: APS-C CMOS, Lens: 18-55mm, Display: 3-inch, Connectivity: Wi-Fi, NFC'
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
    <NavBar cart={cart}/>
    <Header/>
    <Section 
      data = {data} 
      cart = {cart}
      setCart = {setCart}
    />
    <Footer/>
  </>
}

export default App