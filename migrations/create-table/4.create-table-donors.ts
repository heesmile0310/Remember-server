import { Donors } from "../../models/Donors"; //방금 만들어준 user model

console.log("======Create User Table======");

const create_table_donors = async () => {
  await Donors.sync({ force: true })
    .then(() => {
      console.log("✅Success Create User Table");
    })
    .catch((err) => {
      console.log("❗️Error in Create User Table : ", err);
    });
};

create_table_donors();
