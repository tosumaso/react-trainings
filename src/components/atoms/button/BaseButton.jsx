import styled from "styled-components";

//styled-componentsでcssの共通処理をコンポーネントにする。
//buttonタグ、以下のcssが共通で処理される
export const BaseButton = styled.button`
  color: blue;
  padding: 6px 24px;  
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

