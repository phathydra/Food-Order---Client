import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import "../styles/components/DishCard_admin.css";

const DishCard = ({ dish, onEdit, onDelete }) => {
  return (
    <Card
      className="card-container"
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <CardMedia
        component="img"
        image={dish.image}
        alt={dish.name}
        className="card-image"
        sx={{ height: 140, objectFit: "cover" }} // Giới hạn chiều cao ảnh
      />
      <CardContent className="card-content" sx={{ flexGrow: 1 }}>
        <Box className="card-title" sx={{ height: "30px" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {dish.name}
          </Typography>
        </Box>
        <Box className="card-description" sx={{ height: "40px" }}>
          {" "}
          {/* Giảm chiều cao mô tả */}
          <Typography variant="body2" color="text.secondary" noWrap>
            {dish.description}{" "}
            {/* Sử dụng noWrap để không hiển thị quá nhiều dòng */}
          </Typography>
        </Box>
        <Box className="card-price" sx={{ height: "30px" }}>
          <Typography
            variant="body2"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Price: {dish.price} đồng
          </Typography>
        </Box>
        <Box className="card-quantity" sx={{ height: "30px" }}>
          <Typography variant="body2" color="text.secondary">
            Quantity: {dish.quantity}
          </Typography>
        </Box>
      </CardContent>
      <CardActions className="card-actions">
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => onEdit(dish)}
        >
          Chỉnh sửa
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => onDelete(dish.id)}
        >
          Xóa
        </Button>
      </CardActions>
    </Card>
  );
};

export default DishCard;
