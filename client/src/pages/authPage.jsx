
import { Flex,Text, Input, InputGroup, Stack, InputLeftElement, Button, WrapItem } from '@chakra-ui/react';
import NavBarSh from '../components/NavBarSh';
import { AuthRoute, RegisterRoute } from '../utils/const';
import { Link } from 'react-router-dom';

const AuthPage = () => {
    return (
        <Flex 
        width={'100%'} 
        flexWrap={'wrap'} 
        justify={'center'} 
    > 
        <NavBarSh /> 
        <Flex // всей страницы  
            width={'90%'} 
            justify={'center'} 
            alignItems={'center'} 
            height={'80vh'} 
        > 
            <Flex 
            boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px'} 
            width={'20em'} 
            height={'55vh'} 
            flexWrap={'wrap'} 
            justify={'center'} 
            display={'flex'}
           
            > 
                <Text mt={'7%'} fontSize={'35px'} fontWeight={'bold'} textAlign={'center'} w={'100%'} color={'Black'}> Sign in</Text> 
                <Stack spacing={4}> 
                <InputGroup> 
                    <InputLeftElement pointerEvents='none' width={'25px'} top={'0px'} left={'10px'}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 40 40">
    <path fill="currentColor" d="M20 21.456c-5.127 0-9.298-4.171-9.298-9.298S14.873 2.861 20 2.861s9.298 4.171 9.298 9.298s-4.171 9.297-9.298 9.297zm0-17.712c-4.639 0-8.414 3.775-8.414 8.414s3.775 8.414 8.414 8.414s8.414-3.775 8.414-8.414S24.639 3.744 20 3.744zm16.828 33.395H3.172a.442.442 0 0 1-.442-.442V30.99c.403-7.249 6.934-7.686 7-7.69l20.513-.001c.09.004 6.623.442 7.025 7.666l.001 5.732a.44.44 0 0 1-.441.442zm-33.214-.883h32.772V30.99c-.358-6.418-5.929-6.795-6.166-6.808l-20.465.001c-.212.013-5.783.41-6.141 6.831v5.242z"/>
</svg>
                    </InputLeftElement> 
                     
                    <Input type='tel' placeholder='Login'/> 
                     
                </InputGroup> 

                <InputGroup> 
                    <InputLeftElement 
                    pointerEvents='none' 
                    color='gray.300' 
                    fontSize='1.2em' 
                    width={'25px'}  
                    top={'0px'}  
                    left={'10px'} 
                    > 
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
                    <path fill="currentColor" fill-rule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"/>
                        </svg>
                    </InputLeftElement> 
                    <Input placeholder='Email'/> 
                </InputGroup> 
                
                <InputGroup>
                <InputLeftElement 
                    pointerEvents='none' 
                    color='gray.300' 
                    fontSize='1.2em' 
                    width={'25px'}  
                    top={'0px'}  
                    left={'10px'} 
                    > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"> 
                        <path fill="currentColor" d="M4 5v-.8C4 1.88 5.79 0 8 0s4 1.88 4 4.2V5h1.143c.473 0 .857.448.857 1v9c0 .552-.384 1-.857 1H2.857C2.384 16 2 15.552 2 15V6c0-.552.384-1 .857-1zM3 15h10V6H3zm5.998-3.706L9.5 12.5h-3l.502-1.206A1.644 1.644 0 0 1 6.5 10.1c0-.883.672-1.6 1.5-1.6s1.5.717 1.5 1.6c0 .475-.194.901-.502 1.194M11 4.36C11 2.504 9.657 1 8 1S5 2.504 5 4.36V5h6z"/> 
                    </svg> 
                    </InputLeftElement> 
                    <Input placeholder='Password'/> 
                </InputGroup> 
                <InputGroup>
                
                </InputGroup>
                <WrapItem> 
                    <Button colorScheme='teal' w={'250px'} textAlign={'center'}>Register</Button> 
                </WrapItem>  
                <Flex  mt={'7%'}  textAlign={'center'} w={'100%'} color={'Black'}>
                    <Text mr={'5px'}> Do you have an account? </Text> 
                    <Text color={'teal'}><Link to ={RegisterRoute}>Register</Link> </Text>
                </Flex>

          
                </Stack> 


            </Flex> 
    </Flex>        


    </Flex> 
     
); 
}

export default AuthPage;
