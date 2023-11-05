import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/Listgroup";
import { BiAddToQueue } from "react-icons/bi";
import Button from "./components/Button";
import Like from "./components/Like";
import { produce } from "immer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Form from "./components/Form";
// import ListGroup from "./components/Listgroup";
function App() {
  // let items = ["New York", "San Francisco", "Los Angeles", "Hong Kong"];
  // const handleSelecteItem = (item: string) => {
  //   console.log(item);
  // };
  // const [showAlert, setShowAlert] = useState(false);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [person, setPerson] = useState({
  //   firstname: "",
  //   lastname: "",
  // });
  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);
  // const handleClick = () => {
  //   // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.id === 1);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  // };
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelecteItem}
      /> */}
      {/* <BiAddToQueue /> */}
      {/* <Button onClick={() => setShowAlert(true)}>
        My <strong>Button</strong>!
      </Button> */}
      {/* {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Be <strong>careful</strong>!
        </Alert>
      )} */}
      {/* <Button color="secondary" onClick={() => () => {}}>
        My <strong>Button</strong>!
      </Button>
      <Like onClick={() => console.log("clicked.")} /> */}
      {/* {firstName} {lastName} */}
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <Button onClick={handleClick}>Click Me</Button> */}
      {/* <Navbar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => {
          setCartItems([]);
        }}
      /> */}
      <Form></Form>
    </div>
  );
}
export default App;
