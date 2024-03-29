import '../App.css';
import { Text, Box, Flex, Grid, Input,Heading, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const ContactPage= () => {
    return (
        <Flex    
        bgColor={'#F1F7F6'}    
        display={'flex'}  
        width={'100%'}
        height={'400px'}
        >

        <Flex   






          
        width={'100%'} 
        background={''} 
        boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px;'} 
        borderRadius={'8px'} 
        padding={'10px 50px'} 
        height={'400px'}
        marginTop={'auto'}        
        >

                    <Text opacity={'0.7'} fontSize={'30px'} color={'teal'}>Please Contacts Us</Text>
                
                <Box>
               
                <Link>
                    <Text color={'teal'}>VISIT THE SHOP IN PERSON</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>DiveLife</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>StonePale Buildings</Text>
                </Link>
                <Link>
                <Text color={'teal'}>Victoria Lane</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Whitefield, M45 6BL</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Manchester</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>0161 796 0300</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>We have a large car park at the rear of the building, simply drive past the shop, and turn left through the green double gates. Please let us know if you want to come in person.</Text>
                </Link>
                </Box>
                
                <Box> 

                
                <Link>
                    <Text color={'teal'}>OPENING TIMES</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>The Warehouse is open :</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Monday:           -</Text>
                </Link>
                <Link>
                <Text color={'teal'}>Tuesday:           9.00 - 16.00</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Wednesday:      9.00 - 16.00</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Thursday:         9.00 - 17.30</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Friday:              -</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Saturday:          -</Text>
                </Link> 
                <Link>
                    <Text color={'teal'}>Sunday:            -</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Visits outside these hours possible by appointment only.</Text>
                </Link>

                </Box>
                <Box>
                <Link>
                    <Text color={'teal'}>EXPLORE US ONLINE</Text>
                </Link>
                <Link>
                    <Text color={'teal'}>Contact us via the phone on our warehouse open days or via the contact form.</Text>
                </Link>
                </Box>
            </Flex>
        </Flex>
        )
}

export default ContactPage;
