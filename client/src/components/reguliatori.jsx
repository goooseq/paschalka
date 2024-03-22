import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
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

       
        <Box>
            {<Image
                src={reguliatori}
                width={'405px'}
                height={'405px'}
                // width={'80%'}
                alt='Часы'
            /> }
            <Text  position={'absolute'} top={160} left={'100px'} fontSize={'30px'} color={"white"}><b> <a href="#">Регуляторы </a></b></Text>
        </Box>
       


        </Card>

        
    )
}
export default ReguliatoriItem;    