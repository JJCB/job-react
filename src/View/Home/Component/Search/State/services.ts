import { ClientJob } from 'Helpers/graphql';

export const LocationService = {
  get: (value) => {
    let client: Promise<Object>;
    let query = `
      query($input:LocationsInput!){
        locations(input:$input){
          id,
          type,
          name
          slug
        }  
      }`;
    client = ClientJob(
      {
        query: query,
        variables: {
          "input": {
            value,
          }
        }
      })
      .then(({ data }) => new Promise<Object>(resolve => resolve(data)))

    return client;
  }
}


