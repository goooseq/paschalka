import { Flex, Box } from '@chakra-ui/react';
import '../App.css';
import CardItem from '../components/carditem';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import WatchItem from '../components/watchItem';
import DiversItem from '../components/divers';
import TrubkiItem from '../components/trubki';
import ReguliatoriItem from '../components/reguliatori';
import KurtkaItem from '../components/kurtka';


const HomePage = () => {
  return (
    <>
        <NavBar />
        <Flex
        h={'100%'}
        justify={'center'}>
          


        <Box padding={0} width={'90%'} h={'900px'} >
          <Flex mt={'50px'} justify={'center'} flexWrap={'wrap'} gap={'25px'}>
            <DiversItem/>
            <WatchItem/>
          </Flex>
          <Flex mt={6} justify={'center'} flexWrap={'wrap'} gap={'25px'}>
          <TrubkiItem/>
            <ReguliatoriItem/>
            <KurtkaItem/>
          </Flex>

        </Box>

          
        </Flex>
        <Footer/>
    </>


  );
}

export default HomePage;
