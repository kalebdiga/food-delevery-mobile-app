import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
// import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
// const product=products[0]
import { Product } from './types';
import { Link, useSegments } from 'expo-router';
type productListProps={
  product:Product
}

export default function TabOneScreen({product}:productListProps) {
  const segement=useSegments() 
  return (
      <Link href={`/${segement[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
      <Image   
          style={styles.image} 
          source={{uri:product.image||"default image"}}
          resizeMode='contain'
        />
      <Text style={styles.title}> {product.name}</Text>
      <Text style={styles.price}> ${product.price}</Text>
  
      </Pressable>
      </Link>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor:"white",
      padding:10,
      borderRadius:20,
      flex:1,
      borderWidth:1,
      maxWidth:"50%"
    },
    image:{
      width:"100%",
      aspectRatio:1
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  price:{
    color:Colors.light.tint,
    fontWeight: 'bold',
  }
  });
  