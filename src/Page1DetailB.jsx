import { useLocation } from "react-router-dom";

export const Page1DetailB = () => {
  console.log(useLocation());
  return (
    <div>
      <h1>Page1DetailBページ</h1>
    </div>
  )
}