import {  VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import Lists from '../components/Lists'
import LoadingScreen from '../components/LoadingScreen'
import Navbar from '../components/Navbar'
import { jadwalSholatService } from '../Redux/Service/JadwalFetch'

const Main = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.jadwal)


  useEffect(() => {
    dispatch(jadwalSholatService()).then((res) => {
      console.log(res)
    })

  },[])


  if(data.loading){
    return  <LoadingScreen />
  }

  return (
    <VStack>
      <Navbar />
       <Banner />
       <Lists />
    </VStack>
  )
}

export default Main