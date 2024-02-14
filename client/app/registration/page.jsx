"use client";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import React from "react";
import "./page.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Page = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/profile");
    }
  }, []);
  return (
    <div className="registration-form">
      <SignUpForm />
    </div>
  );
};

export default Page;
