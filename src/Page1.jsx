import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(10).keys()];
  //useHistory() : javascriptで画面遷移を行える
  const history = useHistory();

  const onClickDetailA = () => {
    //history.push("遷移先path") : 指定したpathにjavascriptの動作で遷移する
    history.push("/page1/detailA");
  }
  return (
    <>
      <div>
        <h1>Page1ページ</h1>
        {/**Link toで遷移先を指定する方法
       * 1つ目: オブジェクト形式 {pathname: url, state: 遷移先に送るデータ}
       * 2つ目: 文字列(オブジェクト形式の簡易版)
       */}
        <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
        <Link to="/page1/detailB">DetailB</Link>
        <br/>
        <button onClick={onClickDetailA}>DetailA</button>
      </div>
    </>
  )
}