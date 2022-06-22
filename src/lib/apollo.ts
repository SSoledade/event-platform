import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o44uz70h2b01xmce7g1scm/master',
    cache: new InMemoryCache()
});