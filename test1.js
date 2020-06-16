const [email, setEmail] = useState(null);
const [chats, setChats] = useState([]);

const signOut = () => {
    firebase.auth().signOut();
  };

useEffect(() => {
    const abortController = new AbortController();
    firebase.auth().onAuthStateChanged(async _user => {
      if (!_user) {
        history.push('/login');
      } else {
        await firebase
          .firestore()
          .collection('chats')
          .where('users', 'array-contains', _user.email)
          .onSnapshot(async res => {
            const chatsMap = res.docs.map(_doc => _doc.data());
            console.log('res:', res.docs);
            await setEmail(_user.email);
            await setChats(chatsMap);
          });
      }
    });

    return () => {
      abortController.abort();
      console.log('aborting...');
    };
  }, [history, setEmail, setChats]);