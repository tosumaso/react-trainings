import styled from "styled-components";
import {BaseButton} from "./BaseButton";

//ボタンコンポーネント。ボタンに表示したい文字列がpropsに格納されコンポーネント内で整形される
export const PrimaryButton = (props) => {
  
  const {children} = props;
  return (
    <SButton>{children}</SButton>
  );
};

/**
 * styled(StyledComponent) : styled-componentsを読み込む
 * styled-componentsで共通処理をコンポーネント化したものを読み込み、独自のcssを追加
 */
const SButton = styled(BaseButton)`
  background-color: red;
`;