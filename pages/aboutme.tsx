import AppHeader from "@/components/AppHeader";
import Layout from "@/components/Layout";

const Aboutme: React.FC = () => {
  return (
    <Layout>
      <div className="text-whtie">
        <AppHeader
            title="aboutPage"
        />
        <h1 className="text-whtie">about me</h1>
      </div>
    </Layout>
  );
};

export default Aboutme;
