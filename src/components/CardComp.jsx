import { faHeart, faMessage, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";

const CardComp = (props) => {
  return (
    <div>
      <Card style={{ width: "10rem" }} className="bg-color">
        <Card.Img
          variant="top"
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          className="p-1 "
        />
        <div className="row text-center mx-3 pb-1 gray-icon">
          <div className="col">
            <FontAwesomeIcon icon={faHeart} onClick={props.favoriteBut} />
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
      </Card>

      <div className="text-center">{props.name}</div>
    </div>
  );
};

export default CardComp;
