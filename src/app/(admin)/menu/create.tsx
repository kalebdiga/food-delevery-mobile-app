import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/src/constants/Colors';
import Button from '@/src/components/reusable/Button';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';
const deaultImgae="'p"
export default function CreateProductScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState('');
  const [image, setImage] = useState<string | null>(null);
  

const {id}=useLocalSearchParams()

const isUpdating=!!id
  const resetFields = () => {
    setName('');
    setPrice('');
  };

  const validateInput = () => {
    setErrors('');
    if (!name) {
      setErrors('Name is required');
      return false;
    }
    if (!price) {
      setErrors('Price is required');
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors('Price is not a number');
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (isUpdating) {
      // update
      onUpdate();
    } else {
      onCreate();
    }
  };

  const onCreate = async () => {
    if (!validateInput()) {
      return;
    }
  }

  const onUpdate = async () => {
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }); 

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const onDelete=()=>{
    Alert.alert("Confirmation",'you are deleted secessfully this prduct')
  }

  const confirmDelete=()=>{
    Alert.alert('Confirm', 'Are you sure want to delete this product',[{text:"cancel"}, {text:"Delete", style:"destructive",onPress:onDelete}])
  }


  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:isUpdating?"Update product":"Create Product"}}/>
        <Image 
        source={{ uri: image||deaultImgae  }}
        style={styles.image}
      />
         <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>
    <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />

<Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />  

             <Text style={{ color: 'red' }}>{errors}</Text>

       <Button text='Create' onPress={onCreate}/>

       {isUpdating && (
        <Text 
        onPress={confirmDelete} 
        style={[styles.textButton, {color:"red"}]}>
          Delete
        </Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },

  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: 'gray',
    fontSize: 16,
  },
})