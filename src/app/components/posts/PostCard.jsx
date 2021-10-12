import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faStar } from "@fortawesome/free-solid-svg-icons";

export default function PostCard({ post }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar src="/media/avatar-img.png">R</Avatar>}
        title={post.user.fullName}
        subheader={post.createdSince}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.imageUrl || "/media/placeholder.png"}
        alt={post.title}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {post.title}
        </Typography>
        <div className="d-flex justify-content-between mt-2">
          <div className="d-flex">
            <div className="mr-4">
              <Typography variant="subtitle1" display="block" color="darkgray">
                {post.likes.count} <FontAwesomeIcon icon={faHeart} />
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" display="block" color="darkgray">
                {post.comments.count} <FontAwesomeIcon icon={faComment} />
              </Typography>
            </div>
          </div>
          <div>
            <Typography variant="subtitle1" display="block" color="gold">
              {post.rating} <FontAwesomeIcon icon={faStar} />
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
