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
import Profile from './src/components/Profile'
import PersonalDetails from './src/components/PersonalDetails'
import Address from './src/components/Address'
import Button from './src/components/Button'
import Header from './src/components/Header'

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
            <Header />
            <Profile user={user} />

            <PersonalDetails user={user} />

            <Address user={user} />

            <Button getUser={getUser} />
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
