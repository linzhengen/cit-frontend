import gql from 'graphql-tag';

/* eslint-disable import/prefer-default-export */
export const ReportListQuery = gql`
  {
    reports {
      ...report
    }
  }
  fragment report on Report {
    id
    type
    name
    place
    dateTime
    summary
    detail
  }
`;
