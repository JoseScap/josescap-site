import { gql } from '@apollo/client'

export interface ResumeQueryType {
    Resumes: ResumeType
}

export interface ResumeType {
    docs: {
        url: string
    }[]
}

export const resumeQuery = gql`
    query {
        Resumes {
            docs {
                url
            }
        }
    }
`