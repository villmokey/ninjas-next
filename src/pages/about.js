import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Home | Ninjas</title>
      </Head>
      <div className="container mx-auto py-6 px-10 ">
        <h2 className="font-semibold text-3xl mb-5">About</h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore error, mollitia voluptatibus dolore, iusto, consequuntur ad accusantium commodi pariatur voluptatum asperiores quam aliquid? Praesentium fugiat suscipit ipsa
          iusto, nam in, rerum distinctio eius, incidunt tempore odio illum molestiae ducimus! At aut ratione corrupti odit incidunt. Esse, quidem? Quidem, quam fugit?
        </p>
      </div>
    </>
  );
};

export default About;
