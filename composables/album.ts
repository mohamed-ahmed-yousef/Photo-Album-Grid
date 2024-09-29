export const GET_ALBUMS = gql`
  query getAlbums($page: Int, $limit: Int) {
    albums(options: { paginate: { page: $page, limit: $limit } }) {
      data {
        id
        title
        photos {
          data {
            id
            thumbnailUrl
            title
            url
          }
        }
      }
    }
  }
`;

export const GET_ALBUM = gql`
  query getAlbum($id: ID!) {
    album(id: $id) {
      id
      title
      photos {
        data {
          id
          title
          thumbnailUrl
          url
        }
      }
    }
  }
`;
