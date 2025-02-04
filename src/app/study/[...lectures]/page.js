'use client';

import { useParams } from 'next/navigation';

const Lectures = () => {
  const params = useParams();
  console.log(params.lectures);
  return (
    <>
      <p>Lectures page </p>
      <h1>Day of Collage is {params.lectures[0]}</h1>
      <h3>Lecture No.{params.lectures[1]}</h3>
    </>
  );
};

export default Lectures;
