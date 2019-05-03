import React from "react";
import { Jumbotron, Container } from "reactstrap";

export const JumbotronAbout = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">About</h1>
          <p className="lead">
            This is my project where I build a website using React.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};
