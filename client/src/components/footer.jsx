import '../App.css';
import { Text, Box, Flex, Grid, Input,Heading, Button} from '@chakra-ui/react';
import { AuthRoute, HomeRoute, ShopRoute } from '../utils/const';
import {Link} from 'react-router-dom'
const Footer= () => {
    return (
        <Flex        
        display={'flex'}  
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        height={'20vh'}
>

<Flex   
display={'flex'}          
align={'center'} 
justify-content={'space-evently'}
width={'100%'} 
background={'#0483'} 
boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px;'} 
borderRadius={'8px'} 
padding={'10px 50px'} 
position = {'relative'} 
height={'20vh'}
        
>



                <Link>
                    <Text color={'teal'}>Foreal© 2024</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Privacy & Legal</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>News</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Contacts</Text>
                </Link>
            </Flex>
        </Flex>
        )
}

export default Footer;