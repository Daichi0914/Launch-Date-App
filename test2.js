const [email, setEmail] = useState(null);
const [chats, setChats] = useState([]);

const signOut = () => {
    firebase.auth().signOut();
  };

useEffect(() => {
    let unsubscribeSnapshot;
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(_user => {
        // you're not dealing with promises but streams so async/await is not needed here
      if (!_user) {
        history.push('/login');
      } else {
        unsubscribeSnapshot = firebase
          .firestore()
          .collection('chats')
          .where('users', 'array-contains', _user.email)
          .onSnapshot(res => {
            const chatsMap = res.docs.map(_doc => _doc.data());
            console.log('res:', res.docs);
            setEmail(_user.email);
            setChats(chatsMap);
          });
      }
    });

    return () => {
      unsubscribeAuth();
      unsubscribeSnapshot && unsubscribeSnapshot();
    };
  }, [history]); // setters are stable between renders so you don't have to put them here