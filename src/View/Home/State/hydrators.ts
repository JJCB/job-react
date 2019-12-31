import { JobModel } from "./models";

export const hydrator = (data) => (
  data.jobs.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    logoCompany: item.company.logoUrl,
    company: item.company.name,
    slugCompany: item.company.slug,
    tags: item.tags,
    city: item.cities.length ? item.cities[0].name : ''

  } as JobModel)));
