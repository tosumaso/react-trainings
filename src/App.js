//BrowserRouter: <BrowserRouter>で囲った配下でルーティングを有効化する。プロジェクトにつき1つ
//Link: aタグのようにlinkを意味する
//Switch: Linkと遷移先の紐付けを行う設定。<Switch>内にルーティングの設定を記述する
//Route: どのpathにどのコンポーネントを出力するか
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import './App.css';
import { Router } from "./router/Router";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </div>
      < Router/>
    </BrowserRouter>
  );
}