import { Flex, Text, Input, InputGroup, Stack, InputLeftElement, Button, WrapItem } from '@chakra-ui/react';
import NavBarSh from '../components/NavBarSh';
import { RegisterRoute } from '../utils/const';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../index';

const AuthPage = () => { 
    const { store } = useContext(Context); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handlelogin = async(email,password)=>{ 
        try{ 
            await store.login(email,password); 
            if(store.isAuth){ 
                alert('Вы русский') 
            } else{ 
                store.setError('Incorrect loginor pass. Try again!') 
                alert("Error") 
            } 
        }catch{

        }
    }
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
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                width={'25px'}
                                top={'0px'}
                                left={'10px'}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" color='gray' width="200" height="200" viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z" />
                                </svg>
                            </InputLeftElement>
                            <Input placeholder='Email' onChange={e => setEmail(e.target.value)} value={email} />
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
                                <svg xmlns="http://www.w3.org/2000/svg" color='gray' width="200" height="200" viewBox="0 0 16 16">
                                    <path fill="currentColor" d="M4 5v-.8C4 1.88 5.79 0 8 0s4 1.88 4 4.2V5h1.143c.473 0 .857.448.857 1v9c0 .552-.384 1-.857 1H2.857C2.384 16 2 15.552 2 15V6c0-.552.384-1 .857-1zM3 15h10V6H3zm5.998-3.706L9.5 12.5h-3l.502-1.206A1.644 1.644 0 0 1 6.5 10.1c0-.883.672-1.6 1.5-1.6s1.5.717 1.5 1.6c0 .475-.194.901-.502 1.194M11 4.36C11 2.504 9.657 1 8 1S5 2.504 5 4.36V5h6z" />
                                </svg>
                            </InputLeftElement>
                            <Input placeholder='Password'
                            onChange={e => setPassword(e.target.value)} value={password}
                            
                            
                            />
                        </InputGroup>
                        <InputGroup>

                        </InputGroup>
                        <WrapItem>
                            <Button onClick={() => handlelogin(email, password)} colorScheme='teal' w={'250px'} textAlign={'center'}>Login</Button>
                        </WrapItem>
                        <Flex mt={'7%'} textAlign={'center'} w={'100%'} color={'Black'}>
                            <Text mr={'5px'}> Do you have an account? </Text>
                            <Text color={'teal'}><Link to={RegisterRoute}>Register</Link> </Text>
                        </Flex>


                    </Stack>


                </Flex>
            </Flex>


        </Flex>

    );
}

export default AuthPage;