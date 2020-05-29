import Layout from "../components/MyLayout";
import Head from "next/head";
import Index from "./index"
import { FAQCard } from "../components/FAQCard";


const About = () => (
  <Layout noContainer={<FAQCard />}>
    <Head>
      <title>About</title>
    </Head>
    <Index/>
  </Layout>
);

export default About;
