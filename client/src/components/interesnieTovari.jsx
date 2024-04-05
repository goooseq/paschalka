import '../App.css';

import { Card,Text, Image,Flex} from '@chakra-ui/react';
import watch from '../images/watch.jpg'
import Carousel from './Carousel';
import React from 'react';

const   InteresnieTovari= () =>{
    // const images = [
    //     {lasty},
    //     {lasty},
    //     {lasty}
    // ];
    return(
        
        <Card
            height={'150px'}
       >

       
<Text position={"absolute"} alignContent={'center'} flexWrap={'wrap'} fontSize={'30px'} color={"white"}><b> <a href="#">Интересные товары</a></b></Text>
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
export default InteresnieTovari;    