import './App.css';
import { useState } from 'react';

function Header() {
  return(
    <header>
      <div className='header'>
        <h1>React Blog</h1>
      </div>
    </header>
  );
}

function Article(props) {
  let [like, updateLike] = useState(0);
  return(
    <article>
      <div className='article-list'>
        <h3>{props.title}<span className='like' onClick={() => {updateLike(like++)}}> 👍 {like}</span></h3>
        <p>6월26일 발행</p>
      </div>
    </article>
  );
}

function App() {
  let [title, changeTitle] = useState(['남자코드 추천', '강남 우동맛집', '파이썬 독학']);
  return (
    <div className="App">
      <Header></Header>
      <button class='btn' onClick={() => {
        let copy = [...title];
        copy[0] = '여자코트 추천';
        changeTitle(copy);
        }}>글수정</button>
      <Article title={title[0]}></Article>
      <Article title={title[1]}></Article>
      <Article title={title[2]}></Article>
    </div>
  );
}

export default App;