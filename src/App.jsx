import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Box, Container, Text } from '@chakra-ui/react'
import Search from './components/Search'
import UserProfile from './components/UserProfile'

const App = () => {

  const [userData, setUserData] = useState(null)
const[loading, setLoading] = useState(false)
console.log(userData)
  return (
    <>
    <Container maxW='container.lg'>

    <Navbar/>
    <Text fontSize={"2xl"} textAlign={"center"} p={5} >
      Search Users on Github
      </Text>
      <Search setUserData={(res) => setUserData(res)} setLoading={setLoading} />
    {userData &&  <UserProfile userData={userData}/> }
    </Container>
    </>
  )
}

export default App