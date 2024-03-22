import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
import kurtka from '../images/kurtka.webp'
import Carousel from './Carousel';
import React from 'react';

const  KurtkaItem = () =>{
    return(
        <Card>

       
        <Box>
            {<Image
                src={kurtka}
                width={'405px'}
                height={'405px'}
                // width={'80%'}
                alt='куртка'
            /> }
            <Text  position={'absolute'} top={160} left={'100px'} fontSize={'30px'} color={"white"}><b> <a href="#">BCD куртка</a></b></Text>
        </Box>
       


        </Card>

        
    )
}
export default KurtkaItem;    