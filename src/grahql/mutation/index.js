import gql from 'graphql-tag';

/* eslint-disable import/prefer-default-export */
export const createReportMutation = gql`
  mutation (
    $type: Int!
    $name: String
    $place: String!
    $dateTime: DateTime!
    $summary: Int!
    $detail: String
  ) {
    createReport(data: {
      type: $type
      name: $name
      place: $place
      dateTime: $dateTime
      summary: $summary
      detail: $detail
    }) {
      id
    }
  }
`;
