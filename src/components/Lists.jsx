import { VStack } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import { useSelector } from "react-redux";
import List from "./List";

const Lists = () => {

  const data = useSelector((state) => state.jadwal);


  console.log(data.res)



  return (
    <VStack width="full" spacing="3">
      {data?.res?.jadwalSholat?.map((v,index) => (
           <List key={nanoid(4)} hari={v.hari} jadwal={v.jadwal} />
      ))}
    </VStack>
  );
};

export default Lists;
