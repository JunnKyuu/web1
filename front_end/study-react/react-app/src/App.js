import logo from './logo.svg';
import './App.css';

function Header(props) {
  return(
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li><a href='/'>{t.title}</a></li>);
  }
  return(
    <ol>
      {lis}
    </ol>
  );
}

function Article(props) {
  return(
    <article>
      <h1>{props.title}</h1>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'js', body: 'js is ...'}
  ]
  return (
    <div className="App">
      <Header title='React'></Header>
      <Nav topics={topics}></Nav>
      <Article title='React is awesome!' body='Hello! This is React world!'></Article>
    </div>
  );
}

export default App;
