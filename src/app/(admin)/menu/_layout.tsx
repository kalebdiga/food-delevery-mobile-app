 import React from 'react'
import { Link, Stack } from 'expo-router'
import { Pressable } from 'react-native'
import Colors from '@/src/constants/Colors'
import { FontAwesome } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Stack screenOptions={{
    
    }}>
    <Stack.Screen
      name='index'
      options={{
        title:"menu",
        headerRight: () => (
          <Link href="/(admin)/menu/create" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="plus"
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
   

    </Stack>
  )
}