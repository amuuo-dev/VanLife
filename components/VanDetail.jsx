import { useEffect } from "react";
import { useParams } from "react-router-dom";
const VanDetail = () => {
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [params.id]);
  return (
    <div>
      <h1>details of van goes here</h1>
    </div>
  );
};

export default VanDetail;
