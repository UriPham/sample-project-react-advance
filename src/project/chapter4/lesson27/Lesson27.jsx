import Homework26 from "../lesson26/Homework26_detail";
import AddNewUser from "./AddNewUser";
import { getUserWithPaginate } from "../../utils/apiService";
import "./Lesson27.scss";
import { useEffect, useState } from "react";

const Lesson27 = (props) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getUserWithPaginate(3, 6);
    // console.log(res);
    if (res && res.EC === 0) {
      setListUsers(res.DT.users);
      // console.log(listUsers);
    }
  };
  const addNew = (user) => {
    setListUsers([user, ...listUsers])
  };
  
  return (
    <div className="users-container">
      <AddNewUser addNew={addNew} />
      <Homework26 listUsers={listUsers}/>
    </div>
  );
};

export default Lesson27;
