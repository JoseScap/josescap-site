import { gql } from '@apollo/client'

export interface ProjectQueryType {
    Projects: ProjectType
}

export interface ProjectType {
    docs: {
        name: string
        description: string
        technologies: {
            technology: {
                name: string
            }
        }[]
        repositories: {
            name: string
            url: string
        }[]
        demos: {
            name: string
            url: string
        }[]
        public: boolean
        mainImage: {
            url: string
        }
        images: {
            image: {
                url: string
            }
        }[]
    }[]
}

export const projectQuery = gql`
query {
    Projects {
        docs {
            name
            description
            technologies {
                technology {
                    name
                }
            }
            repositories {
                name
                url
            }
            demos {
                name
                url
            }
            public
            mainImage {
                url
            }
            images {
                image {
                    url
                }
            }
        }
    }
  }
`