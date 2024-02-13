import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({ getUser }) {
  return (
    <TouchableOpacity className="items-start my-2" onPress={getUser}>
      <Text className="py-2 px-4 rounded bg-orange-400 text-white font-bold text-base">
        Generate Random User
      </Text>
    </TouchableOpacity>
  )
}
