import AppHeader from "@/components/AppHeader"
import Layout from "@/components/Layout"
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { Property } from "pages"

interface Props {
    data : {
        id : string,
        title :string,
        author:string,
        body : string
    }
}

const detailsPage: React.FC = ({post}) => {
    console.log(post)
    return (
        <>
            <AppHeader
            title="about"
            />
            <Layout>
                <div className="container mx-auto">hello</div>
            </Layout>
        </>
    )
}

interface IParams extends ParsedUrlQuery {
   id: string
}


export const getStaticProps : GetStaticProps = async ({params}) => {
    const id:string | string[] | undefined = params?.id
    
    const data = await fetch(`http://localhost:8000/posts/${id}`)
    const post = await data.json()

    return {
        props:{
            post
        }
    }
}



export const getStaticPaths : GetStaticPaths =  async () => {
    const posts = await fetch("http://localhost:8000/posts/") 
    const data = await posts.json();
   
   return{
       paths : data.map((post)=>{
           return {
               params :{
                   id : post.id
               }
           }
       }),
       fallback: false
   }
}

export default detailsPage