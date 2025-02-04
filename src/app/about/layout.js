import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <h1>Layout page</h1>
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
      {children}
    </>
  );
}
