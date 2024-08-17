import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "./AxiosInstance";

export const UseAxiosGet = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const axiosSecure = useAxiosPublic();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get('/allProduct');
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }

      fetchData();
    };
  }, [url,axiosSecure]);

  return { data, loading, error };
};
