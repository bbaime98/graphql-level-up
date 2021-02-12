import React , {useEffect}from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, gql, useQuery, useMutation } from '@apollo/client';
import { onError} from '@apollo/client/link/error';


const errorLink = onError(({graphqlErrors, networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path})=>{
      alert(`Graphql Error ${message}`)
    })
  }
})
const link = from([
  errorLink, 
  new HttpLink({uri: "http://localhost:3301/api"})
])
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const REGISTER_USER = gql `
  mutation register($name: String! $email: String! $password: String!) {
    register(input: {name: $name email: $email password: $password} ){
      id
      email
      name
    }
  }
`
const GetTodos = () =>{
  // const { data, loading, error } = useQuery(READ_TODOS);
  const [register, {error: mutationError, data}] = useMutation(REGISTER_USER)
// useEffect(()=>{
//   console.log('++++DATA__', data)
// },[data])
const handleRegister = () =>{
  register({
    variables:{
      name: "user20",
      email: "user20@gmail.com",
      password: "Password"
    }
  })
}
if(mutationError){
  console.log("++++MUTATION ERROR___",mutationError)
}
if(data){
  console.log("@@@++++DATA___",data)
}
return(
  <div>
    <h1>SIGN UP</h1>
    <button
    onClick={handleRegister}
  >Sign Up</button>
  </div>
)
}
const App = () =>{
  return(
  <ApolloProvider client={client}>
    <GetTodos />
  </ApolloProvider>
  )
}
export default App
