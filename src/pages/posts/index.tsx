import {  GetStaticProps } from "next"

interface Posts{
    id: string
    title: string
}

interface PostProps{
    posts: Posts[]
}

export default function Posts({posts}: PostProps){

    return(
        <div>
            <h1>Listagem de Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}> {post.title} </li>
                ))}
            </ul>
        </div>
        
    )
}

export const getStaticProps: GetStaticProps<PostProps> = async () => {
    const response = await fetch("http://localhost:3333/posts")
    const posts = await response.json()

    return{
        props:{
            posts
        }
    }
}