import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
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

       
        <Box>
            {<Image
                src={watch}
                width={'620px'}
                height={'360px'}
                // width={'80%'}
                alt='Часы'
            /> }
            <Text  position={'absolute'} top={200} left={20} fontSize={'30px'} color={"white"}><b> <a href="#"> Электроника и компьютеры</a></b></Text>
        </Box>
       


        </Card>

        
    )
}
export default WatchItem;    