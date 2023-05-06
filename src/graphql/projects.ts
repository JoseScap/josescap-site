import { gql } from '@apollo/client'

export interface ProjectQueryType {
    Projects: ProjectType
}

export interface ProjectType {
    docs: {
        id: string
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
            id
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

export interface ProjectByIdQueryType {
    Project: ProjectByIdType
}

export interface ProjectByIdType {
    id: string
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
    mainImage: {
        url: string
    }
}

export const projectByIdQuery = gql`
    query GetProject($id: String!) {
        Project(id: $id) {
            id
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
            mainImage {
                url
            }
        }
    }
`