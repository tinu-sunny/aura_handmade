import React from "react";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";
import {
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import { useState } from "react";

const products = [
  {
    title: "The Kensington Walnut",
    subtitle: "American Walnut & Gold Leaf",
    price: "$245.00",
    image:
      "https://img.freepik.com/free-vector/metal-table-card-holder-empty-golden-name-plate_107791-2439.jpg?semt=ais_user_personalization&w=740&q=80",
  },
  {
    title: "The Heritage Marble",
    subtitle: "Carrara Marble & Solid Brass",
    price: "$310.00",
    image:
      "https://img.freepik.com/free-vector/metal-table-card-holder-empty-golden-name-plate_107791-2439.jpg?semt=ais_user_personalization&w=740&q=80",
    badge: "LIMITED EDITION",
  },
  {
    title: "The Nordic Oak",
    subtitle: "European White Oak",
    price: "$195.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3fl8Aagdlvg1na8D1pbdwDi8vzb_9_Z-Yg&s",
  },

  {
    title: "The Kensington Walnut",
    subtitle: "American Walnut & Gold Leaf",
    price: "$245.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhrzuZJ8hI9xc2Qxc90vLEHc1H7UezoIS6A&s",
  },
  {
    title: "The Heritage Marble",
    subtitle: "Carrara Marble & Solid Brass",
    price: "$310.00",
    image:
      "https://m.media-amazon.com/images/I/81evHBgjKOS._AC_UF1000,1000_QL80_.jpg",
    badge: "LIMITED EDITION",
  },
  {
    title: "The Nordic Oak",
    subtitle: "European White Oak",
    price: "$195.00",
    image:
      "https://m.media-amazon.com/images/I/81evHBgjKOS._AC_UF1000,1000_QL80_.jpg",
  },
];

function CategoryProductView() {
  const [priceRange, setPriceRange] = useState([100, 1000]);
  return (
    <>
      <UserHeader />

      <div>
        {/* Banner Section */}
        <Box
          sx={{
            position: "relative",
            height: "250px",
            backgroundImage:
              "url('https://c2y4c2e5.delivery.rocketcdn.me/wp-content/uploads/2018/02/wood-carpentry-flat-lay-banner-1600x533.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            px: { xs: 2, md: 8 },
          }}
        >
          {/* Dark Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 300,
                mb: 2,
                marginLeft: "25px",
              }}
            >
              Home Name Boards
            </Typography>

            <Typography
              sx={{
                maxWidth: "400px",
                marginLeft: "50px",
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#e2e8f0",
              }}
            >
              Exquisite, hand-engraved signage crafted from the finest
              sustainably sourced hardwoods and premium metals. A timeless
              statement for your sanctuary.
            </Typography>
          </Box>
        </Box>

        {/* products  */}

        <Box sx={{ px: { xs: 2, md: 8 }, py: 6, backgroundColor: "#f8fafc" }}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
            }}
          >
            {/* LEFT SIDEBAR */}
            <Grid item xs={12} md={3}>
              {/* Material */}
              <Typography sx={{ fontWeight: 600, mb: 2 }}>Material</Typography>

              <FormControlLabel control={<Checkbox />} label="Solid Walnut" />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="White Oak"
              />
              <FormControlLabel control={<Checkbox />} label="Carrara Marble" />
              <FormControlLabel control={<Checkbox />} label="Aged Brass" />

              {/* Style */}
              <Typography sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                Style
              </Typography>

              <FormControlLabel control={<Checkbox />} label="Classic Serif" />
              <FormControlLabel control={<Checkbox />} label="Modern Minimal" />
              <FormControlLabel
                control={<Checkbox />}
                label="Rustic Hand-Cut"
              />

              {/* Price Range */}
              <Typography sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                Price Range
              </Typography>

              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={100}
                max={1000}
              />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: 12 }}>$100</Typography>
                <Typography sx={{ fontSize: 12 }}>$1,000+</Typography>
              </Box>
            </Grid>

            {/* RIGHT PRODUCTS */}
            <Grid item xs={12} md={9} sx={{ marginLeft: { xs: 0, md: 15 } }}>
              {/* Top Bar */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  mb: 4,
                }}
              >
                <Typography sx={{ color: "#64748b" }}>
                  Showing 12 unique pieces
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography sx={{ fontSize: 12, color: "#64748b" }}>
                    SORT BY
                  </Typography>
                  <Select size="small" defaultValue="featured">
                    <MenuItem value="featured">Featured Selection</MenuItem>
                    <MenuItem value="priceLow">Price: Low to High</MenuItem>
                    <MenuItem value="priceHigh">Price: High to Low</MenuItem>
                  </Select>
                </Box>
              </Box>

              {/* Product Grid */}
              <Grid
                spacing={4}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 7,
                  flexWrap: { xs: "nowrap", md: "wrap" },
                  overflowX: { md: "auto" },
                  height: { xs: "100%", md: "400px" },
                }}
              >
                {products.map((product, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#fff",
                        borderRadius: 3,
                        p: 2,

                        transition: "0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      {/* Badge */}
                      {/* {product.badge && (
                    <Chip
                      label={product.badge}
                      size="small"
                      sx={{
                        position: "absolute",
                        backgroundColor: "#2563eb",
                        color: "#fff",
                        fontSize: 10,
                      }}
                    />
                  )} */}

                      {/* Image */}
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.title}
                        sx={{
                          width: { xs: "100%", md: "220px" },
                          height: 220,
                          objectFit: "cover",
                          position: "center",
                          borderRadius: 2,
                          mb: 2,
                        }}
                      />

                      {/* Info */}
                      <Typography sx={{ fontWeight: 600 }}>
                        {product.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 13,
                          color: "#64748b",
                          mb: 1,
                        }}
                      >
                        {product.subtitle}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#2563eb",
                          fontWeight: 600,
                        }}
                      >
                        {product.price}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>

      <UserFooter />
    </>
  );
}

export default CategoryProductView;
