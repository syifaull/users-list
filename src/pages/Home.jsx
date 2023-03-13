import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComp from "../components/CardComp";
import FooterComp from "../components/FooterComp";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const getUsers = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleFavorite = (user) => {
    if (
      localStorage.getItem("favorite") &&
      localStorage.getItem("favorite").length > 0
    )
      setFavorite(JSON.parse(localStorage.getItem("favorite")));
    // let arrObj = {
    //   name: res.title,
    //   id: res.id,
    //   img: res.poster_path,
    //   overview: res.overview,
    // };
    // let arrUsr = { user };
    favorite.push(user);
    localStorage.setItem("favorite", JSON.stringify(favorite));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="container glass">
        <div className="p-3 row row-cols-lg-5">
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="col d-flex justify-content-center pb-3"
              >
                <CardComp
                  name={user.name}
                  favoriteBut={() => handleFavorite(user)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default Home;
