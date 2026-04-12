import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Chip,
  Box,
  Dialog,
  Tooltip,
  IconButton
} from "@mui/material";
import AdminModal from "./AdminModal";
 import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProductsAdmin } from "../../services/allAPIs";

function TableWithPagination({users, products, onUpdate}) {
  console.log(products);
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openImage, setOpenImage] = React.useState(false);
const [selectedImage, setSelectedImage] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getStatusColor = (status) => {
    if (status === "Available") return "success";
    if (status === "Low Stock") return "warning";
    return "error";
  };

  const handleImageOpen = (img) => {
  setSelectedImage(img || "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80");
  setOpenImage(true);
};

const handleImageClose = () => {
  setOpenImage(false);
};

const handledeleteproduct = async(id)=>{
 try{
 const reqbody = { id };
 const response = await deleteProductsAdmin(reqbody)
 if(response.status===200){
  alert("product deleted succesfully")
  window.location.reload();
 }
 }
 catch(err){
  console.log(err);
  alert("server error occured please try  after some time....... ")
  
 }
}



  return (
    <Paper sx={{ width: "100%", borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>

          {/* TABLE HEADER */}
          <TableHead>
           <TableRow sx={{ backgroundColor: "#f4b400" }}>
  {users
    ? [
        "ID",
        "Name",
        "Email",
        "Phone",
        "Profile"
      ].map((head) => (
        <TableCell
          key={head}
          sx={{
            fontWeight: "bold",
            color: "#000",
            fontSize: "15px"
          }}
        >
          {head}
        </TableCell>
      ))
    : products
    ? [
      "ID",
        "Name",
        "Description",
        "Price",
        "Category",
        "Stock",
        "SKU",
        "Take Action"
      ].map((head) => (
        <TableCell
          key={head}
          sx={{
            fontWeight: "bold",
            color: "#000",
            fontSize: "15px"
          }}
        >
          {head}
        </TableCell>
      ))
    : null}
</TableRow>
          </TableHead>

          {/* TABLE BODY */}
          <TableBody>
            {users? users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow
                  key={product._id}
                  hover
                  sx={{
                    "&:hover": {
                      backgroundColor: "#fff8e1",
                    },
                  }}
                >

 <TableCell>
  #<span style={{ color: "#000", fontWeight: "bold" }}>
    {product._id.slice(-4)}
  </span>
</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>
                    {product.username}
                  </TableCell>
                  
                  <TableCell>{product.email}</TableCell>

                  <TableCell>{product.phone}</TableCell>
                                   <TableCell>
  <img
    src={product.profile ||"https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80"} 
    alt={product.name}
    onClick={() => handleImageOpen(product.profile)}
    style={{
      width: 50,
      height: 50,
      borderRadius: 8,
      objectFit: "cover",
      cursor: "pointer",
      transition: "0.3s",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  />
</TableCell>

                 

                  {/* <TableCell>{product.stockCount}</TableCell>

                  <TableCell>₹{product.price}</TableCell>

                  <TableCell>
                    <Chip
                      label={product.status}
                      color={getStatusColor(product.status)}
                      size="small"
                    />
                  </TableCell>

                 <TableCell>
  <Box
    sx={{
      display: "flex",
      gap: 1,
      alignItems: "center"
    }}
  >
 <AdminModal view={"productView"}/>

 <AdminModal view={"ProductEdit"}/>
  </Box>
</TableCell> */}
                </TableRow>
              )):products
  ? products.length > 0 ? products
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((product) => (
        <TableRow key={product._id}>
           <TableCell>
  #<span style={{ color: "#000", fontWeight: "bold" }}>
    {product._id.slice(-4)}
  </span>
</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.description}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.category}</TableCell>
          <TableCell>{product.stock}</TableCell>
          <TableCell>{product.sku}</TableCell>
         <TableCell align="center">
  <Box
    sx={{
      display: "flex",
      justifyContent: "start",
      gap: 2,
      flexWrap: "wrap" // responsive for mobile
    }}
  >
    {/* Edit Button */}
   
 <AdminModal view={"ProductEdit"} productId={product._id} onUpdate={onUpdate}/>
      

    {/* Delete Button */}
    <Tooltip title="Delete Product">
      <IconButton
    onClick={() => handledeleteproduct(product._id)}
        sx={{
          backgroundColor: "#ffebee",
          color: "#d32f2f",
          "&:hover": {
            backgroundColor: "#d32f2f",
            color: "white",
            transform: "scale(1.1)"
          },
          transition: "0.3s",
          boxShadow: 1
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  </Box>
</TableCell>
        </TableRow>
      )):<TableRow>
        <TableCell  colSpan={8} sx={{textAlign:"center", fontWeight:"bold"}}>No Product data found</TableCell>
      </TableRow>
  : null}
          </TableBody>
        </Table>
      </TableContainer>
<Dialog open={openImage} onClose={handleImageClose} maxWidth="sm">
  <img
    src={selectedImage}
    alt="preview"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: 8,
    }}
  />
</Dialog>
      {/* PAGINATION */}
      <TablePagination
        sx={{
          backgroundColor: "#f4b400",
          color: "#000",
        }}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableWithPagination;