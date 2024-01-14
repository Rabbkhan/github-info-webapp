import { Badge, Button, Flex, Link, Spinner, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Repos = ({reposUrl}) => {
const toast = useToast()
const [repos, setRepos] = useState([])
const[loading, setLoading] = useState(false);
const[showmore, setShowMore]= useState(false);
console.log("repo is here", repos);
useEffect(()=>{

const fetchRepos = async () =>{

    try {
        setLoading(true)
        const res = await fetch(reposUrl)
        const data = await res.json();
        if(data.message) throw new Error(data.message);
        setRepos(data)
    } catch (error) {
        toast({
            title: 'Error',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
    }finally{
        setLoading(false)
    }
}
fetchRepos()
},[reposUrl,toast])

  return (
    <>
    <Text textAlign={"center"} letterSpacing={1.5} fontSize={"3xl"}
    fontWeight={"bold"}
    color={"green.400"}
    mt={4}
    >
        Repositories
    </Text>

    {loading &&(
        <Flex justifyContent={"center"}>
            <Spinner size={"xl"} my={4}/>
        </Flex>
    )}
    
    {repos.sort((a,b)=>b.stargazers_count - a.stargazers_count).map((repo,index)=>{
if(index >4 && !showmore) return null;

return(
    <Flex key={repo.id} padding={4} bg={"whiteAlpha.200"}
    _hover={{bg:"whiteAlpha.400"}}
    my={4}
    px={10}
    gap={4}
    borderRadius={4}
    transition={"all 0.3s ease"}
    justifyContent={"space-between"}
    alignItems={"center"}>
        <Flex flex={1} direction={"column"}>
<Link href={repo.html_url} fontSize={"md"} fontWeight={"bold"}>
{repo.name}
</Link>
<Badge fontSize={"0.7em"} colorScheme={"whatsapp"} w={"min-content"} textAlign={"center"} px={1} mt={2}>
Language : {repo.language || "None"}
</Badge>
        </Flex>
        <Flex  flex={1} gap={4} ml={6}>
<Badge fontFamily={"0.9em"}  flex={1} textAlign={"center"}>
    Stars: {repo.stargazers_count}
</Badge>
<Badge fontFamily={"0.9em"} colorScheme='green' flex={1} textAlign={"center"}>
    Forks: {repo.forks_count}
</Badge>
<Badge fontFamily={"0.9em"} colorScheme='gray' flex={1} textAlign={"center"}>
    Watchers: {repo.watchers_count}
</Badge>

</Flex>
    </Flex>
)

    })}

    {showmore &&(
        <Flex justifyContent={"center"}>
        <Button size="md" colorScheme="whatsapp" onClick={()=>setShowMore(false)}>show Less</Button>
        </Flex>
       )}

{!showmore && repos.length >5 && (
        <Flex justifyContent={"center"}>
        <Button size="md" colorScheme="whatsapp" onClick={()=>setShowMore(true)}>show more</Button>
        </Flex>
       )}

    </>
  )
}

export default Repos