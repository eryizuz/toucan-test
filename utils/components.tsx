import {
  Avatar,
  Box,
  Link,
  Typography,
  styled,
} from "@mui/material";

export const StyledWhiteTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  color: "#fff",
  fontSize: "36px",
  fontFamily: "HelveticaNeue,Helvetica Neue,helvetica,Sans-Serif",
}));

export const StyledBlueTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  color: "#324192",
  fontSize: "36px",
  fontWeight: 700,
  fontFamily: "Arial,Helvetica,sans-serif",
}));

export const StyledFooterTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
  color: "#fff",
  fontSize: "17px",
  fontFamily: "Arial,Helvetica,sans-serif",
  fontWeight: "bold",
  marginBottom: "10px",
}));

export const StyledFooterText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
    textAlign: "center",
  },
  color: "#fff",
  fontSize: "15px",
  fontFamily: "sans-serif",
  fontWeight: "normal",
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  color: "#605E5E",
  fontSize: "18px",
  fontFamily: "Raleway,sans-serif",
  textAlign: "left",
  fontWeight: 600,
}));
export const ParagraphSContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: "280px",
  },
  maxWidth: "380px",
}));

export const NavLink = styled(Link)(({ theme }) => ({
  fontFamily: "Raleway",
  fontWeight: 600,
  color: "#8691C5",
  textDecoration: "none",
  ":hover": {
    color: "#EA7226",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));

export const ResponsiveLink = styled(Link)(({ theme }) => ({
  fontFamily: "Raleway",
  fontWeight: 900,
  color: "#000",
  textDecoration: "none",
}));

export const AttachedImageContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    backgroundPosition: "0px 10px",
    backgroundSize: "100%",
    height: "120px",
  },
  [theme.breakpoints.down("md")]: {
    backgroundPosition: "0px 10px",
    backgroundSize: "100%",
  },
  width: "100%",
  height: "200px",
  position: "relative",
  backgroundImage: `url('/pc.jpg')`,
  backgroundAttachment: "fixed",
  fontWeight: "bolder",
  backgroundPosition: "250px 10px",
  backgroundSize: "70%",
}));

export const ContactImageContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    backgroundSize: "40%",
    backgroundPosition: "400px 200px",
  },
  [theme.breakpoints.down("md")]: {
    backgroundSize: "140%",
    backgroundPosition: "100px 100px",
  },
  [theme.breakpoints.up("md")]: {
    backgroundSize: "120%",
    backgroundPosition: "100px 100px",
  },
  backgroundImage: `url('/contact.jpg')`,
  backgroundAttachment: "fixed",
  backgroundPosition: "200px 100px",
  backgroundSize: "70%",
  fontWeight: "bolder",
  width: "100%",
  height: "200px",
  position: "relative",
}));

export const MapContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "900px",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    minHeight: "600px",
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: "900px",
  },
  [theme.breakpoints.up("md")]: {
    minHeight: "1000px",
  },
}));

export const AmericaMap = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  width: "100%",
  height: "auto",
  borderRadius: "0px",
  position: "absolute",
  top: "0px",
}));

export const WhatWeDoContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    right: "10px",
    width: "220px",
  },
  [theme.breakpoints.up("md")]: {
    right: "140px",
    width: "220px",
  },
  [theme.breakpoints.up("lg")]: {
    right: "200px",
    width: "220px",
  },
  position: "absolute",
  top: "20px",
  right: "270px",
  width: "250px",
}));

export const WhatWeDoFixedContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const OurWhyContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    left: "0px",
    bottom: "100px",
  },
  [theme.breakpoints.up("md")]: {
    left: "130px",
    bottom: "40px",
  },
  [theme.breakpoints.up("lg")]: {
    left: "230px",
    bottom: "0px",
  },
  position: "absolute",
  bottom: "180px",
  left: "300px",
  width: "370px",
}));

export const OurWhyContainerFixed = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyledOpaqueImage = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  width: "100%",
  height: "auto",
  borderRadius: "0px",
  opacity: 0.4,
}));

export const StyledStepsImage = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
  width: "100%",
  height: "auto",
  borderRadius: "0px",
}));
