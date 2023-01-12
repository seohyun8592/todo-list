import { useState } from 'react';

export default function Textlist(props) {
  const [data, setData] = useState(1);

  const onClickHandler = (e) => {
    const ul = e.target.parentElement.nextElementSibling;
    const li = document.createElement('li');

    ul.appendChild(li);

    setData((prev) => prev + 1);
    createHtmlHandler(li);
  };

  const createHtmlHandler = (li) => {
    const liChild = `
      <span>${data}.</span>
      <input type='text' class='goal__text'></input>
    `;

    li.innerHTML = liChild;
  };

  return (
    <section className="content">
      <h3>{props.title}</h3>
      <div className="btn__area">
        <button type="button" className="btn__add" onClick={onClickHandler}>
          추가하기
        </button>
      </div>
      <ul className="goal__list"></ul>
    </section>
  );
}
