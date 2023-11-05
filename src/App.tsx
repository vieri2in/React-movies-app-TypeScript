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
import ExpenseItemsList from "./expense-tracker/components/ExpenseItemsList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { date } from "zod";
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
  // const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "ccc", amount: 30, category: "Utilities" },
    { id: 4, description: "ddd", amount: 40, category: "Entertainment" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
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
      {/* <Form></Form> */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-2">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseItemsList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}
export default App;
