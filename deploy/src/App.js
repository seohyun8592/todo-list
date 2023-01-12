import React, { useState } from 'react';
import './App.css';
import Header from './component/header/Header';
import Textlist from './component/Textlist';
import Profile from './component/sh_review/Profile';
import Avatar from './component/sh_review/Avatar';
import Counter from './component/sh_review/Counter';
import Products from './component/sh_review/Products';
import AppMentor from './component/sh_review/AppMentor';
import AppMentors from './component/sh_review/AppMentors';
import AppForm from './component/sh_review/AppForm';
// import AppXY from './component/sh_review/AppXY';

export default function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  const [showProducs, setShowProducts] = useState(true);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const pointerMoveHandler = (e) => {
    setPosition({ x: e.clientX, y: e.pageY });
  };

  return (
    <div className="App" onPointerMove={pointerMoveHandler}>
      <Header>
        <h1>React 18+ Course Study Plan (Template)</h1>
      </Header>
      <div className="contents__wrap">
        <div className="contents__visual">
          <img src="/visual.jpg" />
        </div>
        <div className="contents__main">
          <div className="floating__img"></div>
          <h2>React 18+ Course Study Plan (Template)</h2>
          <div className="contents__area">
            <article className="contents__list">
              <Textlist title="🚀 목표" />
              <Textlist title="🚀 리소스" />
            </article>
          </div>

          <div className="contents__area">
            <div className="tab__area">
              <div className="tab__btn">
                <button type="button" className="btn on">
                  component / props
                </button>
                <button type="button" className="btn">
                  useState
                </button>
                <button type="button" className="btn">
                  useEffect Life Cycle
                </button>
                <button type="button" className="btn">
                  mouse pointer
                </button>
              </div>
              <div className="tab__contents">
                <div className="content">
                  <ul style={{ marginBottom: '20px' }}>
                    <li>- 컴포넌트 안에 또 다른 컴포넌트 만들기 </li>
                    <li>- 컴포넌트 재사용</li>
                    <li>- props 전달하기</li>
                  </ul>
                  <Profile
                    name="김서현"
                    img="https://images.unsplash.com/photo-1673117921063-5dde75f25a81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
                    title="프론트엔드"
                    tag={true}
                  />
                  <Profile
                    name="립바미"
                    img="https://plus.unsplash.com/premium_photo-1670588775994-f1a29fda9a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                    title="퍼블리셔"
                  />
                  <Avatar
                    img="https://plus.unsplash.com/premium_photo-1670588775994-f1a29fda9a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                    tag={true}
                  />
                  <Avatar img="https://images.unsplash.com/photo-1673117921063-5dde75f25a81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" />
                </div>

                <div className="content">
                  <ul style={{ marginBottom: '20px' }}>
                    <li>- useState 이용해서 상태 관리 하기</li>
                    <li>- props 전달하기</li>
                  </ul>

                  <div className="total__counter">
                    total : {counter} {counter > 10 ? '🔥' : '❄️'}
                  </div>

                  <div className="counter__wrap">
                    <Counter total={counter} onClick={handleClick} />
                    <Counter total={counter} onClick={handleClick} />
                  </div>
                </div>

                <div className="content">
                  <ul style={{ marginBottom: '20px' }}>
                    <li>- useEffect</li>
                    <li>
                      - 컴포넌트가 딱 한 번만 보여질 때, 처음 마운트 되어질 때,
                      처음으로 무언가 받아오거나, 처음으로 무거운 일을 해야 할
                      때
                    </li>
                    <li>
                      - 첫번째 인자는 콜백 함수, 두번째 인자는 비어있는 디펜던시
                      전달
                    </li>
                    <li>
                      - 함수 호출 후 메모리를 정리 할 때 리턴 함수 전달 (소켓
                      네트워크 통신을 닫아야 할 떄, 화면에서 사라질 때, 업마운트
                      될 때 등등)
                    </li>
                    <li>
                      - 배열에서 리스트의 자식 요소를 만들 때 성능 향상을 위해
                      고유한 key값이 있어야 한다.
                    </li>
                  </ul>

                  <div className="products__wrap">
                    {showProducs && <Products />}
                  </div>

                  <button
                    className="toggle__btn"
                    onClick={() => setShowProducts((show) => !show)}
                  >
                    Toggle
                  </button>
                </div>

                <div className="content">
                  <ul style={{ marginBottom: '20px' }}>
                    <li>- 중첩 객체 상태 관리</li>
                    <li>
                      - key와 value가 같다면 축약이 가능하다(name: name ? name)
                    </li>
                    <li>- 상태는 불변성을 유지해야 한다.</li>
                    <li>- 객체, 배열, 중첩 관리가 가능하다. </li>
                    <li>- useReducer</li>
                    <li>- 다른 컴포넌트에서 재사용할 때</li>
                    <li>
                      - 객체를 변경하고 업데이트하는 로직들이 외부에 정의 되어
                      있기 때문에 컴포넌트에서는 단순히 명령(dispatch)만 해주면
                      된다
                    </li>
                    <li>
                      - Immer(useImmer) : 불변성 상태의 트리를 아주 손쉽게
                      변경해주는 라이브러리, 리액트 오픈소스 어워드 취득
                    </li>
                    <li>
                      - 터미널에 npm(yarn) add immer use-immer 입력 후 추가 하기
                      ( 패키지제이슨에서 확인 가능 )
                    </li>
                    <li>
                      - useImmer를 사용하면 직관적으로 실제 객체를 바로 수정하는
                      것처럼 사용가능. (복잡한 객체 관리를 직관적으로 사용할 때
                      유용)
                    </li>
                  </ul>
                  <article className="contents__list">
                    <section className="content">
                      <AppMentor />
                    </section>
                    <section className="content">
                      <AppMentors />
                    </section>
                  </article>
                </div>

                <div className="content">
                  <ul style={{ marginBottom: '20px' }}>
                    <li>
                      - uncontrolled component 통제되지 않는 컴포넌트 : ui상으로
                      상태가 변경되는 것을 보여주는 것
                    </li>
                  </ul>
                  <AppForm />
                </div>
              </div>
            </div>
            {/* tab__area */}
          </div>
        </div>
        {/* contents__main */}

        {/* <AppXY x={position.x} y={position.y} /> */}
        {/* <div
          className="pointer"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div> */}
      </div>
      {/* contents__wrap */}
    </div>
  );
}
