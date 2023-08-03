import { app } from "./firebase";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import Message from "./Components/Message";
import {
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";


const auth = getAuth(app);

const loginHandler = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const logOutHandler = ()=>{
  signOut(auth)
}

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
  const unSubscribe =   onAuthStateChanged(auth, (data) => {
      setUser(data);
    });

    return ()=>{
      unSubscribe()
    }
  });

  return (
    <Box bg={"red.50"}>
      {user ? (
        <Container h={"100vh"} bg={"white"}>
          <VStack h="full" padding={"4 0"}>
            {/* VStack is a flex and has fles direction colum by default */}
            <Button w="full" colorScheme={"pink"} onClick={logOutHandler}>
              Logout⬆️
            </Button>
            <VStack h="full" w={"full"} overflow={"auto"}>
              <Message text={"Sample Message"} user="other" />
              <Message text={"Sample Message"} user="me" />
            </VStack>

            <form style={{ width: "100%" }}>
              <HStack marginBottom={"4"}>
                <Input placeholder="Enter a Message..." />
                <Button colorScheme={"purple"} type="submit">
                  Send➡️
                </Button>
              </HStack>
            </form>
          </VStack>
        </Container>
      ) : (
        <VStack
          bg="white"
          color={"blackAlpha.500"}
          h="100vh"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button colorScheme={"yellow"} onClick={loginHandler}>
            Sign In With Google 🌐
          </Button>
        </VStack>
      )}
    </Box>
  );
}

export default App;
