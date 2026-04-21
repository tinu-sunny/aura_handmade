import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";
import { useParams } from "react-router-dom";
import { viewProductDataById } from "../../services/allAPIs";

function ProductViewPage() {
  // sate
  const [qty, setQty] = useState(1);
  const [selectedWood, setSelectedWood] = useState("Walnut");

  const woods = [
    { name: "Walnut", color: "#5c4033" },
    { name: "Oak", color: "#c8b6a6" },
    { name: "Teak", color: "#a67c6d" },
  ];
// product data
const [productData,setProductData]= useState()
const {id}= useParams()
console.log(productData);

const viewProductData = async()=>{

  const response = await viewProductDataById(id)
  console.log(response);
  if(response.status===200){
    setProductData(response.data.product)
  }
  
}

useEffect(()=>{
  viewProductData()
},[])





  return (
    <>
      <UserHeader />
      <div>
        <Box sx={{ px: { xs: 2, md: 8 }, py: 6, backgroundColor: "#f9fafb" }}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: { xs: "column", md: "row", gap: 10 },
            }}
          >
            {/* LEFT SIDE - Images */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://img.freepik.com/premium-photo/wooden-name-board-vector-illustration_1027230-21774.jpg"
                alt="Name Board"
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  mb: 2,
                }}
              />

              {/* Thumbnails */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {[1, 2, 3, 4].map((item, i) => (
                  <Box
                    key={i}
                    component="img"
                    src="https://img.freepik.com/premium-photo/wooden-name-board-vector-illustration_1027230-21774.jpg"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      border: i === 0 ? "2px solid #facc15" : "1px solid #ddd",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Box>
            </Grid>

            {/* RIGHT SIDE - Details */}
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: { xs: 28, md: 36 },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                {productData?.name}
              </Typography>

              {/* Price & Rating */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  ${productData?.price}
                </Typography>
                <Rating value={4.5} precision={0.5} readOnly />
                <Typography sx={{ fontSize: 13, color: "#6b7280" }}>
                  (48 Reviews)
                </Typography>
              </Box>

              <Typography sx={{ color: "#6b7280", mb: 4 }}>
                "{productData?.description}"
              </Typography>

              {/* Wood Selection */}
              <Typography sx={{ fontSize: 12, fontWeight: 600, mb: 1 }}>
                SELECT WOOD TYPE
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                {woods.map((wood) => (
                  <Box
                    key={wood.name}
                    onClick={() => setSelectedWood(wood.name)}
                    sx={{
                      flex: 1,
                      p: 2,
                      borderRadius: 2,
                      border:
                        selectedWood === wood.name
                          ? "2px solid #facc15"
                          : "1px solid #ddd",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: wood.color,
                        mx: "auto",
                        mb: 1,
                      }}
                    />
                    <Typography sx={{ fontSize: 12 }}>
                      {wood.name.toUpperCase()}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Engraving */}
              <Typography sx={{ fontSize: 12, fontWeight: 600, mb: 1 }}>
                CUSTOM ENGRAVING
              </Typography>

              <TextField
                fullWidth
                placeholder="Enter name or message"
                sx={{ mb: 4 }}
              />

              {/* Quantity & Add Button */}
              <Box
                sx={{ display: "flex", gap: 2, alignItems: "center", mb: 4 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ddd",
                    borderRadius: 2,
                  }}
                >
                  <IconButton onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ px: 2 }}>{qty}</Typography>
                  <IconButton onClick={() => setQty(qty + 1)}>
                    <AddIcon />
                  </IconButton>
                </Box>

                <Button
                  sx={{
                    flex: 1,
                    backgroundColor: "#facc15",
                    color: "#000",
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#eab308" },
                  }}
                >
                  ADD TO COLLECTION
                </Button>

                <IconButton
                  sx={{
                    border: "1px solid #ddd",
                    borderRadius: 2,
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>

              {/* Accordions */}
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>
                    MATERIALS & CARE
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#6b7280", fontSize: 14 }}>
                    Crafted from FSC-certified American Black Walnut. Finished
                    with organic oils and beeswax for a safe, long-lasting
                    shine.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>
                    SHIPPING INFORMATION
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#6b7280", fontSize: 14 }}>
                    Ships within 5–7 business days with eco-friendly packaging.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>
                    ARTISAN STORY
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#6b7280", fontSize: 14 }}>
                    Handcrafted by skilled artisans preserving generations of
                    woodworking heritage.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </div>
      <UserFooter />
    </>
  );
}

export default ProductViewPage;
