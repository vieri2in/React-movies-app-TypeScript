import { useState } from "react";
import styled from "styled-components";
// import { MouseEvent } from "react";
const UL = styled.ul`
  list-style: none;
  padding: 0;
`;
const LI = styled.li`
  padding: 5px 0;
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   items = [];
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>Not found.</p> : null;
  //   };
  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>Not found.</p>}
      <UL>
        {items.map((item, index) => (
          <LI
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </LI>
        ))}
      </UL>
    </>
  );
}
export default ListGroup;
