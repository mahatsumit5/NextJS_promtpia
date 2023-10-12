import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-powered promport</span>
      </h1>
      <p className="desc text-center">
        {" "}
        Pomptopia is an open source AI promptiog tool for modern world to
        dicover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
