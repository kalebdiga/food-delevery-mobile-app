import { View, Text ,StyleSheet, Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import products from '@/assets/data/products'
import { Stack, useLocalSearchParams } from 'expo-router'
import Button from '@/src/components/reusable/Button'
import { UseCart } from '@/src/providers/CartProvider'
import { PizzaSize } from '@/src/components/types'
const size: PizzaSize[] =["S", "M", "L", "XL"]

export default function productDetailScreen() {
const{addItem}=UseCart()
  const {id} =useLocalSearchParams()
const [selectedSize, setSelectedSize]= useState<PizzaSize>("S")
 const product= products.find((element)=>{
  return element.id===Number(id)
 })
 if(!product){
  return <Text>Product not found</Text>
 }
const addToCart=()=>{
 if(!product) return;
// console.log(selectedSize);
  addItem(product, selectedSize)

}
 return (
    <View style={styles.container}>
      <Stack.Screen options={{title:product.name||"Detail"}}/>
      <Image style={styles.image} source={{uri:product.image||"no image 😢"}}/>
      <Text style={styles.title}>{product.name} {id}</Text>
    
      <Text style={styles.Price}>Select Size</Text>
    <Pressable style={[styles.sizes]}>
      {size.map(size=><Text onPress={()=>setSelectedSize(size)} style={[styles.sizeText, { backgroundColor: selectedSize===size? "#a7a6a6":"white"}]} key={size}>{size}</Text>)}
      </Pressable>
   
      <Text style={styles.Price}>${product.price}</Text>
         <Button text='Add to cart' onPress={addToCart}/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:"white"
  }
  ,title:{
    fontSize:24,
    fontWeight:"bold"
  }  ,
  image:{
    width:"100%",
    aspectRatio:1
  },
  Price:{
    fontWeight:"bold",
  marginTop:30  
  
  },
  sizes:{
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-around",
      //  borderWidth:2,
      //  gap:4,
      marginBottom:50
  }
  ,sizeText:{
    fontSize:20,
    fontWeight:"500"
    ,width:50,
    aspectRatio:1,
    borderRadius:25,
    backgroundColor:"gray",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    paddingTop:10    
  }

})