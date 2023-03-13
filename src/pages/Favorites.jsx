import React, { useEffect, useState } from "react";
import CardComp from "../components/CardComp";

const Favorites = () => {
  const [users, setUsers] = useState([]);

  const getFavorite = () => {
    setUsers(JSON.parse(localStorage.getItem("favorite")));
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
              <CardComp name={user.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
