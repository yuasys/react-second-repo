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
        <a
          className="App-link"
          href="https://docs.google.com/document/d/e/2PACX-1vTJj-1Jq90zA_5Siqf1wu_biUOWFmsjMAAfHUoMJQklU0Yg4iGnsbyQX5QoyzgJEHjw-eojwD8JsUfr/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          ブログ
        </a>
     </header>
      <h2>このサイトについて</h2>
      <div className="phrase">
        <p>
        🚀このたび、ありがたいことにようやくこのサイトを立ち上げることが出来ました。このサイトの裏側には、次のような便利機能がついています。<br/>
        <ul>
          <li>筆者のローカルリポジトリ`<b>~/source/react-app/app-dir</b>`をVscodeで自在に編集し、</li>
          <li>ターミナルで`<b>npm run start</b>`するとブラウザでリアルタイムで編集結果をモニタリングできるようになり、</li>
          <li>ターミナルで`<b>npm run deploy</b>`すると自動でGithubのPagesにpushされ、Pagesで公開したサイトも更新される！🚀</li>
        </ul>
        <b>ReactによるWeb部品作りを楽しみながら、このサイトを育てていきます</b>ので、どうぞよろしくお願いいたします。
        </p>
      </div>
    </div>
  );
}

export default App;
