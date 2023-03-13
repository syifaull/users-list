import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation } from "react-router-dom";
import MapsShow from "../components/MapsShow";

const Detail = () => {
  const location = useLocation();
  const company = location.state.company;
  const address = location.state.address;
  const latlong = address.geo;

  return (
    <div className="container glass d-flex p-5">
      <div className="">
        <img
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          className="img-detail"
        />
        <div className="d-flex">
          <div className="">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <div className="">
            <div>{company.name}</div>
            <div>{company.catchPhrase}</div>
            <div>{company.bs}</div>
          </div>
        </div>
      </div>
      <div className="">
        <div>Name: {location.state.name}</div>
        <div>Username: {location.state.username}</div>
        <div>Email: {location.state.email}</div>
        <div>Phone: {location.state.phone}</div>
        <div>Website: {location.state.name}</div>
        <div className="d-flex">
          <div>Address:</div>
          <div>
            <div>Street: {address.street}</div>
            <div>Suite: {address.suite}</div>
            <div>City: {address.city}</div>
            <div>Zipcode: {address.zipcode}</div>
            <div>
              <MapsShow
                // size={{ width: "40rem" }}
                lat={parseInt(latlong.lat)}
                long={parseInt(latlong.lng)}
                popup={location.state.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
