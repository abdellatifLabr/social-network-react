import React from "react";
import Grid from "@mui/material/Grid";
import UserCard from "./UserCard";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useUsers from "../../hooks/useUsers";
import Loading from "../Loading";

const UsersGrid = ({ filters, title }) => {
  const {
    data: users = {},
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
  } = useUsers(filters);

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={2} sm={4} md={12}>
        <h5 className="font-weight-bold text-uppercase">{title}</h5>
      </Grid>
      {users &&
        users.pages &&
        users.pages.map((page) =>
          page.data.map((user, idx) => (
            <Grid key={idx} item xs={2} sm={4} md={4}>
              <UserCard user={user} />
            </Grid>
          ))
        )}
      <Grid item xs={2} sm={4} md={12}>
        {isLoading && <Loading />}
        {isFetchingNextPage && <Loading />}
      </Grid>
      {hasNextPage && (
        <Grid item xs={2} sm={4} md={12}>
          <div className="text-center">
            <Button
              color="secondary"
              variant="contained"
              onClick={() => fetchNextPage()}
            >
              Show more
            </Button>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default UsersGrid;
