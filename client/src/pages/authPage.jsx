
import { Flex,Text } from '@chakra-ui/react';
import NavBarSh from '../components/NavBarSh';
const AuthPage = () => {
    return (
        <Flex
            width={'100%'}
            flexWrap={'wrap'}
            justify={'center'}
        >
        <NavBarSh />
            <Flex
                width={'90%'}
                justify={'center'}
                alignItems={'center'}
                height={'70vh'}
            >
                <Flex
                boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px'}
                width={'20em'}
                height={'35vh'}
                >
<Text>gsdmg</Text>
             </Flex>
             </Flex>       


        </Flex>
        
  );
}

export default AuthPage;
