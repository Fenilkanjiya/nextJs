'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <>
      <h1>Layout page</h1>
      {pathName !== '/about/aboutStudent' ? (
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/aboutTeacher">Teacher</Link>
          </li>
          <li>
            <Link href="/about/aboutStudent">Student</Link>
          </li>
        </ul>
      ) : (
        <Link href="/">go to Home</Link>
      )}
      {children}
    </>
  );
}
