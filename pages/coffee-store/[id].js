import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () =>{
    const router = useRouter();
    console.log(router.query.id);
    return(
        <>
            <Link href='/' scroll={false}><a>Back to home</a></Link>
        </>
    )
}

export default CoffeeStore;