import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/Listgroup";
import { BiAddToQueue } from "react-icons/bi";
import Button from "./components/Button";
import Like from "./components/Like";
// import ListGroup from "./components/Listgroup";
function App() {
  let items = ["New York", "San Francisco", "Los Angeles", "Hong Kong"];
  const handleSelecteItem = (item: string) => {
    console.log(item);
  };
  // const [showAlert, setShowAlert] = useState(false);
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
      <Button color="secondary" onClick={() => () => {}}>
        My <strong>Button</strong>!
      </Button>
      <Like onClick={() => console.log("clicked.")} />
    </div>
  );
}
export default App;
