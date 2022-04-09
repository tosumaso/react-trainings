import { Home } from "../Home";
import { Switch, Route } from "react-router-dom";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <>
      {/** 
       * Routeの書き方
       * 1つ目: <Route path="/"><Component /></Route>
       * 2つ目: <Route path="/" render={Componentを返すcallback} />
       * 
       * exact: pathに指定したurlが完全一致した場合のみRoute内のコンポーネントを呼ぶ
       *  exactがないとpath="/"の場合"/"配下のurl全てが読み込み対象になってしまう
       * 
       * ネストされたルーティング : 例: /page1/detailAに対応したページを表示
       * 1: render={(match: {url}) => ルーティングの設定}。propsにネストされたurl情報をもつプロパティがあるので展開。変数でネストのurlを表示できるようにする。
       * 2: 親のRoute内にSwitchをネストさせ、path=親path/子pathという形でurlを紐づける
       */}
      < Switch >
        <Route exact path="/">
          <Home />
        </Route>
        {/**ルーティングの設定情報(<Route>の設定)を設定ファイルからmapで取り出しループする
         * 
         */}
        <Route path="/page1" render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
              {route.children}
            </Route>
            ))}
          </Switch>
        )} />
        <Route path="/page2" render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
              {route.children}
            </Route>
            ))}
          </Switch>
        )} />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch >
    </>
  )
}