export const hydrator = (data) => {

  return (
    {
      id: data.job.id,
      title: data.job.title,
      logoCompany: data.job.company.logoUrl,
      company: data.job.company.name,
      tags: data.job.tags,
      description: data.job.description,
      city: data.job.cities.length ? data.job.cities[0].name : '',
      commitment: data.job.commitment.title
    } );
} 