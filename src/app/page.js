'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [name, setName] = useState('Fenil');
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <h1>Hello this is {name}</h1> */}
        {/* <button onClick={() => setName('Hasti')}>click me</button> */}
        <h1>basic routing</h1>
        <Link href="/login">Go to Login</Link>
        <button onClick={() => router.push('/about')}>Go to About</button>
        <button onClick={() => router.push('/studentList')}>
          Go to Student List
        </button>
      </main>
    </div>
  );
}
