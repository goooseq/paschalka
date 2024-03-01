import '../App.css';
import { Text, Box, Flex, Grid, Input,Heading, Button} from '@chakra-ui/react';
import { AuthRoute, HomeRoute, ShopRoute } from '../utils/const';
import {Link} from 'react-router-dom'
const NavBarSh = () => {
    return (
        <Flex          
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px;'}
        borderRadius={'8px'}
        padding={'10px 50px'}
    >
        <Link
            to={HomeRoute}
        >
            <Heading>Forial</Heading>
        </Link>
            <Flex>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"> 
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"/> 
            </svg> 
            </Flex>
        </Flex>
        )
}

export default NavBarSh;