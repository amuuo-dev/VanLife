import { useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);
  console.log(vans);
  return (
    <div>
      <h1>vans goes here</h1>
    </div>
  );
};

export default Vans;
