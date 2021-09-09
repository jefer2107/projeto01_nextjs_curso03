import { GetServerSideProps } from "next"

interface Posts{
    id: string
    title: string
}

interface HomeProps{
    posts: Posts[]
}

export default function Home({posts}: HomeProps){
    // const [posts, setPosts] = useState<Posts[]>([])

    // useEffect(()=>{
    //     fetch("http://localhost:3333/posts")
    //         .then(response => response.json())
    //         .then(data => setPosts(data))
    // },[])

    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}> {post.title} </li>
                ))}
            </ul>
        </div>
        
    )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    const response = await fetch("http://localhost:3333/posts")
    const posts = await response.json()

    return{
        props:{
            posts
        }
    }
}
