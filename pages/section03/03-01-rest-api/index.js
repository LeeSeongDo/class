import React from "react";
import axios from "axios";
import { useState } from "react";

export default function RestPage() {
  const [data, setData] = useState([]);

  let onClickAsync = async () => {
    const data = await axios.get("https://koreanjson.com/users");
    setData(data.data);
    console.log(data);
  };

  let onClickSync = () => {
    const data = axios.get("https://koreanjson.com/users");
    console.log(data);
  };

  return (
    <div>
      <button onClick={onClickAsync}>동기 버튼</button>
      <button onClick={onClickSync}>비동기 버튼</button>

      {data.map((data2) => (
        <p key={data2.id}>{data2.name}</p>
      ))}
    </div>
  );
}
