// import React from 're'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({posts}) {
  console.log("@@@_____POSTS:", posts)
  return (
   <div>
     Home
   </div>
  )
}



const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
}); 
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `
  });
  // console.log('++++', data)
  return {
    props: {
      posts: data.launchesPast
    }
  }
}
