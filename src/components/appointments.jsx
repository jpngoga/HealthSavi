import React from "react";
import Hero from "./hero";
import { NavLink, Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Nav from "./navigation/nav";
const Appointments = () => {
  return (
    <>
      <Nav
        title="Appointments"
        description="You Have Been Waiting For"
        image="https://ik.imagekit.io/apptoto/wp-content/uploads/2017/06/calendar-appointment-confirmed.jpg"
      />

      <NavLink to="/appointmentsPage" style={{ textDecoration: "none" }}>
        <Hero
          title="Appointments"
          description="You Have Been Waiting For"
          image="https://www.communicloud.com/wp-content/uploads/2021/12/Security-in-Healthcare.jpg"
          link="/docMemberShip"
        />
      </NavLink>
    </>
  );
};

export default Appointments;
