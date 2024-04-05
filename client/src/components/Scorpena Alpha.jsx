import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
import ScorpenaAlpha from '../images/ScorpenaAlpha.jpg'
import Carousel from './Carousel';
import React from 'react';

const  ScorpenaAlpha= () =>{
    // const images = [
    //     {lasty},
    //     {lasty},
    //     {lasty}
    // ];
    return(
        <Card
            width={'400px'}
            height={'500px'}
            background={'#0534'}
            boxShadow={'1px 1px  10px #808080'}
            borderRadius={'10px'}
        >
            

            <CardBody
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
            >

                        {<Image
                            src={lasty}
                            width={'300px'}
                            alt='Ласты'
                        /> }

                {/* <Carousel images={images} /> */}
                <Box>
                    <Heading 
                    fontSize={'30px'}
                    >Компьютер Scorpena Alpha белый</Heading>
                

                </Box>
        <Box>
        <Button colorScheme='teal' size='lg'>Купить</Button>
        
        </Box>
            </CardBody>


        </Card>

        
    )
}
export default ScorpenaAlpha;    