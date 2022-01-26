import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Next website </title>
        <meta name="description" content={"Next js technology"} />{" "}
        <meta property="og:description" content={"Next js technology"} />{" "}
      </Head>
      <Header />
      <div className="container">{children}</div>
      <footer> 2021 Simple Blog Next.js </footer>{" "}
    </>
  );
};

export default Layout;
