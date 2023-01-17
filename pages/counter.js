import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/router"
import styles from '../styles/counter.module.css'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username');
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return(
        <>
            <main className={styles.main}>
            <div className={styles.counter}>
                <div className={styles.header}>Counter</div>
                <div>Welcome {isUser} </div>
                <div>{number}</div>
                <button className={styles.buttons} onClick={() => setNumber(number + 1)}>Increment</button>
                <button className={styles.buttons} onClick={() => setNumber(number - 1)}>Decrement</button>
            </div>
            </main>
        </>
    )
}