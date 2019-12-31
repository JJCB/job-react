export interface JobModel {
    id: string;
    title: string;
    slug
    company: string;
    logoCompany: string;
    slugCompany: string;
    tags: Array<Object>;
    city: string;
}