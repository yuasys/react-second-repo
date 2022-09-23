import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Reactで楽しくWeb部品づくりを！
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
      <h1>このサイトについて</h1>
      <div className="phrase">
        <p>
        🚀このたび、ありがたいことにようやくこのサイトを立ち上げることが出来ました。このサイトの裏側には、次のような便利機能がついています。<br/>
        <ul>
          <li>ローカルのVscodeで自在に編集。</li>
          <li>ターミナルで<code>npm run start</code>するとブラウザでリアルタイムで編集結果をモニタリングできる。</li>
          <li>ターミナルで<code>npm run deploy</code>すると自動でGithubのPagesにpushされ、Pagesで公開したサイトも更新される！🚀</li>
        </ul>
        <b>ReactによるWeb部品作りを楽しみながら、このサイトを育てていきます</b>ので、どうぞよろしくお願いいたします。
        </p>
      </div>
    </div>
  );
}

export default App;
