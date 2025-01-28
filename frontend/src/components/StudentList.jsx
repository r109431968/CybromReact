import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:5000/api/students');
    setStudents(response.data);
  };

  const addStudent = async () => {
    await axios.post('http://localhost:5000/api/students', { name, age, grade });
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.age} - {student.grade}
            <button onClick={() => deleteStudent(student._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Add Student</h3>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Grade" onChange={(e) => setGrade(e.target.value)} />
      <button onClick={addStudent}>Add</button>
    </div>
  );
};

export default StudentList;
