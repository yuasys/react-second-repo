import React from 'react';
import ReactDOM from 'react-dom/client';//ReactDomを使う
import './index.css';//cssを当てる
import App from './App';//Appコンポーネントを使う
import reportWebVitals from './reportWebVitals';//GoogleChromのweb-vitalsという計測ライブラリの追加とセットアップを事前に行う

const root = ReactDOM.createRoot(document.getElementById('root'));// /public/index.htmlの要素id=rootからReactDomのルートを作成して定数rootに代入
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);//ReactDomに定数rootを介して引数の内容<App />をrender(描画)する。その際、厳密(Strict)なモード下で行う。
reportWebVitals();//計測を実行
