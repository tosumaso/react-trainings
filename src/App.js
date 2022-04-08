//BrowserRouter: <BrowserRouter>で囲った配下でルーティングを有効化する
//Link: aタグのようにlinkを意味する
//Switch: Linkと遷移先の紐付けを行う設定。<Switch>内にルーティングの設定を記述する
//Route: どのpathにどのコンポーネントを出力するか
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import './App.css';
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </div>
      {/** exact: pathに指定したurlが完全一致した場合のみRoute内のコンポーネントを呼ぶ
       *  exactがないとpath="/"の場合"/"配下のurl全てが読み込み対象になってしまう
       */}
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/page1">
          <Page1 />
        </Route>
        <Route exact path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}