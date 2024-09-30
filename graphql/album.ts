// GraphQL Query for getting albums with paginated photos
export const GET_ALBUMS = gql`
  query {
    albums {
      data {
        id
        title
        photos(options: { paginate: { page: 1, limit: 1 } }) {
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

export function useGetAlbums() {
	const { result, loading, error } = useQuery(GET_ALBUMS);
	return { result, loading, error };
}

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

export function useGetAlbum(id: string) {
	if (!id) {
		throw new Error("ID is required for fetching the album.");
	}

	const { result, loading, error } = useQuery(GET_ALBUM, { id });

	return { result, loading, error };
}
