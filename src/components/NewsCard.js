import React from "react";
import "./NewsCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";

function NewsCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 545 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.urlToImage}
          alt="green iguana"
        />
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => {
              navigator.share({
                title: props.title,
                text: props.description,
                url: props.url,
              });
            }}
            aria-label="share"
          >
            <ShareIcon />
          </IconButton>

          <Button
            onClick={() => {
              window.open(props.url, "_blank").focus();
            }}
            size="small"
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default NewsCard;
