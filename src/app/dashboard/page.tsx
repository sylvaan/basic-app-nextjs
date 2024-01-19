"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Dashboard from "@/components/dashboard";
async function useProfile(email: string) {
  const x = localStorage.getItem("authToken");
  console.log(x);

  const response = await fetch("https://jfe-test.devto.top/users/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${x}`,
    },
  });
  const res = response.json();
  console.log(res);
  res.then((res) => {
    email = res.email;
  });

  const response2 = await fetch("https://jfe-test.devto.top/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${x}`,
    },
  });
  const res2 = response2.json();
  console.log(res2);
}
const DashboardPage = () => {
  let email: string = "";
  useEffect(() => {
    {
      //useProfile(email); supposed to be the initial function to get from API but I cannot get it right
    }
  }, []);

  return (
    <div className="container">
      <Navbar email={email} />
      <div className="main-content">
        <Sidebar />
        <Dashboard todos={[]} />
      </div>
    </div>
  );
};

export default DashboardPage;
