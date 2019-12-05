import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query(
    $page: Int
    $pageSize: Int
    $orderBy: String
    $orderSort: String
    $q: String
    $treeType: Boolean
    $listType: Boolean
  ) {
    categories(
      page: $page
      pageSize: $pageSize
      orderBy: $orderBy
      orderSort: $orderSort
      q: $q
      treeType: $treeType
      listType: $listType
    ) {
      total
      treeByStringify
      items {
        id
        name
        slug
        parent_id
        description
        created_at
        updated_at
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query($id: Int!) {
    category(id: $id) {
      id
      name
      slug
      parent_id
      description
      created_at
      updated_at
    }
  }
`;
