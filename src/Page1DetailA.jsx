import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  //Link toのstateに保存されたデータもuseLocation()で保持できる
  const location = useLocation();
  console.log(location)
  const history = useHistory();

  const onClickBack = () => {
    //history.back() : 前のページにjavascriptの動作で遷移する
    history.goBack();
  }
  return (
    <div>
      <h1>Page1DetailAページ</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  )
}