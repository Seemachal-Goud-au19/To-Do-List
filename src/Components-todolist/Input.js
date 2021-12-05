import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import React from "react";
import "./TodoList.css"


const Input = () => {
  const [input, setInput] = useState("");
  const [store, setStore] = useState([]);
  const [id, setId] = useState();
  const [toggle, setToggle] = useState(false);

  const AddList = () => {
    if (input && !toggle) {
      setStore([...store, input]);
      setInput("");
    } else if (toggle) {
      let saveitem = store.map((val, idx) => {
        if (idx === id) {
          val = input;
        }
        return val;
      });

      setStore(saveitem);
      setInput("");
      setToggle(false)
    }
  };

  const Delete = (idx) => {
    const newStore = store.filter((val, index) => index != idx);
    setStore([...newStore]);
  };

  const Edit = (idx) => {
    let edititem = store.find((val, index) => {
      if (index === idx) {
        return val;
      }
    });
    setId(idx);
    setInput(edititem);
    setToggle(true);
  };

  const Remove = () => {
    setStore([]);
  };

  return (
    <div className="todo">
    <div className="input">
    <input 
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {!toggle ?(<AddCircleIcon className="icon" onClick={AddList} />):
      ( <SaveIcon className="icon" onClick={AddList} />)}
     

    </div>
     
     
      {store.map((element, idx) => {
        return (
          <>
            <div  className="list" key={idx}>
              <p>{element}</p>
              <DeleteForeverIcon className="icon"
                onClick={() => {
                  Delete(idx);
                }}
              />
              <EditIcon className="icon"
                onClick={() => {
                  Edit(idx);
                }}
              />
            </div>
          </>
        );
      })}
      <button  className="remove" onClick={Remove}>Remove All</button>
    </div>
  );
};

export default Input;
