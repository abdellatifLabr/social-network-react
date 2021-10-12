import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <Avatar
              src={user.imageUrl || "/media/avatar-img.png"}
              sx={{ width: 64, height: 64 }}
            />
          </div>
          <Typography variant="h6" display="block" color="primary">
            {user.fullName}
          </Typography>
          <Typography variant="span" display="block" color="darkgray">
            @{user.username}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
