import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../components/types";
import{randomUUID}from 'expo-crypto'
type CartType={
  items:CartItem[]
 addItem:(product:Product, size:CartItem['size'])=> void
 updateQuantity :(itemId:string, amount:-1|1)=>void
 total:number
}

const CartContex= createContext<CartType>({
    items:[],
    addItem:()=>{}
    , updateQuantity :(itemId:string, amount:-1|1)=>{},
    total:0
})

const CartProvider=({children}:PropsWithChildren)=>{
    const [items, setItems]=useState<CartItem[]>([])
    // console.log(items);
    const  addItem=(product:Product, size:CartItem['size'])=> {
// console.log(product);
    const existingItem= items.find(
        (item)=>item.product===product&&item.size===size
    )
    if(existingItem){
        updateQuantity(existingItem.id, 1)
        return
    }
        const newCartItem:CartItem={
            id:randomUUID(),
            product,
            product_id:product.id,
            size,
            quantity:1
        }
        setItems([newCartItem, ...items])
    }
  const updateQuantity =(itemId:string, amount:-1|1)=>{
      setItems( items.map(item=>item.id!==itemId? item:{...item, quantity:item.quantity+amount}).filter(item=>item.quantity>0)
  )
  }
   const total=items.reduce((sum,item)=>(sum+=item.product.price*item.quantity),0)
    return(
        <CartContex.Provider value={{items, addItem, updateQuantity, total}}>
           {children}
        </CartContex.Provider>
    )
}
export default CartProvider
export const  UseCart=()=> useContext(CartContex)

