/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
 
//  School Bus Booking System React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Student Name", accessor: "author", width: "45%", align: "left" },
      { Header: "School", accessor: "function", align: "left" },
      { Header: "Gov ID", accessor: "status", align: "center" },
      { Header: "Active Days", accessor: "activedays", aligh: "center"},
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Sacred Heart Minor Seminary Gozo" description="Year 10" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          11189G
          </MDTypography>
        ),
        activedays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Mon Tue Wed Thu Fri
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Sacred Heart Minor Seminary Gozo" description="Year 10" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          11189G
          </MDTypography>
        ),
        activedays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Mon Tue Wed Thu Fri
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Sacred Heart Minor Seminary Gozo" description="Year 10" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          11189G
          </MDTypography>
        ),
        activedays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Mon Tue Wed Thu Fri
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Sacred Heart Minor Seminary Gozo" description="Year 10" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          11189G
          </MDTypography>
        ),
        activedays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Mon Tue Wed Thu Fri
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Sacred Heart Minor Seminary Gozo" description="Year 10" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          11189G
          </MDTypography>
        ),
        activedays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Mon Tue Wed Thu Fri
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Sacred Heart Minor Seminary Gozo" description="Year 10" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          11189G
          </MDTypography>
        ),
        activedays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Mon Tue Wed Thu Fri
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
