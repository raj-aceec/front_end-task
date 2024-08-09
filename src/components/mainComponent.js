import React, { useEffect } from "react";
import { connect } from "react-redux";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";
import { getUsers, addUser, deleteUser, editUser } from "../actions/userActions"; // Adjust import path as necessary
import "../assets/css/style.css";

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser,editUser } = props;

  const handleSubmit = ({ name, email }) => {
    addUser({ name, email });
  };

  const deleteEntry = (id) => {
    deleteUser(id);
  };

  const editentry=(id,newdata)=>{
    editUser(id,newdata)
  }

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="container">
      <div id="main-container-wrapper" className="ruch">
        <InputHandler onSubmit={handleSubmit} />
        <SimpleTable dataSource={userState.users} onDelete={deleteEntry} onEdit={editentry} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userState,
});

const mapDispatchToProps = {
  getUsers,
  addUser,
  deleteUser,
  editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
