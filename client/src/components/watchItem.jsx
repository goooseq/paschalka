import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
import watch from '../images/watch.png'
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
                width={'300px'}
                alt='Ласты'
            /> }
            <Text  position={'absolute'} top={120} left={10} fontSize={'15px'} color={"teal"}><b>Электроника и компьютеры</b></Text>
        </Box>
       


        </Card>

        
    )
}
export default WatchItem;    