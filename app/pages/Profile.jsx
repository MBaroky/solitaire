import { useState, useEffect } from "react";

export function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/properties")
      .then(res => res.json())
      .then(data => {
        console.log("data", data.message);
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return <div>{data.message}</div>;
}
