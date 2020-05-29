import Layout from "../components/MyLayout";
import Head from "next/head";
import Index from "./index"
const About = () => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>
    <Index/>
  </Layout>
);

export default About;
