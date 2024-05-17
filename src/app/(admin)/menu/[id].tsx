import { View, Text ,StyleSheet, Image, Pressable} from 'react-native'
import React, { useState } from 'react' 
import products from '@/assets/data/products'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import Button from '@/src/components/reusable/Button'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '@/src/constants/Colors'

export default function productDetailScreen() {
  const {id} =useLocalSearchParams()
 const product= products.find((element)=>{
  return element.id===Number(id)
 })
 if(!product){ 
  return <Text>Product not found</Text>
 }

 return (
  
    <View style={styles.container}>
      <Stack.Screen
   
      options={{
        title:product.name||"Detail",
        headerRight: () => (
          <Link href={`/(admin)/menu/create?id=${id}`} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="pencil"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        )
      }}
    />
      {/* <Stack.Screen options={{}}/> */}
      <Image style={styles.image} source={{uri:product.image||"no image 😢"}}/>
      <Text style={styles.title}>{product.name} {id}</Text>
    
   
      <Text style={styles.Price}>${product.price}</Text>
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