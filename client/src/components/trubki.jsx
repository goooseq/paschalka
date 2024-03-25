import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image, Flex} from '@chakra-ui/react';
import diver001 from '../images/diver001.jpg'
import Carousel from './Carousel';
import React from 'react';

const  TrubkiItem = () =>{
    // const images = [
    //     {lasty},
    //     {lasty},
    //     {lasty}
    // ];
    return(
        <Card
            height={'150px'}
       >

       


          
        <Flex
            justify={'center'}
            align={"center"}
        >
            {<Image
                src={diver001}
                width={'510px'}
                height={'500px'}
                // width={'80%'}
                alt='Ласты,маски и трубки'
                className='photoHover'
            /> }
            <Text position={"absolute"} alignContent={'center'} flexWrap={'wrap'} fontSize={'30px'} color={"white"}><b> <a href="#">Ласты, маски и трубки  </a></b></Text>
        </Flex>
       


        </Card>

        
    )
}
export default TrubkiItem;    