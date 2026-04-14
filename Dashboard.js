import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/patients")
      .then(res => setPatients(res.data));
  }, []);

  return (
    <div>
      <h1>Clinical Dashboard</h1>
      {patients.map(p => (
        <div key={p.id}>{p.name} - {p.condition}</div>
      ))}
    </div>
  );
}