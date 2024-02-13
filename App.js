import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import { format } from 'date-fns'

export default function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // fetch data from https://randomuser.me/api
  const getUser = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://randomuser.me/api')
      const data = await response.json()
      setUsers(data.results)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-stone-800">
      <StatusBar style="light" />

      {isLoading ? (
        <View className="flex-1 h-screen items-center justify-center">
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        users.map(user => (
          <View key={user.login.uuid} className="py-10 px-4 space-y-4">
            <View className="flex-row items-center gap-2 border border-stone-700 p-4 rounded">
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

            <View className="border border-stone-700 p-4 rounded">
              <Text className="text-white font-bold text-2xl">
                Personal Details
              </Text>

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

            <View className="border border-stone-700 p-4 rounded">
              <Text className="text-white font-bold text-2xl">
                Address and City
              </Text>

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

            <TouchableOpacity className="items-start" onPress={getUser}>
              <Text className="py-2 px-4 rounded bg-orange-400 text-white font-bold text-base">
                Generate Random User
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
