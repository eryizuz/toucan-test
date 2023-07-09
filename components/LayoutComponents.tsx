import { Avatar, Box, Button, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import {
  AttachedImageContainer,
  ContactImageContainer,
  NavLink as Link,
  Paragraph,
  ResponsiveLink,
  StyledBlueTitle,
  StyledFooterText,
  StyledFooterTitle,
  StyledOpaqueImage,
  StyledWhiteTitle,
} from "../utils/components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export interface Text {
  text: string;
}
export const LayoutContainer: React.FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Box>{children}</Box>
    </Box>
  );
};
const ContainerTucanImg = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "170px",
    height: "51px",
  },
  [theme.breakpoints.up("md")]: {
    width: "170px",
    height: "52px",
  },
}));

export const TucanImage: React.FC = () => {
  return (
    <ContainerTucanImg>
      <Avatar
        src={"/tucan.png"}
        sx={{
          width: "100%",
          height: "auto",
        }}
      />
    </ContainerTucanImg>
  );
};

const MenuBtn: React.FC<{ onClick: () => void; open: boolean }> = ({
  onClick,
  open,
}) => {
  return (
    <Box sx={{ cursor: "pointer" }} onClick={onClick}>
      {open ? (
        <CloseIcon sx={{ color: "#000", opacity: 0.7 }} />
      ) : (
        <MenuIcon sx={{ color: "#000", opacity: 0.7 }} />
      )}
    </Box>
  );
};

const NavLink: React.FC<{ text: string; url: string }> = ({ text, url }) => {
  return <Link href={url}>{text}</Link>;
};

const MenuLink: React.FC<{ text: string; url: string }> = ({ text, url }) => {
  return <ResponsiveLink href={url}>{text}</ResponsiveLink>;
};

export const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginRight: "20px",
        minWidth: "450px",
        // background: '#000'
      }}
    >
      <NavLink text="Home" url="/" />
      <NavLink text="Services" url="/" />
      <NavLink text="Our Processes" url="/" />
      <NavLink text="Contact" url="/contact" />
    </Box>
  );
};

export const AttachedImageComponent = () => {
  return (
    <AttachedImageContainer>
      <Box
        sx={{
          color: "#fff",
          fontFamily: "Arial",
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
          },
          backgroundColor: "rgba(50,65,146,60%)",
          width: "100%",
          height: "100%",
          letterSpacing: "3px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        We Engineer Opportunity
      </Box>
    </AttachedImageContainer>
  );
};

export const ContactImageComponent = () => {
  return (
    <ContactImageContainer>
      <Box
        sx={{
          color: "#fff",
          fontFamily: "Arial",
          fontSize: "3rem",
          backgroundColor: "rgba(50,65,146,60%)",
          width: "100%",
          height: "100%",
          textAlign: "center",
          lineHeight: "200px",
          letterSpacing: "3px",
        }}
      >
        Contact Us
      </Box>
    </ContactImageContainer>
  );
};

export const MapImageComponent = () => {
  return (
    <Box width="100%" height="200px" position="relative">
      <Image src="/pc.jpg" alt="pc" fill />
    </Box>
  );
};

export const BlueTitle: React.FC<Text> = ({ text }) => {
  return <StyledBlueTitle>{text}</StyledBlueTitle>;
};

export const ParagraphComponent: React.FC<{ children: string }> = ({
  children,
}) => {
  return (
    <Box mt="15px">
      <Paragraph>{children}</Paragraph>
    </Box>
  );
};
export const WhiteParagraph: React.FC<{ children: string }> = ({
  children,
}) => {
  return (
    <Box mt="5px" sx={{}}>
      <Paragraph
        sx={{
          color: "#fff",
        }}
      >
        {children}
      </Paragraph>
    </Box>
  );
};

export const WhiteTitle: React.FC<Text> = ({ text }) => {
  return <StyledWhiteTitle>{text}</StyledWhiteTitle>;
};

export const WhiteSubtitle: React.FC<Text> = ({ text }) => {
  return (
    <Typography
      sx={{
        color: "#fff",
        fontSize: "22px",
        fontFamily: "HelveticaNeue,Helvetica Neue,helvetica,Sans-Serif",
      }}
    >
      {text}
    </Typography>
  );
};

export const OpaqueImage: React.FC<{ url: string }> = ({ url }) => {
  return <StyledOpaqueImage src={url} />;
};

export const ListItem: React.FC<Text> = ({ text }) => {
  return (
    <li
      style={{
        color: "#fff",
        margin: "5px 0px",
        fontSize: "18px",
        fontFamily: "Raleway,sans-serif",
        fontWeight: 600,
      }}
    >
      {text}
    </li>
  );
};

export const OrangeBtn: React.FC<{ onClick: () => void; text: string }> = ({
  onClick,
  text,
}) => {
  return (
    <Button
      sx={{
        width: {
          xs: "100%",
          md: "300px",
          lg: "300px",
        },
        borderRadius: "0px",
        background: "#EA7226",
        color: "#fff",
        fontSize: {
          xs: "18px",
          md: "14px",
        },
        fontWeight: 600,
        fontFamily: "Raleway,sans-serif",
        border: "1px solid #fff",
        margin: "1px",
        boxShadow: "none",
        ":hover": {
          color: "#EA7226",
          background: "#fff",
          boxShadow: "none",
          border: "1px solid #EA7226",
          borderRadius: "0px",
        },
      }}
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const OrangeComponent = () => {
  return (
    <Grid
      container
      sx={{ background: "#EA7226", position: { xs: "relative" } }}
    >
      <Grid item sm={12} sx={{ marginTop: { xs: "10px", sm: "40px" } }} />

      <Grid item xs={0} sm={1} md={1} />
      <Grid
        item
        xs={12}
        sm={5}
        md={4}
        sx={{
          marginTop: { xs: "40px", sm: "100px" },
          display: "flex",
          justifyContent: { xs: "center" },
        }}
      >
        <WhiteTitle text="Why Chose Toucan?" />
      </Grid>
      <Grid item sm={6} md={7} />

      <Grid item sm={1} md={1} />
      <Grid
        item
        xs={12}
        sm={6}
        md={6.45}
        mt="30px"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          marginLeft: {
            xs: "40px",
            sm: "0px",
          },
        }}
      >
        <Box mr="10px" sx={{ marginRight: "10px" }}>
          <WhiteTitle text="1." />
        </Box>

        <Box sx={{ width: { xs: "60%" } }}>
          <Box mt="5px">
            <WhiteSubtitle text="We only hire A+ developers." />
          </Box>
          <WhiteParagraph>
            Most of our developers live and work in Venezuela. They are some of
            the best and most experienced developers on the planet. They are
            wonderful people with an amazing work ethic and are excited to have
            the opportunity to work with U.S. companies!
          </WhiteParagraph>
        </Box>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          position: { xs: "absolute", sm: "static" },
          top: "80px",
          left: "180px",
        }}
        sm={5}
        md={2.9}
      >
        <OpaqueImage url="/idea.jpg" />
      </Grid>
      <Grid item md={1.65} />

      <Grid
        item
        sx={{
          position: { xs: "absolute", sm: "static" },
          top: "400px",
          left: "120px",
        }}
        xs={12}
        sm={6}
        md={4}
        pl="20px"
      >
        <OpaqueImage url="/USA.jpg" />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          marginLeft: {
            xs: "40px",
            sm: "0px",
          },
        }}
        item
        sm={5}
        md={6}
        mt="30px"
      >
        <Box mr="10px">
          <WhiteTitle text="2." />
        </Box>

        <Box sx={{ width: { xs: "60%", sm: "100%" } }}>
          <Box mt="5px">
            <WhiteSubtitle text="All projects are U.S.-managed." />
          </Box>
          <WhiteParagraph>
            Unlike most of our competitors, all our near-shore developers and
            projects are managed exclusively from the U.S.
          </WhiteParagraph>
        </Box>
      </Grid>
      <Grid item xs={1} md={2} />

      <Grid item xs={0} sm={1} md={1} />
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          marginLeft: {
            xs: "40px",
            sm: "0px",
          },
        }}
        xs={12}
        sm={5}
        md={6.45}
        mt="30px"
        display="flex"
        flexDirection="row"
      >
        <Box mr="10px">
          <WhiteTitle text="3." />
        </Box>

        <Box>
          <Box mt="5px">
            <WhiteSubtitle text="Same time zone as the U.S." />
          </Box>
          <WhiteParagraph>
            It may not seem like a big deal but when it comes to scheduling
            meetings that include our development teams it makes communication
            so much easier and the project runs much smoother.
          </WhiteParagraph>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          position: { xs: "absolute", sm: "static" },
          top: "570px",
          left: "170px",
        }}
        xs={6}
        sm={4}
        md={2.9}
      >
        <OpaqueImage url="/clock.jpg" />
      </Grid>
      <Grid item xs={2} sm={2} md={1.65} />

      <Grid item xs={12} sm={0} mt="30px" />

      <Grid item xs={1} sm={1} md={1} />
      <Grid
        item
        sx={{
          position: { xs: "absolute", sm: "static" },
          top: "800px",
          left: "170px",
        }}
        xs={6}
        sm={5}
        md={3}
      >
        <OpaqueImage url="/people.jpg" />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          marginLeft: {
            xs: "40px",
            sm: "0px",
          },
        }}
        xs={12}
        sm={5}
        md={5.5}
        display="flex"
        flexDirection="row"
      >
        <Box mr="10px">
          <WhiteTitle text="4." />
        </Box>

        <Box>
          <Box mt="5px">
            <WhiteSubtitle text="Bi-lingual developers" />
          </Box>
          <WhiteParagraph>
            When it comes to software, development communication is a key
            element. Without a clear understanding on both sides, a project can
            run off the rails quickly. No &quot;lost in translation&quot; with
            us.
          </WhiteParagraph>
        </Box>
      </Grid>
      <Grid item xs={2} sm={1} md={2.5} />

      <Grid item xs={1} sm={1} md={1} />
      <Grid
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          marginLeft: {
            xs: "40px",
            sm: "0px",
          },
        }}
        item
        xs={12}
        sm={6}
        md={6}
        mt="30px"
        display="flex"
        flexDirection="row"
      >
        <Box mr="10px">
          <WhiteTitle text="5." />
        </Box>

        <Box sx={{ width: { xs: "70%" } }}>
          <Box mt="5px">
            <WhiteSubtitle text="Safety and Security!" />
          </Box>
          <ul>
            <ListItem text="Background checks on all associates" />
            <ListItem text="Data security guarantee" />
            <ListItem text="Secure U.S. based hosting" />
            <ListItem text="Practice compliance, both technological and legal" />
            <ListItem text="Ongoing QA quality checks" />
          </ul>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          position: { xs: "absolute", sm: "static" },
          top: "1000px",
          left: "260px",
        }}
        xs={12}
        sm={5}
        md={3.5}
      >
        <OpaqueImage url="/security.jpg" />
      </Grid>
      <Grid item xs={1} sm={1} md={1.5} />

      <Grid item xs={0} sm={0} md={1} />

      <Grid
        item
        sx={{
          position: { xs: "absolute", sm: "static" },
          top: "1240px",
          left: "240px",
        }}
        xs={7}
        sm={5}
        md={3}
        my="30px"
      >
        <OpaqueImage url="/6.jpg" />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          marginLeft: {
            xs: "40px",
            sm: "0px",
          },
        }}
        xs={12}
        sm={6}
        md={6.4}
        my="30px"
        display="flex"
        flexDirection="row"
      >
        <Box mr="10px">
          <WhiteTitle text="6." />
        </Box>

        <Box sx={{ width: { xs: "60%" } }}>
          <Box mt="5px">
            <WhiteSubtitle text="Better value!" />
          </Box>
          <WhiteParagraph>
            Since our developer&apos;s cost of living is much lower than the
            U.S., we can offer the best quality development at a much better
            value!
          </WhiteParagraph>
        </Box>
      </Grid>
      <Grid item xs={0} md={1.6} />
    </Grid>
  );
};

const FooterText: React.FC<Text> = ({ text }) => {
  return <StyledFooterText>{text}</StyledFooterText>;
};
const FooterTitle: React.FC<Text> = ({ text }) => {
  return <StyledFooterTitle>{text}</StyledFooterTitle>;
};

const MenuMovil: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          background: "#000",
          width: "100%",
          height: "100vh",
          top: "0px",
          right: "0px",
          zIndex: 2,
          opacity: 0.5,
          display: open ? "block" : "none",
        }}
      />
      <Box
        sx={{
          position: "fixed",
          background: "#fff",
          width: "70%",
          height: "100vh",
          top: "0px",
          right: "0px",
          zIndex: 2,
          display: open ? "block" : "none",
        }}
      >
        <Box
          sx={{
            background: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              onClick={() => router.push("/")}
              sx={{ marginY: " 5px" }}
            >
              Home
            </Typography>
            <Typography
              onClick={() => router.push("/")}
              sx={{ marginY: " 5px" }}
            >
              Services
            </Typography>
            <Typography
              onClick={() => router.push("/")}
              sx={{ marginY: " 5px" }}
            >
              Our Processes
            </Typography>
            <Typography
              onClick={() => router.push("/contact")}
              sx={{ marginY: " 5px" }}
            >
              Contact
            </Typography>
          </Box>

          <MenuBtn onClick={handleClose} open={open} />
        </Box>
      </Box>
    </>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <Grid container pt="40px">
      <MenuMovil open={open} handleClose={handleClose} />
      <Grid
        item
        mt="40px"
        sx={{ display: { xs: "none", md: "block" } }}
        md={2}
      />
      <Grid item sx={{ display: { xs: "block", sm: "none" } }} xs={8}>
        <TucanImage />
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MenuBtn
          open={open}
          onClick={() => {
            handleOpen();
          }}
        />
      </Grid>
      <Grid
        item
        sm={12}
        md={8}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TucanImage />
        <NavBar />
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};

const FooterTextBoxMod = styled(Box)(({ theme }) => ({
  margin: "20px 0",
  [theme.breakpoints.down("sm")]: {
    minWidth: "220px",
    maxWidth: "220px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
const FooterSocialsBoxMod = styled(Box)(({ theme }) => ({
  margin: "30px 0",
  [theme.breakpoints.down("sm")]: {
    minWidth: "220px",
    maxWidth: "220px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ".css-babmwp-MuiTypography-root": {
      display: "none",
    },
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Footer = () => {
  return (
    <Box
      sx={{
        /* padding: "50px 0", */
        background: "#212B61",
        minHeight: "250px",
        marginTop: "45px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterTextBoxMod>
            <FooterTitle text="Contact" />
            <FooterText text="Email: info@toucan-talent.com" />
            <FooterText text="Phone: +1.913.735.6202" />
          </FooterTextBoxMod>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterTextBoxMod>
            <FooterTitle text="Address" />
            <FooterText text="5440 W. 110th St, Suite 300 Overland Park, KS 66211" />
          </FooterTextBoxMod>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterSocialsBoxMod>
            <FooterTitle text="Socials" />
            <Box display="flex" flexDirection="row">
              <Box>
                <FacebookIcon sx={{ color: "#fff" }} />
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <TwitterIcon sx={{ color: "#fff" }} />
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <InstagramIcon sx={{ color: "#fff" }} />
              </Box>
            </Box>
          </FooterSocialsBoxMod>
        </Grid>
      </Grid>
    </Box>
  );
};
