import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function RestPage() {
  const [dog, setDog] = useState([]);

  useEffect(() => {
    const onClickSync = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result?.data?.message);
      setDog(result?.data?.message);
    };
    void onClickSync();
  }, []);

  return (
    <div>
      <img src={dog} />
      <button>동기 버튼</button>
    </div>
  );
}
