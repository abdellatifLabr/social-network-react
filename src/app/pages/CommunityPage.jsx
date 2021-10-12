import React, { useState, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PostsGrid from "../components/posts/PostsGrid";
import UsersGrid from "../components/users/UsersGrid";

export default function HomePage() {
  const [timeFrame, setTimeFrame] = useState("week");

  const createdAfter = useMemo(() => {
    const date = new Date();

    switch (timeFrame) {
      case "week":
        date.setDate(date.getDate() - 7);
        break;

      case "month":
        date.setDate(date.getDate() - 30);
        break;

      case "year":
        date.setDate(date.getDate() - 365);
        break;

      case "allTime":
        return null;

      default:
        break;
    }

    return date.toISOString();
  }, [timeFrame]);

  return (
    <Row>
      <Col md={12}>
        <div className="d-flex justify-content-between">
          <div>
            <h2 className="font-weight-bold text-uppercase mb-4">Community</h2>
          </div>
        </div>
      </Col>
      <Col md={12}>
        <div className="mb-4">
          <ButtonGroup variant="contained">
            <Button
              color={timeFrame === "week" ? "secondary" : "primary"}
              onClick={() => setTimeFrame("week")}
            >
              Week
            </Button>
            <Button
              color={timeFrame === "month" ? "secondary" : "primary"}
              onClick={() => setTimeFrame("month")}
            >
              Month
            </Button>
            <Button
              color={timeFrame === "year" ? "secondary" : "primary"}
              onClick={() => setTimeFrame("year")}
            >
              Year
            </Button>
            <Button
              color={timeFrame === "allTime" ? "secondary" : "primary"}
              onClick={() => setTimeFrame("allTime")}
            >
              All time
            </Button>
          </ButtonGroup>
        </div>

        <div className="mb-5">
          <PostsGrid
            title="Highest rated"
            filters={{
              perPage: 3,
              orderBy: "rating",
              createdAfter,
            }}
          />
        </div>
        <div className="mb-5">
          <PostsGrid
            title="Most comments"
            filters={{ perPage: 3, orderBy: "comments" }}
          />
        </div>
        <div className="mb-5">
          <PostsGrid
            title="Most likes"
            filters={{ perPage: 3, orderBy: "likes" }}
          />
        </div>
        <div className="mb-5">
          <UsersGrid
            title="Most liked"
            filters={{ perPage: 3, orderBy: "most_liked" }}
          />
        </div>
        <div className="mb-5">
          <UsersGrid
            title="Most followed"
            filters={{ perPage: 3, orderBy: "most_followers" }}
          />
        </div>
        <div className="mb-5">
          <PostsGrid
            title="Newest posts"
            filters={{ perPage: 3, orderBy: "" }}
          />
        </div>
        <div className="mb-5">
          <UsersGrid
            title="Most posts"
            filters={{ perPage: 3, orderBy: "posts_count" }}
          />
        </div>
        <div className="mb-5">
          <PostsGrid
            title="Longest posts"
            filters={{ perPage: 3, orderBy: "word_count" }}
          />
        </div>
      </Col>
    </Row>
  );
}
