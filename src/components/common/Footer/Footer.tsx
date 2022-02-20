import { FC } from "react";
import "./Footer.module.scss";

import { useRecoilValue } from "recoil";

import { textState } from "../../../recoil/atoms/textState";

interface AppProps {

}

const Footer: FC<AppProps> = () => {

  const text = useRecoilValue(textState);

  return (
    <div className="container">
      {text}
    </div>
  );
};

export default Footer;

