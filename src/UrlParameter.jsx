import {useParams,useLocation} from "react-router-dom";

export const UrlParameter = () => {
  //useParams() : 送信したurlパラメータをオブジェクトで取得できる。遷移後のページで使うにはプロパティを参照
  const {id} = useParams();
  //useLocation() : 現在のページのpathやクエリパラメータの情報を取得できる
  const {search} = useLocation();
  //new URLSearchParams(クエリ文字列) : クエリ文字列の操作を行える
  const query = new URLSearchParams(search);
  console.log(useLocation())
  return (
    <div>
      <h1>UrlParameterページ</h1>
      <p>Urlパラメータは{id}</p>
      {/** URLSearchParams.get("クエリパラメータのname") : パラメータ名を指定し、そのvalueを受け取る */}
      <p>クエリパラメータは{query.get("name")}</p>
    </div>
  )
}