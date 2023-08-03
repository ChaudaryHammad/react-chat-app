import {Box,Button,Container, HStack, Input, VStack} from '@chakra-ui/react'
import Message from './Components/Message';

function App() {


  return (
    <Box bg={'red.50'}>
      <Container h={'100vh'} bg={'white'}>
      <VStack h='full' padding={'4 0'} >
        {/* VStack is a flex and has fles direction colum by default */}
        <Button w='full' colorScheme={'pink'} >Logout⬆️</Button>
        <VStack h='full' w={'full'} overflow={'auto'}>   
        <Message text={'Sample Message'} user='other'/>
        <Message text={'Sample Message'} user='me'/>
        
           </VStack>

        <form style={{ width:'100%'}}>
          <HStack marginBottom={'4'}>
          <Input placeholder='Enter a Message...' />
          <Button colorScheme={'purple'} type='submit'>Send➡️</Button>
          </HStack>
        </form>

  


      </VStack>
      </Container>
    </Box>
  );
}

export default App;
