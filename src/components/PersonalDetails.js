import { View, Text } from 'react-native'
import React from 'react'
import { format } from 'date-fns'

export default function Details({ user }) {
  return (
    <View className="border border-stone-700 p-4 my-2 rounded">
      <Text className="text-white font-bold text-2xl">Personal Details</Text>

      <View>
        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Full Name: </Text>
          {user.name.title} {user.name.first} {user.name.last}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Age: </Text>
          {user.dob.age}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Date of birth: </Text>
          {format(new Date(user.dob.date), 'do MMMM yyyy')}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Country: </Text>
          {user.location.country}, {user.nat}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">E-mail: </Text>
          {user.email}
        </Text>
      </View>
    </View>
  )
}
