import React, { useEffect, useState } from 'react'
import "../all.css"
import { useNavigate } from 'react-router-dom';
import nike1 from "../../images/nike-1.png"
import nike2 from "../../images/nike2.png"
import nike3 from "../../images/nike3.png"
import nike4 from "../../images/nike4.png"
import adi1 from "../../images/adi1.png"
import adi2 from "../../images/adi2.png"
import puma1 from "../../images/puma1.png"
import puma2 from "../../images/puma2.png"
import reb1 from "../../images/reb1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


function Card() {

    const data = [
        {
            brand: "nike",
            items: [
                {
                    img: [
                                `${nike1}`,
                                `${nike2}`,
                                `${nike3}`,
                                `${nike4}`,
                    ],
                    price: ["$180", "$115", "$150", "$285"],
                    name: ["Nike J1 Low", "Air Jordan Low", "Air Jordan G", "Nike Alphafly"],
                    color: ["white", "Black and green", "Purple and white", "whitesmoke"],
                    description: [
                        "Nike J1 Low is a lightweight, comfortable sneaker designed for daily wear with its breathable material and stylish look.",
                        "The Air Jordan Low offers the iconic Jordan look with a sleek, low-cut design, perfect for casual and athletic use.",
                        "Air Jordan G is a golf shoe that brings style and performance together, providing excellent grip and comfort on the course.",
                        "Nike Alphafly is a high-performance racing shoe engineered for speed with responsive cushioning and an aerodynamic design."
                    ]
                }
            ]
        },
        {
            brand: "adidas",
            items: [
                {
                    class :['rotate-0'],
                    img: [
                        `${adi1}`,
                        `${adi2}`
                     ],
                    price: ["$80", "$220"],
                    name: ["Adidas 7i", "Adidas Hiker"],
                    color: ["white", "Black"],
                    description: [
                        "Adidas 7i is a stylish and versatile sneaker perfect for urban environments with a sleek design and lightweight feel.",
                        "Adidas Hiker is designed for adventure, offering durability and waterproof protection for hiking enthusiasts."
                    ]
                }
            ]
        },
        {
            brand: "puma",
            items: [
                {
                    img: [
                        `${puma1}`,
                        `${puma2}`,
                        
                    ],
                    price: ["$100", "$100"],
                    name: ["Puma A1", "BMW fusion 2.0"],
                    color: ["Black", "Black"],
                    description: [
                        "Puma A1 is a bold, everyday sneaker that combines comfort with a minimalist design, making it a versatile option.",
                        "BMW Fusion 2.0 blends Puma's comfort with BMW's sleek aesthetics, creating a sneaker for both car enthusiasts and style-conscious wearers."
                    ]
                }
            ]
        },
        {
            brand: "reebok",
            items: [
                {
                    class : ["rotate-0"],
                    img: [
                        `${reb1}`
                    ],
                    price: ["$120"],
                    name: ["Reebok 91"],
                    color: ["Black"],
                    description: [
                        "Reebok 91 is a performance-focused shoe offering excellent support and cushioning, perfect for workouts and casual wear."
                    ]
                }
            ]
        },
        // {
        //     brand: "newbalance",
        //     items: [
        //         {
        //             class : ['rotate-0'],
        //             img: [
        //                 "https://nb.scene7.com/is/image/NB/mcruzab3_nb_03_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
        //                 "https://reebok.bynder.com/transform/dff13c52-c9e0-46ae-a8ca-c7542c8109a6/100202416_SLC_eCom-tif?io=transform:fit,width:400&quality=100"
        //             ],
        //             price: ["$90", "$120"],
        //             name: ["NEW balance k1", "94 Low shoe"],
        //             color: ["Black", "Mixer blue"],
        //             description: [
        //                 "NEW Balance K1 offers a sleek, comfortable design, perfect for daily wear with superior support.",
        //                 "94 Low Shoe is a durable and stylish sneaker with a modern design, providing comfort and a trendy look."
        //             ]
        //         }
        //     ]
        // }
    ];

    useEffect(() => {
        AOS.init({
          duration: 1200,
          offset: 200,   
          delay: 100, 
        })
    
      }, []);
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-wrap  px-14  justify-start gap-10 mb-4 mt-12">
    {data.map((val ,index1)=> (
        val.items[0].img.map((image , index2)=>(
                <div data-aos="zoom-out-down" key={index1 + "-" + index2} className="card bg-base-100 mt-12 w-96 shadow-xl">
                    {console.log(image)}
                    <figure  className="text-left bg-slate-200">
                        <img className="cursor-pointer w-full object-contain"
                             src={image}
                             onClick={() => navigate("/", {
                                state: {
                                    image: image,
                                    name: val.items[0].name[index2],
                                    description: val.items[0].description[index2],
                                    price: val.items[0].price[index2],
                                    brand: val.brand
                                }
                            })}
                             alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flec justify-between">
                             {val.items[0].name[index2]}  
                            <div className="badge badge-secondary">Popular</div>
                        </h2>
                        <p>{val.items[0].description[index2]}</p>
                        <p className=' font-bold text-orange-400'>{val.items[0].price[index2]}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{val.brand.charAt(0).toUpperCase() + val.brand.slice(1)}</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                ))
            ))}
        </div>
    )
}

export default Card