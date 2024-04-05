import { Flex } from "@chakra-ui/react";

const Loader = () => {
return(
    <Flex
        w='100%'
        h={'100vh'}
        justify={'center'}
        align={'center'}
        bg={'#F1F7F6'}>
        <div class="spinner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        
    </Flex>
        )
}

export default Loader;