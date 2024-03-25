import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image,Flex} from '@chakra-ui/react';
import watch from '../images/watch.jpg'
import Carousel from './Carousel';
import React from 'react';

const  WatchItem = () =>{
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
                src={watch}
                width={'780px'}
                height={'410px'}
                // width={'80%'}
                alt='Часы'
                className='photoHover'
            /> }
            <Text position={"absolute"} alignContent={'center'} flexWrap={'wrap'} fontSize={'30px'} color={"white"}><b> <a href="#">Электроника и компьютеры</a></b></Text>
        </Flex>
    


        </Card>

        
    )
}
export default WatchItem;    