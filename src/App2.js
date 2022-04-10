import { Router } from "./router/Router2";
import "./style.css";

export default function App2() {
  return (
    <Router/>
  );
}

/**
 * Atomic Design: webページを5種類のコンポーネントに分けて考える概念
 * Atom: コンポーネントの最小単位。input,button1つなどのこれ以上分解できない要素
 * Molecule: 複数のAtomを組み合わせたコンポーネント。ボタン付きテキストボックス サムネイル付きの名前など
 * Organism: 複数のAtom,Moleculeを組み合わせたコンポーネント。
 * Template: ページの雛形。header,footerなどページの大枠をコンポーネントにしたもの。
 * Page: 全てのコンポーネントを使ったページ全体のコンポーネント。Routerの設定コンポーネントから呼ばれることが多い。
 */

