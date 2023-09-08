import React, { useState } from "react";
import{FaShopify} from "react-icons/fa6";
import Order from "./order";

const showOrders=(props)=>{
  let summa=0;
  props.orders.forEach((el)=>(summa+=Number.parseFloat(el.price)))
  return(
    <div>
      {props.orders.map((el)=> (
            <Order key={el.id} item={el} onDelete={props.onDelete}/>
          ))}
          <p className="summa">Niit une {summa.toFixed(2)} ₮</p>
    </div>
  )
}

 const showNothing= ()=> {
 return(
  <div className="sags">
    <h2>....Sags hooson bn</h2>
    </div>
 )}

export default function Header(props) {

  const[cartOpen, setCartOpen]=useState(false)
  return (
    <header>
      <div className="flex justify-between">
        <span className="font-semibold text-[20px]">Гэрийн тавилга</span>
        <ul className="flex space-x-8 cursor-pointer ">
          <li className="transition-all duration-300 hover:opacity-50">
            Бидний тухай
          </li>
          <li className="transition-all duration-300 hover:opacity-50">
            Контакт
          </li>
          <li className="transition-all duration-300 hover:opacity-50">
            Холбогдох
          </li>
        </ul>
        <FaShopify
        onClick={()=>setCartOpen((cartOpen=>!cartOpen))}
        className={`shop-cart-button ${cartOpen && 'active'}`}
        />
        {cartOpen && (<div className="shop-cart">
          {props.orders.length>0 ? showOrders(props):showNothing()}
          </div>
          )}
      </div>
      <div className=" my-[50px] w-full h-[700px] bg-no-repeat bg-cover mix-blend-multiply bg-[#bcbcbc] bg-center relative">
        <img src="/src/imgs/livingRoom.webp" alt="" className="object-cover w-full h-full brightness-50"/>
        <h2 className="absolute top-[100px] left-[50px] text-4xl max-w-[280px] font-semibold text-white">Танд хэрэгтэй шилдэг тавилгууд</h2>
        <h2 className="absolute top-[250px] left-[50px] text-xl font-semibold text-white">Хамгийн хямдаар</h2>
      </div>
    </header>
  );
}
