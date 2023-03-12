import React from "react";
import { Card } from "react-bootstrap";

const CardComp = () => {
  return (
    <div>
      <Card style={{ width: "10rem" }}>
        <Card.Img
          variant="top"
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          className="p-1 bg-blue"
        />
      </Card>

      <div className="text-center">Nama</div>
    </div>
  );
};

export default CardComp;
