import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div className="container mx-auto p-10">
      <h2 className="font-bold text-xl">All Ninjas</h2>
      {ninjas &&
        ninjas.map((item, index) => {
          return (
            <Link href={`/ninjas/${item.id}`} key={index}>
              <div className="w-[full] bg-gray-100 my-3 p-5 hover:bg-gray-200 cursor-pointer shadow-sm rounded-md">
                <h5 className="font-semibold">{item.name}</h5>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Ninjas;
