import logo from './logo.svg';
import './App.css';

function Header(props) {
  return(
    <header>
      <h1><a href='/'>{props.title}</a></h1>
    </header>
  );
}

function Nav() {
  return(
    <nav>
      <ol>
        <li><a href='/'>html</a></li>
        <li><a href='/'>css</a></li>
        <li><a href='/'>js</a></li>
      </ol>
    </nav>
  );
}

function Article(props) {
  return(
    <article>
      <h1>{props.title}!</h1>
      {props.body}
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header title="React"></Header>
      <Nav></Nav>
      <Article title="Welcome!" body='This is React World!!'></Article>
    </div>
  );
}

export default App;
