import {gql} from '@apollo/client';

export const GET_CONTINENT = gql`
  query continent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;
