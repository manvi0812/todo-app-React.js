import React, { useState } from "react";
import Alert from "./Alert";
import List from "./List";

function Main() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // setAlert({ show: true, msg: "please enter value", type: "danger" });
      showAlert(true, "please enter value", "danger");
    } else if (name && isEditing) {
      //
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "item is edited", "success");
    } else {
      showAlert(true, "item added", "success");
      const newItems = { id: new Date().getTime().toString(), title: name };
      setList([newItems, ...list]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearItems = () => {
    setList([]);
    showAlert(true, "items are cleared", "success");
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "item is removed", "success");
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditID(id);
    setIsEditing(true);
    setName(specificItem.title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h5>Grocery bud</h5>
        <div>
          <input
            type='text'
            placeholder='e.g. bananas'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit'>{isEditing ? "edit" : "submit"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button onClick={clearItems}>clear items</button>
        </div>
      )}
    </div>
  );
}

export default Main;
