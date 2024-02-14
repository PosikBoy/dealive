"use client";

import SignInForm from "@/components/SignInForm/SignInForm";
import "./page.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/profile");
    }
  }, []);
  return (
    <div className="login-form">
      <SignInForm />
    </div>
  );
};

export default Page;
