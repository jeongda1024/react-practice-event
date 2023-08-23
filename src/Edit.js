import React from 'react';
import './style.css';

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Header(props) {
  return (
    <header>
      <h1>
        <a
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(); //onChangeMode를 불러온다는 뜻
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Btn(props) {
  return (
    <button
      onClick={function (e) {
        e.preventDefault();
        props.onChangeMode();
      }}
    >
      버튼을 Click
    </button>
  );
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          alert('이걸 누르시는게 아닙니다.');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Btn
        onChangeMode={() => {
          alert('onChangeMode가 뭔지 아십니까');
        }}
      ></Btn>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
