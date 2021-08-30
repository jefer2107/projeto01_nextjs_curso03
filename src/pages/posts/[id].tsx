import { useRouter } from "next/router"

export default function Post(){
    const router = useRouter()

    return(
        <div>Post{router.query.id}</div>
    )
}