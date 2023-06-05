import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const data = [
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
  {
    id:Date.now(),
    standard : 1,
  },
]
const Home: React.FC = () => {
  return (
    <Box>
      <Grid templateColumns='repeat(3,1fr)' gap={6} mx={50} >
        {data.map((book,index)=>(
          <GridItem  w='100%' h='50' bg='gray.400' textAlign='center' fontSize='4xl'>{index + 1}</GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default Home;
