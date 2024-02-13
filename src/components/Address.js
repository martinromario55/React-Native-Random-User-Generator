import { View, Text } from 'react-native'
import React from 'react'

export default function Address({ user }) {
  return (
    <View className="border border-stone-700 p-4 my-2 rounded">
      <Text className="text-white font-bold text-2xl">Address and City</Text>

      <View>
        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Address: </Text>
          {user.location.street.number}, {user.location.street.name},{' '}
          {user.location.city}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">State: </Text>
          {user.location.state}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Cell: </Text>
          {user.cell}
        </Text>
      </View>
    </View>
  )
}
