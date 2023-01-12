import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '서현',
    title: '프론트엔드개발자',
    mentor: {
      name: '엘리',
      title: '풀스텍개발자',
    },
  });
  return (
    <div className="mentor__container">
      <h1>
        {person.name} ({person.title})
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          let name = prompt(`what's your mentor's name?`);

          if (name === '') {
            const reName = prompt(`what's your mentor's name?`);
            name = reName;
          }
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
