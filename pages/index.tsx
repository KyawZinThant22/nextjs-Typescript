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

export interface Property {
  id: string;
  title: string;
  author: string;
  body: string;
}

 interface Props {
  posts: Property[]
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <AppHeader title="Kyaw Zin Thant - A Frontend Developer" meta={meta} />
      <Layout>
        <Blog posts={posts} />
      </Layout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const Posts = await fetch("http://localhost:8000/posts");
  const posts = await Posts.json();

  return {
    props: { posts },
  };
}
