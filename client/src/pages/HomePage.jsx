import { Flex, Box } from '@chakra-ui/react';
import '../App.css';
import CardItem from '../components/carditem';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import WatchItem from '../components/watchItem';
import DiversItem from '../components/divers';

const HomePage = () => {
  return (
    <>
        <NavBar />
        <Flex
        h={'100%'}
        justify={'center'}>
          


        <Box width={'80%'} h={'500px'} bgColor={'#F1F7F6'} >
          <Box display={'flex'}><WatchItem/>
          <WatchItem/>
          </Box>

        </Box>

          
        </Flex>
        <Footer/>
    </>


  );
}

export default HomePage;
