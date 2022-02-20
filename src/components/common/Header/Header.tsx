import { FC } from "react";
import "./Header.module.scss";

import { useRecoilState } from "recoil";
import { textState } from "../../../recoil/atoms/textState";

interface AppProps {

}

const Header: FC<AppProps> = () => {

  const [ text, setText ] = useRecoilState(textState);

  return (
    <div className="container">
      <h1>{ text }</h1>
      <button type="button" onClick={() => {
        setText('bye');
      }}>change</button>
    </div>
  );
};

export default Header;
