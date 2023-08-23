import React from 'react';
import './style.css';

function Btn(props) {
  return (
    <button
      id="page"
      onClick={(e) => {
        e.preventDefault();
        props.onChangeMode();
      }}
    >
      승인
    </button>
  );
}

function Btn1(props) {
  return (
    <button
      id="page1"
      onClick={(e) => {
        e.preventDefault();
        props.onChangeMode();
      }}
    >
      취소
    </button>
  );
}

function Page() {
  return (
    <div>
      <Btn
        onChangeMode={() => {
          alert('정말 승인하시겠습니까?');
        }}
      ></Btn>
      <Btn1
        onChangeMode={() => {
          alert('결재가 취소됩니다.');
        }}
      ></Btn1>
    </div>
  );
}

export default Page;
