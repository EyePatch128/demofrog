import { ApolloClient, InMemoryCache } from "@apollo/client";


const HOST = process.env.NEXT_PUBLIC_STRAPI_API_URL ?
                `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`
                :
                "http://localhost:1337/graphql";

const client = new ApolloClient({
    uri: HOST,
    cache: new InMemoryCache(),
});


export default client;