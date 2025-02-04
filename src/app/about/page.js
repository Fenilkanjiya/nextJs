import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>about </h1>
      <Link href="/about/aboutStudent">Go to student page</Link>
      <Link href="/about/aboutTeacher">Go to Teacher page</Link>
    </div>
  );
};

export default About;
