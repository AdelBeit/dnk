import { ChangeEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { Toolbar } from "../../components/Toolbar";
import styles from "../../../styles/Layout.module.css";
import cs from "classnames";
import { List, UserItem } from "../../components/List";
import { useScreenStore } from "../../utils/stores";
import users from "../../utils/data/users";

// let socket: Socket;

const Users = () => {
  const dropdown = useScreenStore((state) => state.selectedDropDown);

  //   useEffect(() => {
  //     socketInitializer();
  //   }, []);

  //   const [input, setInput] = useState("");

  //   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //     setInput(e.target.value);
  //     socket.emit("input-change", e.target.value);
  //   };

  //   const socketInitializer = async () => {
  //     await fetch("/api/socket");
  //     socket = io();

  //     socket.on("connect", () => {
  //       console.log("connected");
  //     });

  //     socket.on("update-input", (msg) => {
  //       setInput(msg);
  //     });
  //   };
  const variant = "users";

  return (
    // <input
    //   placeholder="Type Something"
    //   value={input}
    //   onChange={onChangeHandler}
    // />
    <div
      className={cs(
        "drop_down_container",
        dropdown == variant && "drop",
        styles.users
      )}
    >
      <List variant={variant}>
        {users.map((user) => (
          <UserItem username={user.username} instrument={user.instrument} />
        ))}
        {/* <UserItem username="SprinkleDonut11" instrument="drums" />
        <UserItem username="SprinkleDonut11" instrument="drums" />
        <UserItem username="SprinkleDonut11" instrument="drums" />
        <UserItem username="PhoneBooth028" instrument="keys" /> */}
      </List>
      <Toolbar variant={variant} />
    </div>
  );
};

export default Users;
