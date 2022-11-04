import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';

const Banner = () => {
  const data = useSelector((state) => state.jadwal);


  return (
    <VStack width="full" h="full" backgroundColor="green.400">
        <Box textAlign="center" height="full" w="full" textColor="white" alignItems="center" py="10" px="8">
            <Text fontSize="lg">Jadwal Adzan Untuk {data?.res?.daerah} Dan sekitar nya</Text>
        </Box>
    </VStack>
  )
}

export default Banner