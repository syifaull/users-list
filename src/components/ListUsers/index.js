import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUsers } from "../../actions/userAction";
import CardComp from "../CardComp";
import FooterComp from "../FooterComp";

const ListUsers = () => {
  const dispatch = useDispatch();
  const { getListUsersResult, getListUsersLoading } = useSelector(
    (state) => state.kontakReducer
  );

  useEffect(() => {
    //panggil action get list
    dispatch(getListUsers());
  }, [dispatch]);

  return (
    <div>
      <div className="container glass">
        <div className="p-3 row row-cols-lg-5">
          {getListUsersResult ? (
            getListUsersResult.map((user) => {
              return (
                <div
                  key={user.id}
                  className="col d-flex justify-content-center pb-3"
                >
                  <CardComp name={user.name} />
                </div>
              );
            })
          ) : getListUsersLoading ? (
            <p>Loading..</p>
          ) : null}
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default ListUsers;
