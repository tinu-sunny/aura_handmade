import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  IconButton,
  Divider,
  Stack,
  TextField,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
} from "@mui/material";
 import EditIcon from '@mui/icons-material/Edit';

import CloseIcon from "@mui/icons-material/Close";
import  { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { Height } from "@mui/icons-material";
import { addnewproducts, deletedraftproducts, savedraftproducts, viewProductById, updateProduct } from "../../services/allAPIs";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(1)",

  width: "90vw",        // ⭐ allow modal to grow
  maxWidth: "95vw",
  maxHeight: "90vh",

  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: "0px 20px 50px rgba(0,0,0,0.15)",

  overflowX: "auto",    // ⭐ enable horizontal scroll
  overflowY: "auto",    // keep vertical scroll

  animation: "modalFade 0.3s ease",

  "@keyframes modalFade": {
    "0%": { opacity: 0, transform: "translate(-50%, -60%) scale(0.95)" },
    "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
  }
};

function AdminModal({ view ,productId, onUpdate}) {
  const [open, setOpen] = React.useState(false);

  if(open===false){
    sessionStorage.removeItem("drafttid")
  }

  // Category options for dropdown
  const categories = [
    "Home Name Boards",
    "Hone Decor",
    "Jewelry",
    "Fridge Magnets",
    "Necklaces",
    "Bangles",
    "Cup",
    "Trays",
    "Photo Frames",
    
  ];

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    sku: "",
    UploadedImages: [],
  });
    // image preview
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  // error validation
  const [errors, setErrors] = useState({});

  // Store original product data for comparison
  const [originalProductData, setOriginalProductData] = useState(null);

// console.log("image",images);

  // console.log("formdata",formData);
  
  const handleOpen = async() => {

    console.log("idddddd",productId);
    
if(view === "ProductEdit"){
  const response = await viewProductById(productId)
  if(response.status===200){
    setFormData(response.data.product)
    setOriginalProductData(response.data.product) // Store original data for comparison
    console.log("dataaaa",formData);
    
  }
}

    setOpen(true);
  }

const handleClose = async () => {
  try {
    const draftId = sessionStorage.getItem("drafttid");

    if (draftId) {
       const reqbody = { draftId };
      await deletedraftproducts(reqbody); // delete draft from DB
      sessionStorage.removeItem("drafttid"); // remove from browser
    }

  } catch (err) {
    console.log("Error deleting draft:", err);
  }

  // ⭐ Always run this (even if API fails)
  setOpen(false);

  // Reset form
  setFormData({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    sku: "",
    UploadedImages: [],
  });

  setImages([]);
  setPreviews([]);
  setOriginalProductData(null); // Reset original product data
};

  const getTitle = () => {
    if (view === "productView") return "View Product";
    if (view === "ProductEdit") return "Edit Product";
    if (view === "addNewProduct") return "Add New Product";
    return "";
  };

// image add function

const handleImageChange = (e) => {
  const files = Array.from(e.target.files); // convert FileList → Array
  if (!files.length) return;
  // store files
  setImages((prev) => [...prev, ...files]);
   let imageArray = [...formData.UploadedImages, ...files]; // Add all files to formData
   setFormData({ ...formData, UploadedImages: imageArray });

  // create preview URLs
  const newPreviews = files.map((file) => URL.createObjectURL(file));
  setPreviews((prev) => [...prev, ...newPreviews]);
};

 const removeImage = (index) => {
  setImages((prev) => prev.filter((_, i) => i !== index));
  setPreviews((prev) => prev.filter((_, i) => i !== index));
  // Also remove from formData.UploadedImages
  setFormData((prevFormData) => ({
    ...prevFormData,
    UploadedImages: prevFormData.UploadedImages.filter((_, i) => i !== index)
  }));
};

const validate = () => {
  let tempErrors = {};

  if (!formData.name) tempErrors.name = "Name is required";
  if (!formData.description) tempErrors.description = "Description is required";

  if (!formData.price) {
    tempErrors.price = "Price is required";
  } else if (isNaN(formData.price) || formData.price <= 0) {
    tempErrors.price = "Enter valid price";
  }

  if (!formData.category) tempErrors.category = "Category is required";

  if (!formData.stock) {
    tempErrors.stock = "Stock is required";
  }else if (isNaN(formData.stock) || formData.stock <= 0) {
    tempErrors.stock = "Enter valid Qunity";
  }

  if (!formData.sku) tempErrors.sku = "SKU is required";

  setErrors(tempErrors);

  return Object.keys(tempErrors).length === 0;
};

const handlesavenewproducts = async()=>{

  try{

if(validate())
  {     const draftid =  sessionStorage.getItem('drafttid');
     if(draftid){
       formData.draftId=draftid
     }
const response = await addnewproducts(formData)
// console.log("inside",response);
if(response.status===200){
  alert(response.data.message)
  // Call the callback to add the new product to the parent component's state
  if (onUpdate && response.data.product) {
    onUpdate(response.data.product);
  }
  setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      sku: "",
      UploadedImages: [],
    });
  setOpen(false)
  // Clear draft ID since product is now saved
  sessionStorage.removeItem('drafttid');
     

}}

else{
  alert("plese fill the form")
}

  }
  catch(err){
    // console.log(err);
    alert(err.response.data.message)
    
  }
}

const handlesavedraft = async()=>{
   let reqbody = {
      ...formData // Include all form data
    };
  if(formData.name !== ""){
    console.log("inside draft function");
    const draftid = sessionStorage.getItem('drafttid');
    console.log("id",draftid);
    if(!draftid){
      
       const response = await savedraftproducts(reqbody);
        console.log("draft",response);
        if(response.status===200){
          sessionStorage.setItem("drafttid",response.data.draftdara._id)
        }
    }
    else{
      reqbody.draftId = draftid;
      console.log(reqbody);
      
       const response = await savedraftproducts(reqbody);
        console.log("updateing",response);
    }

  } else {
      
    console.log("Form name is empty, skipping draft save");
  }
}

const handleUpdateproducts = async () => {
  // Check if there are any changes
  const hasChanges = JSON.stringify(formData) !== JSON.stringify(originalProductData);
  
  if (!hasChanges) {
    alert("No changes detected");
    setOpen(false)
    return;
  }

  // Validate form
  if (!validate()) {
    alert("Please fill all required fields correctly");
    return;
  }

  try {
    // Prepare update data with product ID
    const updateData = {
      ...formData,
      productId: productId
    };

    const response = await updateProduct(updateData);
    
    if (response.status === 200) {
      alert("Product updated successfully");
      // Call the callback to update the parent component's state
      if (onUpdate) {
        const updatedProduct = { ...formData, _id: productId };
        onUpdate(updatedProduct);
      }
      setOpen(false); // Close the modal
    }
  } catch (err) {
    console.log("Error updating product:", err);
    alert(err.response?.data?.message || "Error updating product");
  }
};

// debounce useEffect
const typingTimeoutRef = React.useRef(null);

useEffect(() => {
  // Only save drafts when adding new products, not when editing
  if (view !== "addNewProduct") {
    return;
  }

  // clear previous timer when user types again
  if (typingTimeoutRef.current) {
    clearTimeout(typingTimeoutRef.current);
  }

  // start new timer
  typingTimeoutRef.current = setTimeout(() => {
    handlesavedraft();   // 🔥 will run after user stops typing
  }, 1000); // 1 second delay (you can change)

  // cleanup
  return () => clearTimeout(typingTimeoutRef.current);

}, [formData, view]);

  return (
    <>
      {/* BUTTONS */}

      {view === "addNewProduct" ? (
        <Button
          onClick={handleOpen}
          variant="contained"
          

          sx={{
            background: "linear-gradient(45deg,#f4b400,#ff9800)",
            
            color: "black",
            fontWeight: "bold",
             fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            borderRadius: 3,
             px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 1, sm: 1.2 },
            // Responsive shadow
    boxShadow: {
      xs: "0px 3px 8px rgba(0,0,0,0.15)",
      sm: "0px 6px 15px rgba(0,0,0,0.15)"
    },
     whiteSpace: "nowrap",
            "&:hover": {
              background: "linear-gradient(45deg,#e6a400,#ff8f00)"
            }
          }}
        >
          + New Product
        </Button>
      ) : view === "ProductEdit" ? (
            <Tooltip title="Edit Product">
              <IconButton
              onClick={handleOpen}
                sx={{
                  backgroundColor: "#e3f2fd",
                  color: "#1976d2",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                    color: "white",
                    transform: "scale(1.1)"
                  },
                  transition: "0.3s",
                  boxShadow: 1
                }}
              >
               
                <EditIcon />
              </IconButton>
            </Tooltip>
      ) : view === "productView" ? (
        <Box
          onClick={handleOpen}
          sx={{
            p: 1.2,
            borderRadius: 2,
            backgroundColor: "#e3f2fd",
            cursor: "pointer",
            transition: "0.2s",
            "&:hover": {
              backgroundColor: "#bbdefb",
              transform: "scale(1.05)"
            }
          }}
        >
          <span className="solar--eye-bold-duotone"></span>
        </Box>
      ) : null}

      {/* MODAL */}

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          
          {/* HEADER */}
          <Box
            sx={{
              background: "linear-gradient(90deg,#f4b400,#ff9800)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 3,
              py: 2
            }}
          >
            <Typography fontWeight="bold" color="black">
              {getTitle()}
            </Typography>

            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* CONTENT */}
          <Box sx={{ p: 3 }}>
            <Typography color="text.secondary">
              Here you can {getTitle().toLowerCase()} details.
            </Typography>

            <Box
              sx={{
                mt: 3,
                p: 3,
                borderRadius: 2,
                backgroundColor: "#fafafa",
                border: "1px dashed #ddd",
                textAlign: "center"
              }}
            >
             <Box>
                 
               <TextField
               fullWidth
               label='Name'
               name='name'
               margin="normal"
               value={formData.name}
               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={!!errors.name}
  helperText={errors.name}
               />
             <TextField
                fullWidth
                label="Description"
                name="description"
                multiline
                rows={4}
                margin="normal"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                 error={!!errors.description}
  helperText={errors.description}
                />
              <Box sx={{ display: "flex",justifyContent:"space-between", gap:2, alignItems:"center", flexWrap:{xs:"wrap",md:"nowrap"}}}>
                    <TextField
                 fullWidth
                 label='Price'
                 name='price'
                 margin="normal"
                 value={formData.price}
                 onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  error={!!errors.price}
  helperText={errors.price}
                 />
  
                     <FormControl fullWidth margin="normal">
                       <InputLabel>Category</InputLabel>
                       <Select
                         value={formData.category}
                         label="Category"
                           sx={{
    textAlign: "left",
    borderRadius: 2
  }}
                         onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                       >
                         {categories.map((category) => (
                           <MenuItem key={category} value={category}>
                             {category}
                           </MenuItem>
                         ))}
                       </Select>
                         {errors.category && (
    <p style={{ color: "red", fontSize: "12px" }}>
      {errors.category}
    </p>
  )}
                     </FormControl>
              </Box>
              <Box sx={{ display: "flex",justifyContent:"space-between", gap:2, alignItems:"center", flexWrap:{xs:"wrap",md:"nowrap"}}}>
                     <TextField
                 fullWidth
                 label='Stock'
                 name='stock'
                 margin="normal"
                 value={formData.stock}
                 onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  error={!!errors.stock}
  helperText={errors.stock}
                 />
                     <TextField
                 fullWidth
                 label='sku'
                 name='sku'
                 margin="normal"
                 value={formData.sku}
                 onChange={(e) => setFormData({ ...formData, sku: e.target.value.toUpperCase() })}
                  error={!!errors.sku}
  helperText={errors.sku}
                 />
              </Box>

     
{/* <Paper
  elevation={3}
  sx={{
    p: 3,
    mt: 3,
    borderRadius: 3,
    textAlign: "center"
  }}
>
  <Typography variant="h6" gutterBottom>
    Product Images
  </Typography>

  {/* Hidden input */}
  {/* <input
    type="file"
    accept="image/*"
    multiple
    hidden
    id="upload-image"
    onChange={handleImageChange}
  /> */}

  {/* Upload Area (show only when no images) */}
  {/* {previews.length === 0 && (
    <label htmlFor="upload-image">
      <Box
        sx={{
          border: "2px dashed #bdbdbd",
          borderRadius: 3,
          p: 4,
          cursor: "pointer",
          "&:hover": { backgroundColor: "#f5f5f5" }
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 50, color: "gray" }} />
        <Typography>Click to upload product images</Typography>
        <Typography variant="caption">
          You can upload multiple images
        </Typography>
      </Box>
    </label>
  )} */}

  {/* Preview Grid */}
  {/* {previews.length > 0 && (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
          justifyContent: "center"
        }}
      >
        {previews.map((img, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <img
              src={img}
              alt="preview"
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: 10,
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
              }}
            />

            <IconButton
              size="small"
              onClick={() => removeImage(index)}
              sx={{
                position: "absolute",
                top: -8,
                right: -8,
                bgcolor: "white",
                boxShadow: 2
              }}
            >
              ❌
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Add more button */}
      {/* <label htmlFor="upload-image" style={{ cursor: "pointer" }}>
        <Button component="span" variant="outlined" sx={{ mt: 2 }}>
          Add More Images
        </Button>
      </label> */}
    {/* </>
  )} */}
{/* </Paper> */}



             </Box>
            </Box>

            {/* ACTION BUTTONS */}

            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              sx={{ mt: 3 }}
            >
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>

              {view == "addNewProduct" ? (
                <Button
                onClick={handlesavenewproducts}
                  variant="contained"
                  sx={{
                    backgroundColor: "#f4b400",
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  Save
                </Button>
              ):view === "ProductEdit" ?(
                <Button
                onClick={handleUpdateproducts}
                  variant="contained"
                  sx={{
                    backgroundColor: "#f4b400",
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  update
                </Button>
              ):""}
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default AdminModal;