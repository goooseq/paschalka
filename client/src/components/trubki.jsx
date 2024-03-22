import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
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

       
        <Box>
            {<Image
                src={diver001}
                width={'405px'}
                height={'405px'}
                // width={'80%'}
                alt='Ласты,маски и трубки'
            /> }
            <Text  position={'absolute'} top={160} left={10} fontSize={'30px'} color={"white"}><b> <a href="#">Ласты, маски и трубки </a></b></Text>
        </Box>
       


        </Card>

        
    )
}
export default TrubkiItem;    