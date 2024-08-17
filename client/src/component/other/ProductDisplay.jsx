import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hook/AxiosInstance";
import Card from "./../Card";

export const ProductDisplay = () => {
    
  const axiosPublic = useAxiosPublic();
  const [loading,setLoading]=useState(true)
  const [Grocery, setGrocery] = useState(null);
  const [MakeUp, setMakeUp] = useState(null);
  const [Furniture, setFurniture] = useState(null);
  const [electronic, setElectronic] = useState(null);
  /* gricert */
  useEffect(() => {
    axiosPublic
      .get("/Grocery")
      .then((res) => setGrocery(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axiosPublic
      .get("/MakeUp")
      .then((res) => setMakeUp(res.data))
      .catch((err) => console.log(err));
  }, []);
  {/* funniture */}
  useEffect(() => {
 
    axiosPublic
      .get("/Furniture")
      .then((res) => setFurniture(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axiosPublic
      .get("/electronic")
      .then((res) => setElectronic(res.data))
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className="px-4 py-6 bg-[#FF2279]/15 mt-10">
    {/* grocery */}
          <div>
        <h1 className="font-bold text-4xl my-2">Grocery </h1>
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
          {Grocery?.slice(0, 3).map((product) => (
            <Card key={product._id} data={product} />
          ))}
        </div>
      </div>

{/* furnitur */}
<div>
<h1 className="font-bold text-4xl my-2">Make Up </h1>
<div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
  {MakeUp?.slice(0, 3).map((product) => (
    <Card key={product._id} data={product} />
  ))}
</div>
</div>

{/* funiture */}
<div>
<h1 className="font-bold text-4xl my-2">Furniture</h1>
<div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
  {Furniture?.slice(0, 3).map((product) => (
    <Card key={product._id} data={product} />
  ))}
</div>
</div>
<div>
<h1 className="font-bold text-4xl my-2">Electronic</h1>
<div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
  {electronic?.slice(0, 3).map((product) => (
    <Card key={product._id} data={product} />
  ))}
</div>
</div>




    </div>
  );
};
