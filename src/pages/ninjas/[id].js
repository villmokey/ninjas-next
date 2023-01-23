export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      ninja: data,
    },
  };
};

const Details = ({ ninja }) => {
  return (
    <div className="container mx-auto p-10 text-center">
      <h2 className="text-lg font-bold">{ninja.name}</h2>
      <p>{ninja.email}</p>
      <p>{ninja.username}</p>
      <p>{ninja.address.street + ", " + ninja.address.suite + ", " + ninja.address.city}</p>
    </div>
  );
};

export default Details;
