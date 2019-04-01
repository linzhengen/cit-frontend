import gql from 'graphql-tag';

/* eslint-disable import/prefer-default-export */
export const reportListQuery = gql`
  query (
    $from: DateTime
    $to: DateTime
  ) {
    reports(
      where: {
        dateTime_lte: $from
        dateTime_gte: $to
      }) {
      ...report
    }
  }
  fragment report on Report {
    id
    type
    title
    place
    dateTime
    summary
    detail
  }
`;
