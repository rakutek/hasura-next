import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks'

import firebase from '../firebaseConfig'
import FetchUsers from '../FetchUsers'
import React, { useState } from 'react';

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://hasura-demo-raku.hasura.app/v1/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }),
    cache: new InMemoryCache(),
  });
};



function Home() {
  const [idToken, setIdToken] = useState('')



  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  const logout = () => {
    firebase.auth().signOut()
  }

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      user.getIdToken().then(token => {
        setIdToken(token)
        console.log(token)
      })
    }
  })

  const client = createApolloClient(idToken);


  //
  // const FetchUsers = () => {
  //   const query = gql`
  //     query MyQuery {
  //       users {
  //         email
  //         id
  //       }
  //     }
  //   `
  //   client
  //       .query({
  //         query
  //       })
  //       .then(result => console.log(result.data.users[0]));
  //
  //
  //   // const { loading, error, data } = useQuery(GET_MY_TODOS);
  //   // console.log(data)
  //   // // ローディング中の表示
  //   // if (loading) return <p>loading</p>
  //   // // エラー時の表示
  //   // if (error) return <p>{error.toString()}</p>
  //   // //　成功してデータが帰ってきた時の表示
  //   // return (
  //   //     <>
  //   //       {data}
  //   //     </>
  //   // );
  // }


  return (
      <ApolloProvider client={client}>
        <div>
          <button onClick={login}>
            login
          </button>
          <button onClick={logout}>
            logout
          </button>
          <button onClick={FetchUsers} disabled={!idToken.length}>
            fetch
          </button>

        </div>
      </ApolloProvider>
  );
}



export default Home;
