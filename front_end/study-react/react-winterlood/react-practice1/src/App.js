// import './App.css';
// import Header from './Header.js';
// import Footer from './Footer.js'

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <header className="App-header">
//         <h2>App</h2>
//       </header>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const style = {
//     App: {
//       backgroundColor: 'blue',
//     },
//     h2: {
//       color: 'orange'
//     },
//     p: {
//       color: 'cyan'
//     }
//   }

//   const num = 123;

//   return (
//     <div style={style.App}>
//       <header>
//         <h2 style={style.h2}>App</h2>
//         <p style={style.p}>css 파일을 사용하지 않고 inline으로 css를 설정하는 연습입니다!</p>
//         <p style={style.p}>{num}은 {num % 2 === 0 ? '짝수' : '홀수'}</p>
//       </header>
//     </div>
//   );
// }

import Header from './Header.js';
import Counter from './Counter.js';

function App() {
  const value = {
    a: 1,
  }

  return(
    <div className='App'>
      <Header />
      <Counter {...value}/>
    </div>
  );
}

Counter.defaultProps = {
  num: 10
}

export default App; 