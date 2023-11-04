import React, { useState } from "react";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return <BsFillHeartbreakFill color="#ff6b81" size={20} onClick={toggle} />;
  return <AiOutlineHeart color="#ff6b81" size={20} onClick={toggle} />;
};

export default Like;
