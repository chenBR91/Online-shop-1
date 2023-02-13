import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./ProductsEdit.css";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function InsertProduct() {
  const native = useNavigate();
  const [insertPrice, setInsertPrice] = useState("");
  const [insertTitle, setInsertTitle] = useState("");
  const [insertDescription, setInsertDescription] = useState("");

  const handdleChangeInput = (e) => {
    const inputType = e.target.id;
    const valueInput = e.target.value;
    if (inputType === "price") {
      setInsertPrice(valueInput);
    } else if (inputType === "title") {
      setInsertTitle(valueInput);
    } else if (inputType === "description") {
      setInsertDescription(valueInput);
    }
  };

  const handdleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("insertPrice", insertPrice);
    try {
      const data = {
        price: Number(insertPrice),
        title: insertTitle,
        description: insertDescription,
        category: "men's clothing",
      };
      const res = await axios.post(
        "http://localhost:8000/api/products/add-product",
        data
      );
      native('/');
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <div className="middle-element">
      <div className="products">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="input-insert">
            <TextField
              id="title"
              label="title"
              multiline
              maxRows={4}
              onChange={handdleChangeInput}
            />
            <TextField
              id="price"
              label="price"
              placeholder="Placeholder"
              multiline
              onChange={handdleChangeInput}
            />
            <TextField
              id="description"
              label="description"
              multiline
              rows={4}
              onChange={handdleChangeInput}
            />
            <SelectVariants />
            <button onClick={handdleSubmit}>Create</button>
          </div>
        </Box>
      </div>
    </div>
  );
}

function SelectVariants() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default InsertProduct;
