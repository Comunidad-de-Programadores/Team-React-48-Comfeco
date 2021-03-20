import React, { useState, useEffect } from "react";
import { GridItem, Grid, Box, Fade } from "@chakra-ui/react";
import { useSession } from "next-auth/client";

import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MiddleSection from "./MiddleSection";
import FormProfile from "../dashboard/FormProfile";
import Medals from "../dashboard/medals";
import Groups from "../dashboard/Groups/Groups";
import Events from "../dashboard/Events";
import Nav from "./Nav";

function LadingDashboard() {
  const [view, setView] = useState("profile");
  const [session, loading] = useSession();
  const [data, setData] = useState();
  const [groupD, setGroupD] = useState();

  const getData = async () => {
    if (loading) {
      return false;
    } else {
      const response = await fetch(`/api/users/${session?.user.email}`);
      const data = await response.json();
      console.log(data);
      return data;
    }
  };
  const getDataGroups = async () => {
    if (loading) {
      return false;
    } else {
      const response = await fetch(`/api/groups/`);
      const data = await response.json();
      console.log(data);
      return data;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    const fetchDataGroups = async () => {
      const data = await getDataGroups();
      setGroupD(data);
    };
    fetchData();
    fetchDataGroups();
  }, []);

  const ProfileView = () => (
    <Grid
      templateColumns={{
        sm: "1fr",
        md: "repeat(9, 1fr)",
      }}
      rowGap={{
        sm: "3rem",
        md: "initial",
      }}
    >
      <GridItem
        colSpan={{
          sm: 1,
          md: 2,
        }}
        rowStart={{
          sm: 2,
          md: 1,
        }}
        rowEnd={{
          sm: 3,
          md: 1,
        }}
        margin={{
          sm: "0 0 3rem",
          md: "initial",
        }}
      >
        <LeftSidebar click={setView} />
      </GridItem>
      <GridItem
        colSpan={{
          sm: 1,
          md: 5,
        }}
        rowStart={{
          sm: 1,
          md: 1,
        }}
        rowEnd={{
          sm: 2,
          md: 1,
        }}
        padding={{
          sm: "0 1rem",
          md: "initial",
        }}
      >
        <MiddleSection />
      </GridItem>
      <GridItem
        colSpan={{
          sm: 1,
          md: 2,
        }}
      >
        <RightSidebar />
      </GridItem>
    </Grid>
  );
  return (
    <>
      <Box>
        <Nav click={setView} />
        {view === "profile" ? (
          <Fade in={true}>
            <ProfileView />
          </Fade>
        ) : view === "badged" ? (
          <Fade in={true}>
            <Medals />
          </Fade>
        ) : view === "groups" ? (
          <Fade in={true}>
            <Groups data={groupD} />
          </Fade>
        ) : view === "form-profile" ? (
          <Fade in={true}>
            <FormProfile data={data} />
          </Fade>
        ) : view === "events" ? (
          <Fade in={true}>
            <Events />
          </Fade>
        ) : (
          <Fade in={true}>
            <ProfileView />
          </Fade>
        )}
      </Box>
    </>
  );
}

export default LadingDashboard;
