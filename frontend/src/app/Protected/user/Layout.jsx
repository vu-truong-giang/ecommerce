import React, { useEffect } from "react";
import HomePage from "./Home/Page.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useNavigate, Outlet } from "react-router-dom";
import { checkProfileCompletion } from "../../service/user.services.jsx";

export default function Layout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log("Layout User:", user);
  console.log("1");
  useEffect(() => {
    if (!user) return;

    const checkProfile = async () => {
      try {
        const data = await checkProfileCompletion(user.id);
        console.log("DATA:", data);
        console.log("need_update_profile:", data?.need_update);

        if (data?.need_update) {
          navigate("/profile");
          console.log("Redirecting to profile update page.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    checkProfile();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100">
      <h3>Layout </h3>
      <Outlet />
    </div>
  );
}
