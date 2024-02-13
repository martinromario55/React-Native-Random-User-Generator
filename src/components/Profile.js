import { View, Text, Image } from 'react-native'
import React from 'react'
import { format } from 'date-fns'

export default function Profile({ user }) {
  return (
    <View className="border border-stone-700 p-4  my-2 rounded">
      <View className="flex-row items-center gap-2">
        <Image
          source={{ uri: user.picture.large }}
          className="w-20 h-20 rounded-full"
        />
        <View>
          <Text className="text-white text-lg">
            {user.name.first} {user.name.last}
          </Text>
          <Text className="text-stone-400 text-base">
            {user.dob.age} years, {''}
            {format(new Date(user.dob.date), 'do MMMM yyyy')}
          </Text>
        </View>
      </View>
    </View>
  )
}
