import { ClientJob } from 'Helpers/graphql';

export const JobService = {
  get: (type: string, slug: string) => {
    let client: Promise<Object>;
    let query = `
      query($input:JobsInput){
        jobs(input:$input){
          id
          title
          slug
          postedAt
          locationNames
          company{
            slug
            name
            logoUrl
            websiteUrl
          }
          cities{
            name
            type
          }
          tags{
            name
          }
        }
      }`;
    client = ClientJob(
      {
        query: query,
        variables: {
          "input": {
            type,
            slug
          }
        }
      })
      .then(({ data }) => new Promise<Object>(resolve => resolve(data)))

    return client;
  }
}


