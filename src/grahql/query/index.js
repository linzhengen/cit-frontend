import gql from 'graphql-tag';

/* eslint-disable import/prefer-default-export */
export const reportListQuery = gql`
  query (
    $from: DateTime
    $to: DateTime
  ) {
    reports(
      orderBy: dateTime_ASC,
      where: {
        dateTime_gte: $from
        dateTime_lte: $to
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
