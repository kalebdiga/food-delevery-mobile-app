import { Image, StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import ProductList from '@/src/components/ProductList'
// const product=products[0]

export default function TabOneScreen() {
  return (
    <View>
    <FlatList 
      data={products}
      renderItem={ ({item})=> <ProductList product= {item}/>}
     numColumns={2}
     contentContainerStyle={{gap:10, padding:10}}
     columnWrapperStyle={{gap:10}}
   />


    </View>
  );
}
