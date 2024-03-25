import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image, Flex} from '@chakra-ui/react';
import reguliatori from '../images/reguliatori.jpg'
import Carousel from './Carousel';
import React from 'react';

const  ReguliatoriItem = () =>{
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
                src={reguliatori}
                width={'510px'}
                height={'500px'}
                // width={'80%'}
                alt='Часы'
                className='photoHover'
            /> }
            <Text position={"absolute"} alignContent={'center'} flexWrap={'wrap'} fontSize={'30px'} color={"white"}><b> <a href="#">Регуляторы </a></b></Text>
        </Flex>
       


        </Card>

        
    )
}
export default ReguliatoriItem;    