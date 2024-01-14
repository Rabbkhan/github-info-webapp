import { Avatar, Badge, Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Repos from './Repos'

const UserProfile = ({userData}) => {
  
  return (
    <>
    <Flex my={16} border={"2px solid"} borderColor={"green.500"} borderRadius={4} padding={8}>
        <VStack gap={5}>
        {userData.avatar_url && <Avatar size={'2xl'} name= {userData.name} src={userData.avatar_url} />}
          
          <Button colorScheme='whatsapp'>
            <a href={userData.html_url} target='_blank'>
                View Profile
            </a>
          </Button>

        </VStack>

<VStack ml={8} alignItems={"self-start"}>
    <Flex gap={4} justifyContent={'center'} alignItems={'center'} mx={'auto'}>
  <Badge fontSize={"0.9em"}>Public Repos : {userData.public_repos}</Badge>
  <Badge colorScheme='green' fontSize={"0.9em"}>Public Gists : {userData.public_gists}</Badge>
    <Badge colorScheme='red' fontSize={"0.9em"}>Followers : {userData.followers}</Badge>
  <Badge colorScheme='purple' fontSize={"0.9em"}>Following : {userData.following}</Badge>

    </Flex>

<Text fontSize={"xl"} fontWeight={"bold"} mt={4} color={"green.400"}>
{userData.name}
</Text>
<Text fontSize={"xl"} fontWeight={"bold"} color={"green.400"}>
{userData.bio}
</Text>
<Box>
    <Text>
        <Text fontSize={"md"}>
            <Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
                Company:
            </Text>
                {userData.company || "Not Specified"}
        </Text>
    </Text>
    <Text>
        <Text fontSize={"md"}>
            <Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
                Location:
            </Text>
                {userData.location || "Not Specified"}
        </Text>
    </Text>
    <Text>
        <Text fontSize={"md"}>
            <Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
                Blog / website:
            </Text>
            {userData.blog ?(
                <a href={userData.blog} target='_blank'>
                    {userData.blog}
                </a>
            ):"Not Specified"}
        </Text>
    </Text>

    <Text>
        <Text fontSize={"md"}>
            <Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
                Member Since:
            </Text>
                {new Date(userData.created_at).toLocaleDateString() || "Not Specified"}
        </Text>
    </Text>
</Box>

</VStack>
    </Flex>
    
<Repos reposUrl = {userData.repos_url} />

    </>
  )
}

export default UserProfile