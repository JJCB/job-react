import { ClientJob } from 'Helpers/graphql';

export const AdvertisementService = {
  get: (companySlug: string, jobSlug: string) => {
    let client: Promise<Object>;
    let query = `
      query($input:JobInput!){
        job(input:$input){
          id
          title
          slug
          postedAt
          locationNames
          description
          company{
            name
            logoUrl
            websiteUrl
          }
          commitment {
            title
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
            companySlug,
            jobSlug
          }
        }
      })
      .then(({ data }) => new Promise<Object>(resolve => resolve(data)))

    return client;
  }
}


