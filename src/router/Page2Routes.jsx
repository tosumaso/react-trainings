import { Page2 } from "../Page2";
import {UrlParameter} from "../UrlParameter";

/**ネストルーティングや多くのルーティングを設定する場合は配列で設定ファイルを作成する
 * ルーティングで動的に変化するのはRouteのpath,exact,読み込むcomponentのため、それらの設定をオブジェクトにしてする
 */

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2/>
  }, 
  {
    // urlパラメータ: :パラメータ名
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];