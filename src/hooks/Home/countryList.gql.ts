import {gql} from '@apollo/client';

export const GET_COUNTRIES = gql`
  query getCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
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
