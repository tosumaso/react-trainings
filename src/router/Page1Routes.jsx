
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

/**ネストルーティングや多くのルーティングを設定する場合は配列で設定ファイルを作成する
 * ルーティングで動的に変化するのはRouteのpath,exact,読み込むcomponentのため、それらの設定をオブジェクトにしてする
 */

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1/>
  }, 
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA/>
  }, 
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB/>
  }
];