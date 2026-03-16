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
  Dialog
} from "@mui/material";
import AdminModal from "./AdminModal";

const products = [
  {
    id: 1,
    image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Handmade Clay Pot",
    category: "Home Decor",
    stockCount: 25,
    price: 499,
    status: "Available",
  },
  {
    id: 2,
    image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Wooden Wall Art",
    category: "Wall Decor",
    stockCount: 12,
    price: 1299,
    status: "Available",
  },
  {
    id: 3,
   image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Handcrafted Necklace",
    category: "Jewelry",
    stockCount: 0,
    price: 899,
    status: "Out of Stock",
  },
    {
    id: 4,
  image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Handcrafted Necklace",
    category: "Jewelry",
    stockCount: 0,
    price: 899,
    status: "Out of Stock",
  },
    {
    id: 5,
  image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Handcrafted Necklace",
    category: "Jewelry",
    stockCount: 0,
    price: 899,
    status: "Out of Stock",
  },
    {
    id: 6,
    image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Handmade Clay Pot",
    category: "Home Decor",
    stockCount: 25,
    price: 499,
    status: "Available",
  },
  {
    id: 7,
    image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Wooden Wall Art",
    category: "Wall Decor",
    stockCount: 12,
    price: 1299,
    status: "Available",
  },
  {
    id: 8,
     image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Handcrafted Necklace",
    category: "Jewelry",
    stockCount: 0,
    price: 899,
    status: "Out of Stock",
  },
    {
    id: 9,
     image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Handcrafted Necklace",
    category: "Jewelry",
    stockCount: 0,
    price: 899,
    status: "Out of Stock",
  },
    {
    id: 10,
     image: "https://cdn.shopify.com/app-store/listing_images/bba91cb747a794fddda7c4269609671c/promotional_image/CJrg-LWjjfsCEAE=.png?height=720&width=1280",
    productName: "Handcrafted Necklace",
    category: "Jewelry",
    stockCount: 0,
    price: 899,
    status: "Out of Stock",
  },
];

function TableWithPagination({users}) {
  console.log(users);
  
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
  setSelectedImage(img);
  setOpenImage(true);
};

const handleImageClose = () => {
  setOpenImage(false);
};
  return (
    <Paper sx={{ width: "100%", borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>

          {/* TABLE HEADER */}
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f4b400" }}>
          { users ?  [
                "ID",
                " Name",
                "Email",
                "phone",
                "Profile",
                   ].map((head) => (
                <TableCell
                  key={head}
                  sx={{
                    fontWeight: "bold",
                    color: "#000",
                    backgroundColor: "#f4b400",
                    fontSize: "15px",
                  }}
                >
                  {head}
                </TableCell>
              )):""}
            </TableRow>
          </TableHead>

          {/* TABLE BODY */}
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow
                  key={product.id}
                  hover
                  sx={{
                    "&:hover": {
                      backgroundColor: "#fff8e1",
                    },
                  }}
                >

 <TableCell>{product.id}</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>
                    {product.name}
                  </TableCell>
                  
                  <TableCell>{product.email}</TableCell>

                  <TableCell>{product.phone}</TableCell>
                                   <TableCell>
  <img
    src={product.profile}
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
              ))}
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
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableWithPagination;