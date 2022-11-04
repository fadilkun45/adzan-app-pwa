import { Box, Image, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import mosqueIcon from "../assets/icon/mosque.svg"
import { nanoid } from "nanoid";

const List = ({hari,jadwal}) => {
    return (
        <VStack width="full" height="full" px="4" py="8" borderY="3px solid #48BB78" bgGradient='linear(to-b, blue.500, green.300, green.800)' >
            <Text fontSize="lg" fontWeight="bold" color="white" marginBottom="5">{hari}</Text>
            <Wrap spacing="7" pb="2" width="full" height="full" justify="center">
             {
                jadwal?.map((v) => (
                    <WrapItem
                    key={nanoid()} 
                    px="2"
                    py="2"
                    width="40%"
                    borderRadius="md"
                    shadow="lg"
                    marginBottom="30px"
                >
                    <Box width="full" textAlign="center" color="white">
                        <Image src={mosqueIcon} bg="green.400" px="1" rounded="full" py="1" marginTop="-30px" position="absolute" boxSize="10" alt="mosque" objectFit="cover" />
                        <Text fontWeight="semibold"  marginTop="1em">{v.waktu}</Text>
                        <Text>{v.jam}</Text>
                    </Box>
                </WrapItem>
                ))
             }
            </Wrap>
        </VStack>
    )
}

export default List