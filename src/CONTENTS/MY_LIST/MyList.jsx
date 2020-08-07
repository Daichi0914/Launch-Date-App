import React, { useState, useEffect, useContext } from 'react';
import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react';
import TrendCard from '../TOP/TOP_CARD/Card';
import rakutenApi from '../../API/rakutenApi';
import { AuthContext } from '../../AUTH/AuthService';

import firebase from '../../CONFIG/firebase';

// import classes from './list.module.css';

const MyList = () => {
  const [comics, setComics] = useState([]);
  const [comicDatas, setComicDatas] = useState(null);

  const user = useContext(AuthContext);

  useEffect(() => {
    const myListItem = async () => {
      try {
        const fetchItems = await rakutenApi.comics;
        setComics(fetchItems.data.Items);
        const querySnapshot = await firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .collection('comics')
          .get();
        console.log(querySnapshot);
        const fetchDatas = querySnapshot.docs.map(doc =>
          rakutenApi.getComicByIsbn(doc.data().isbn)
        );
        console.log(fetchDatas);
        const listItem = fetchDatas.map(fetchData =>
          Promise.all(comics).then(() => {
            comics.find(comic => fetchData === comic.isbn)
          })
        );
        console.log(listItem);
      } catch (error) {
        console.log(error);
      }
    };
    myListItem();
  }, []);

  console.log(comics);

  // const trendItems = items ? (
  //   currentItems.map((item, index) => <TrendCard />)
  // ) : (
  //   <Segment className={classes.loading}>
  //     <Dimmer active inverted>
  //       <Loader inverted content='Loading' />
  //     </Dimmer>
  //   </Segment>
  // );

  return (
    <></>
    // <div className={classes.list}>
    //   <Grid columns={4} style={{ width: '100%' }}>
    //     <Grid.Row>{trendItems}</Grid.Row>
    //   </Grid>
    // </div>
  );
};

export default MyList;
