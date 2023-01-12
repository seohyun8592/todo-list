import React, { useReducer } from 'react';
import personReducer from './initiallJs/person-reducer';
import { useImmer } from 'use-immer';

export default function AppMentors() {
  // const [person, dispatch] = useReducer(personReducer, initialPerson);

  // const handleChange = () => {
  //   const prevName = prompt(`누구의 이름을 바꾸시겠습니까?`);
  //   const current = prompt(`이름을 입력해주세요!`);

  //   dispatch({ type: 'update', prevName, current });
  // };

  // const handleAdd = () => {
  //   const name = prompt(`이름을 입력해주세요`);
  //   const title = prompt(`직함을 입력해주세요`);

  //   dispatch({ type: 'added', name, title });
  // };

  // const handleDelete = () => {
  //   const name = prompt(`이름을 입력해주세요`);

  //   dispatch({ type: 'delete', name });
  // };

  const [person, updatePerson] = useImmer(initialPerson);

  const handleChange = () => {
    const prevName = prompt(`누구의 이름을 바꾸시겠습니까?`);
    const current = prompt(`이름을 입력해주세요!`);

    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prevName);

      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`이름을 입력해주세요`);
    const title = prompt(`직함을 입력해주세요`);

    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };

  const handleDelete = () => {
    const name = prompt(`이름을 입력해주세요`);

    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
  };

  return (
    <div className="mentor__container">
      <h1>
        {person.name} ({person.title})
      </h1>
      <p>{person.name}의 멘토는 :</p>

      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChange}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: '서현',
  title: '프론트엔드개발자',
  mentors: [
    {
      name: '엘리',
      title: '풀스텍개발자',
    },
    {
      name: '노마드',
      title: '풀스텍개발자',
    },
  ],
};
