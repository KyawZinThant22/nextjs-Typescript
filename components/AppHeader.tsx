import Head from "next/head";

export interface Meta {
  description?: string;
  author?: string;
  siteName?: string;
  type?: string;
}

type Props = {
  title: string;
  meta?: Meta;
};

const AppHead: React.FC<Props> = ({ title, meta }) => {
  let author = "Kyaw Zin Thant";
  let description =
    "Articles about programming, coding, technologies, software engineering, my personal projects and my experiences.";
  let siteName = "Kyaw Zin Thant's Blog";
  let type = "article";

  if (meta) {
    author = meta.author ? meta.author : author;
    description = meta.description ? meta.description : description;
    siteName = meta.siteName ? meta.siteName : siteName;
    type = meta.type ? meta.type : type;
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
    </Head>
  );
};

export default AppHead;
