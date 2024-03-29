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
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false)
    }
    fetchData();
  }, [])
  
  
  
  
  return (
    <>
        {isLoading ?  (<Loader/>) : <NavBar/>}
        <Flex
        h={'100%'}
        justify={'center'}>
          


        <Box padding={0} width={'90%'} h={'1050px'} >
          <Flex mt={'50px'} justify={'center'} flexWrap={'wrap'} gap={'25px'} width={'100%'}>
            <DiversItem/>
            <WatchItem/>
          </Flex>
          <Flex mt={6} justify={'center'} flexWrap={'wrap'} gap={'25px'} width={'100%'}>
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
