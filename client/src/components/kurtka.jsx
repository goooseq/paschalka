import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image, Flex} from '@chakra-ui/react';
import kurtka from '../images/kurtka.webp'
import Carousel from './Carousel';
import React from 'react';

const  KurtkaItem = () =>{
    return(
        <Card>

       
       

        <Flex
            justify={'center'}
            align={"center"}
        >
            {<Image
                src={kurtka}
                width={'510px'}
                height={'500px'}
                // width={'80%'}
                alt='куртка'
                className='photoHover'
            /> }
            <Text position={"absolute"} alignContent={'center'} flexWrap={'wrap'} fontSize={'30px'} color={"white"}><b> <a href="#">BCD куртка</a></b></Text>
        </Flex>
       

        </Card>

        
    )
}
export default KurtkaItem;    