import React, { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";

import { getUserData } from "../api";
import DashLayout from "../components/dashboardLayout";
import UserTable from "../components/userTable";

function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setUsers(data);
      } catch (e) {
        setUsers([]);
        console.log(e);
      }
    };

    fetchUserData();
  }, []);

  return (
    <DashLayout>
      <Stack spacing={3}>
        <Typography>Users data</Typography>
        <UserTable data={users} />
      </Stack>
    </DashLayout>
  );
}

export default Dashboard;
