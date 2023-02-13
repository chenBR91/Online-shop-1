import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    uploadDataApiServer();
  }, []);

  const uploadDataApiServer = async () => {
    const uriServer = `http://localhost:8000/api/products/all-products`;
    try {
      const res = await fetch(uriServer);
      const answer = await res.json();
      setProducts(answer);
      console.log("answer", answer);
    } catch (err) {
      console.log(err);
    }
  };

  function createData(category, title, image, rating, price, id, count) {
    return { category, title, image, rating, price, id, count };
  }

  const rowsArray = products.map((product) => {
    const arr = createData(
      product.category,
      product.title,
      product.image,
      product.rating.rate,
      product.price,
      product._id,
      product.rating.count
    );
    return arr;
  });

  const anddleDeleteProduct = async (id) => {
    console.log("delete id", id);
    try {
      const uriDeleteProdut = `http://localhost:8000/api/products/delete/${id}`;
      const res = await axios.delete(uriDeleteProdut);
      const productsAfterDelete = products.filter(
        (product) => product._id !== id
      );
      setProducts(productsAfterDelete);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="middle-element">
      <div className="products">
        <Link to="/admin/add">
          <button className="btn-update">Add Product</button>
        </Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">$ Price</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Count</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsArray.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar alt={row.image} src={row.image}></Avatar>
                  </TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.rating}</TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">
                    <Link to={`/admin/edit/${row.id}`}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => anddleDeleteProduct(row.id)}>
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ProductsTable;
