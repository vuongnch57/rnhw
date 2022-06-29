import {gql} from '@apollo/client';

export const GET_COUNTRY = gql`
  query country($code: ID!) {
    country(code: $code) {
      code
      name
      phone
      continent {
        code
        name
      }
      capital
      emoji
    }
  }
`;
