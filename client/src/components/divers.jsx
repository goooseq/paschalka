import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
import divers from '../images/divers.jpg'
import Carousel from './Carousel';
import React from 'react';
import watch from '../images/watch.jpg'

const  DiversItem = () =>{
    // const images = [
    //     {lasty},
    //     {lasty},
    //     {lasty}
    // ];
    return(
        <Card>
            




            
                <Box>
            {<Image
                src={divers}
                width={'620px'}
                height={'360px'}
                // width={'80%'}
                alt='Дайверы'
            /> }
            <Text  position={'absolute'} top={200} left={"125px"} fontSize={'30px'} color={"white"}><b> <a href="#">Костюмы и аксессуары</a></b></Text>
        </Box>


        </Card>

        
    )
}
export default DiversItem;    