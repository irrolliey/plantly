import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { theme } from '@/theme'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="index"
        options={{
            title:"Home",
        headerRight:()=>(
          <Link
          href={"/new"}
           asChild
           
          >
          <Pressable
          style={{marginRight:18} } hitSlop={20}
          >
          <AntDesign name="pluscircleo" size={24} color={theme.Green} />
          </Pressable>
          </Link>
         ),
  
        }}
        />
        <Stack.Screen
        name='plants/[plantId]'
        options={{
            title:""
        }}
        />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})