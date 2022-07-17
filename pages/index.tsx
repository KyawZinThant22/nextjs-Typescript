import type { NextPage } from "next";
import Head from "next/head";
import AppHeader from "@/components/AppHeader";
import Layout from "@/components/Layout";
import Blog from "@/components/BLog";

export const meta = {
  description:
    "Kyaw Zin Thant is a Frontend developer based in Mandalay, Myanmar. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Kyaw Zin Thant",
  type: "website",
  siteName: "KyawZinThant",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHeader title="Kyaw Zin Thant - A Frontend Developer" meta={meta} />
        <Layout>
          <Blog/>
        </Layout>
    </>
  );
};

export default Home;
