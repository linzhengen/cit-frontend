import gql from 'graphql-tag';

/* eslint-disable import/prefer-default-export */
export const createReportMutation = gql`
  mutation (
    $type: Int!
    $title: String
    $place: String!
    $dateTime: DateTime!
    $summary: Int!
    $detail: String
  ) {
    createReport(data: {
      type: $type
      title: $title
      place: $place
      dateTime: $dateTime
      summary: $summary
      detail: $detail
    }) {
      id
    }
  }
`;
