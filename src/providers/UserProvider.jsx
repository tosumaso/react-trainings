import React, {createContext, useState} from "react";

//Contextを使用するための準備
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const {children} = props;
  const [userInfo,setUserInfo] = useState(null);
  /** <React.Context.Provider value={値}> Contextを参照できる範囲 </> : Contextの定義
   * valueにContextに登録する値を指定
   * <Context.Provider>で囲った範囲内からContextにアクセス可能。この場合は<Router>とその子コンポーネント
   * useState()のstateとその操作関数を指定し、その配下のコンポーネントから動的な値の取得、操作ができる
   * contextを参照しているコンポーネントは更新時、再レンダリングされる
    */
  return (
    <UserContext.Provider value={{userInfo,setUserInfo}}>
      {children}
    </UserContext.Provider>
  );
};

//Context(グローバルステート): どのコンポーネント、スコープからも参照、操作できる値
//propsでコンポーネント間でバケツリレーせずに直接値を参照できる