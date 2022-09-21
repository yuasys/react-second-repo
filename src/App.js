import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>を編集しリロードのために保存しよう
        </p>
        <a
          className="App-link"
          href="https://ja.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          日本語公式サイトで学ぶ
        </a>
      </header>
      <p>ここに書くとどこに表示されるか確認します。</p>
    </div>
  );
}

export default App;
