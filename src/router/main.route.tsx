import AuthLayout from "@/layouts/auth.layout";
import UnAuthLayout from "@/layouts/unauth.layout";
import Login from "@/views/auth/login.view";
import Register from "@/views/auth/register.view";
import Daily from "@/views/daily/daily.view";
import Dashboard from "@/views/dashboard/dashboard.view";
import Monthly from "@/views/monthly/monthly.view";
import Profile from "@/views/profile/profile.view";
import Setting from "@/views/settings/setting.view";
import Store from "@/views/store/store.view";
import Weekly from "@/views/weekly/weekly.view";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<UnAuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/store" element={<Store />} />
          <Route path="/monthly" element={<Monthly />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
