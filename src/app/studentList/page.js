import Link from 'next/link';

const StudentList = () => {
  const students = ['Fenil', 'hasti', 'Neha', 'Krish', 'sam', 'Grishma'];
  return (
    <>
      <h1>Student List</h1>
      <ul>
        {students.map((d) => {
          return (
            <li>
              <Link href={`studentList/${d}`}>{d}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StudentList;
