import { app } from "./firebase";
import { useEffect, useRef, useState } from "react";
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

import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,

} from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

const loginHandler = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const logOutHandler = () => {
  signOut(auth);
};

function App() {

  const [user, setUser] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const divForScroll = useRef(null)
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      await addDoc(collection(db, "Message"), {
        text: message,
        uid: user.uid,
        uri: user.photoURL,
        createdAt: serverTimestamp(),
      });
     
      divForScroll.current.scrollIntoView({behavior:'smooth'})
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
  const q = query(collection(db,'Message'), orderBy('createdAt','asc'))

    const unSubscribe = onAuthStateChanged(auth, (data) => {
      setUser(data);
    });

   const unsubscribeForMessages =  onSnapshot(q, (snap)=>{
      setMessages(
        snap.docs.map((item) => {
        const id = item.id;
        return {
         id, ...item.data()
        }
        })
       );
    })

    return () => {
      unSubscribe();
      unsubscribeForMessages()
    };
  },[]);

  return (
    <Box bg={"red.50"}>
      {user ? (
        <Container h={"100vh"} bg={"white"}>
          <VStack h="full" padding={"4 0"}>
         
            {/* VStack is a flex and has fles direction colum by default */}
            <Button w="full" colorScheme={"pink"} onClick={logOutHandler}>
              Logout⬆️
            </Button>
            <VStack h="full" w={"full"} overflow={"auto"} css={{"&::-webkit-scrollbar":{
              display:'none'
            }}}>
              {messages.map(item => (
                <Message
                  key={item.id}
                  user={item.uid === user.uid ? "me" : "other"}
                  text={item.text}
                  uri={item.uri}
                />
              ))}
              <div ref={divForScroll}> </div>
            </VStack>
         
            <form onSubmit={submitHandler} style={{ width: "100%" }}>
              <HStack marginBottom={"4"}>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter a Message..."
                />
                <Button colorScheme={"purple"} type="submit">
                  Send➡️
                </Button>
              </HStack>
            </form>
            <h1 css={{color:'purple'}}>Created by: Hammad</h1>
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
          <h1>Created with ❤️</h1>
        </VStack>
      )}
    </Box>
  );
}

export default App;
