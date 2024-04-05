import '../App.css'; 
import { Flex } from '@chakra-ui/react'; 
import CardItem from '../components/carditem'; 
// import ScorpenaAlpha from '../components/ScorpenaAlpha'; 

import NavBar from '../components/NavBar'; 
const ShopPage = () =>{ 
  return ( 
    <>
    <NavBar/> 
    <Flex 
      width={'100%'} 
      flexWrap={'wrap'} 
    > 

    <Flex 
        justify={'center'} 
        align={'center'} 
        flexWrap={'wrap'} 
        gap={'35px'} 
        mt={'50px'} 
    > 
        <CardItem/> 
        <CardItem/> 
        <CardItem/> 
        <CardItem/> 
        <CardItem/> 
        <CardItem/> 
        <CardItem/> 
        <CardItem/> 
        <CardItem/> 
        {/* <ScorpenaAlpha/>  */}
    </Flex> 
    </Flex> 
    </>
  ); 
} 
export default ShopPage;
