import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const PostComponent = () => {
    const { data, isError, error, isLoading, isFetching, refetch } = useQuery(
      "fetchPosts",
      fetchPosts
    );

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>{error}</div>;


    return (
      <div>
        {data.map((item) => (
          <>
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{ item.body}</p>
            </div>
          </>
        ))}
        <button  onClick={refetch} disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Refetch Data'}
        </button>
      </div>
    );
}

export default PostComponent;