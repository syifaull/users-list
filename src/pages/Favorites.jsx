import React, { useEffect, useState } from "react";
import CardComp from "../components/CardComp";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getFavorite = () => {
    setUsers(JSON.parse(localStorage.getItem("favorite")));
  };

  const handleDetail = (user) => {
    navigate("/detail", {
      state: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        address: user.address,
        phone: user.phone,
        website: user.website,
        company: user.company,
      },
    });
  };

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <div className="container glass space">
      <div className="p-3 row row-cols-lg-5">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="col d-flex justify-content-center pb-3"
            >
              <CardComp name={user.name} detail={() => handleDetail(user)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
