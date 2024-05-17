import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { UseCart } from '../providers/CartProvider'
import CartListItem from '../components/CartListItem'
import Button from '../components/reusable/Button'

export default function cart() {
  const {items, total}=UseCart()

  return (
    <View>
      <FlatList
         data={items}
         renderItem={
          ({item})=> <CartListItem key={item.id} cartItem={item}/>
         }
         contentContainerStyle={{padding:10, gap:10}}
      />
      <Text style={{marginTop:20, fontSize:20, fontWeight:"500"}}>Total: ${total}</Text>
      <Button text='Checkout'/>
    </View>
  )
}