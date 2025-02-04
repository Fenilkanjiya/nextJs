'use client';

const Student = ({ params }) => {
  return (
    <>
      <h1>Student Details</h1>
      <h4>Name: Hello {params.student}</h4>
    </>
  );
};
export default Student;
