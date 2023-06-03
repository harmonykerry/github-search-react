import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Repos({ repos }) {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {repos.map((repo) => {
        return (
          <Card className="repo-card m-3" key={repo.id}>
            <Card.Img variant="top" src={repo?.owner?.avatar_url} />
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              {repo.description && <Card.Text>{repo.description}</Card.Text>}
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="primary" href={repo.html_url} target="_blank">
                View Repo
              </Button>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
}
export default Repos;
