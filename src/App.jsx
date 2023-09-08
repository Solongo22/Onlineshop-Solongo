import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  Items  from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      orders:[],
      currenItems:[],
      items: [
        {
          id: 1,
          title: "Цагаан сандал",
          img: "sandal.jfif",
          desc: "Lorem ipsum dolor sit amet.",
          category: "chairs",
          price: "450000.99",
        },
        {
          id: 2,
          title: "Улаан ширээ",
          img: "table.jfif",
          desc: "Lorem ipsum dolor sit amet.",
          category: "tables",
          price: "89000.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa.webp",
          desc: "Lorem ipsum dolor sit amet.",
          category: "sofa",
          price: "650000.99",
        },
        {
          id: 4,
          title: "Ламп",
          img: "lamp.jfif",
          desc: "Lorem ipsum dolor sit amet.",
          category: "lights",
          price: "300000.99",
        },
        {
          id: 5,
          title: "Цагаан ширээ",
          img: "whitetable.jpg",
          desc: "Lorem ipsum dolor sit amet.",
          category: "tables",
          price: "299000",
        },
         {
          id: 6,
          title: "Цагаан сандал",
          img: "chair.webp",
          desc: "Lorem ipsum dolor sit amet.",
          category: "tables",
          price: "559000",
        },
      ],
      showFullItem:false,
      fullItem:{},
    };
    this.onShowItem=this.onShowItem.bind(this)
    this.state.currenItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder=this.deleteOrder.bind(this)
    this.chooseCategory=this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="max-w-[1200px] h-fit mx-auto my-[50px] w-[90%]">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items 
        onShowItem={this.onShowItem} 
        items={this.state.currenItems} 
        onAdd={this.addToOrder} />
        {this.state.showFullItem && (
        <ShowFullItem 
        item={this.state.fullItem}  
        onAdd={this.addToOrder} 
        onShowItem={this.onShowItem}/>)}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem:!this.state.showFullItem})
  }

chooseCategory(category){
  if(category==='all'){
    this.setState({currenItems:this.state.items})
    return
  }
  // console.log(category)
  this.setState({currenItems:this.state.items.filter((el)=>el.category===category)})
}

  deleteOrder(id){
// console.log(id)
this.setState({orders:this.state.orders.filter((el)=>el.id!==id)})
  }


  addToOrder(item){
    let isInArray= false
    this.state.orders.forEach((el)=>{
      if(el.id===item.id) isInArray=true
    })
    if(!isInArray) this.setState({orders:[...this.state.orders, item]})
  }
}

export default App;
