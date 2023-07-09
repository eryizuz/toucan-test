import {
  AttachedImageComponent,
  BlueTitle,
  Footer,
  Header,
  OrangeBtn,
  OrangeComponent,
  ParagraphComponent,
  Text,
} from "@/components/LayoutComponents";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  AmericaMap,
  MapContainer,
  OurWhyContainer,
  OurWhyContainerFixed,
  ParagraphSContainer,
  StyledStepsImage,
  WhatWeDoContainer,
  WhatWeDoFixedContainer,
} from "@/utils/components";

const WhatWeDo = () => {
  return (
    <Box>
      <BlueTitle text="What We Do" />
      <ParagraphComponent>
        Toucan is a U.S.-based company using on-shore and near-shore software
        developers. We engineer world-class software to meet the real-world
        needs of our clients. All our teams and projects are managed in the
        U.S., and we never compromise quality.
      </ParagraphComponent>
    </Box>
  );
};

const WhatWeDoAbosolute = () => {
  return (
    <WhatWeDoContainer>
      <WhatWeDo />
    </WhatWeDoContainer>
  );
};

const WhatWeDoFixed = () => {
  return (
    <WhatWeDoFixedContainer>
      <WhatWeDo />
    </WhatWeDoFixedContainer>
  );
};

const OurWhy = () => {
  return (
    <Box>
      <BlueTitle text='Our "Why"' />
      <ParagraphComponent>
        Our “why” can be summed up in one word, empowerment. We build
        extraordinary software that empowers our clients to achieve their
        business objectives. And, at the same time make a profound, positive
        difference that empowers the lives of our employees and their families.
      </ParagraphComponent>
      <ParagraphComponent>
        We hire amazingly talented developers that don&apos;t have the
        opportunity to find employment in their home countries of Latin America.
        Governments and other influences beyond their control have taken that
        from them, making it almost impossible to earn a living doing what they
        love to do most – build software. We provide them with that opportunity.
      </ParagraphComponent>
    </Box>
  );
};

const OurWhyAbsolute = () => {
  return (
    <OurWhyContainer>
      <OurWhy />
    </OurWhyContainer>
  );
};

const OurWhyFixed = () => {
  return (
    <OurWhyContainerFixed>
      <OurWhy />
    </OurWhyContainerFixed>
  );
};

export const ServicesTechnology = () => {
  return (
    <Box mt="40px" ml="40px">
      <BlueTitle text="Services & Technology" />
      <ParagraphSContainer>
        <ParagraphComponent>
          We are passionate about software development and thrive on meeting the
          needs of our clients. We deliver software solutions from vetted and
          experienced software engineers and project managers. We have experts
          in:
        </ParagraphComponent>
        <ParagraphComponent>
          Whether you need two extra developers to extend your team or 20
          developers to complete a project, we&apos;ve got you covered. Tell us
          what you are looking for, and we’ll take care of the rest.
        </ParagraphComponent>
      </ParagraphSContainer>

      <Box my="30px" sx={{ display: { xs: "none", sm: "block" } }}>
        <OrangeBtn
          onClick={() => console.log("hello")}
          text="See All Services"
        />
      </Box>
    </Box>
  );
};
export const EngagementComponent = () => {
  return (
    <Box mt="40px">
      <Box maxWidth="290px">
        <BlueTitle text="Our Engagement Process" />
      </Box>
      <Box maxWidth="350px">
        <ParagraphComponent>
          Starting an engagement with us is a simple, stress-free process. We’ve
          broken the process into 5 steps so you know what you can expect. The
          graphic on the left illustrates the steps, Click &quot;Read More&quot;
          to show the details involved in each step.
        </ParagraphComponent>
      </Box>

      <Box my="30px" sx={{ display: { xs: "none", sm: "block" } }}>
        <OrangeBtn onClick={() => console.log("hello")} text="Read More" />
      </Box>
    </Box>
  );
};

export const ImageGroup = () => {
  return (
    <Box
      sx={{
        border: "3px solid #A0A09F",
        borderRadius: "20px",
        padding: "5px",
      }}
    >
      <Avatar
        src="/development.jpg"
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "0px",
        }}
      />
    </Box>
  );
};

const StepTitle: React.FC<Text> = ({ text }) => {
  return (
    <Typography
      sx={{
        color: "#000",
        fontSize: { xs: "14px", sm: "18px" },
        fontFamily: "Arial,Helvetica,sans-serif",
        fontWeight: 700,
      }}
    >
      {text}
    </Typography>
  );
};
const StepText: React.FC<Text> = ({ text }) => {
  return (
    <Typography
      sx={{
        color: "#000",
        fontSize: { xs: "12px", sm: "16px" },
        fontFamily: "Arial,Helvetica,sans-serif",
      }}
    >
      {text}
    </Typography>
  );
};

const Step: React.FC<{ step: string; text: string }> = ({ step, text }) => {
  return (
    <Box>
      <StepTitle text={step} />
      <StepText text={text} />
    </Box>
  );
};

export const StepsComponent = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <StyledStepsImage src="/steps.jpg" />

      <Box
        sx={{
          width: {
            xs: "150px",
            sm: "100%",
          },
          position: "absolute",
          top: {
            xs: "10px",
            sm: "0px",
          },
          left: {
            xs: "220px",
            sm: "200px",
            md: "190px",
            lg: "240px",
          },
        }}
      >
        <Step step="Step-1" text="Initial Discussion - Phone or Zoom" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: {
            xs: "50px",
            sm: "100%",
          },
          top: {
            xs: "80px",
            sm: "70px",
            md: "60px",
            lg: "80px",
          },
          left: {
            xs: "320px",
            sm: "280px",
            md: "240px",
            lg: "340px",
          },
        }}
      >
        <Step step="Step-2" text="Discovery Meeting" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: {
            xs: "50px",
            sm: "100%",
          },
          top: {
            xs: "180px",
            sm: "160px",
            md: "140px",
            lg: "200px",
          },
          left: {
            xs: "350px",
            sm: "320px",
            md: "270px",
            lg: "370px",
          },
        }}
      >
        <Step step="Step-3" text="Project Estimate" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: {
            xs: "50px",
            sm: "50%",
            md: "70%",
          },
          top: {
            xs: "290px",
            sm: "250px",
            md: "220px",
            lg: "310px",
          },
          left: {
            xs: "320px",
            sm: "290px",
            md: "240px",
            lg: "340px",
          },
        }}
      >
        <Step step="Step-4" text="Collect resources and identify the team" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: {
            xs: "150px",
            sm: "100%",
          },
          top: {
            xs: "390px",
            sm: "350px",
            md: "300px",
            lg: "400px",
          },
          left: {
            xs: "220px",
            sm: "200px",
            md: "170px",
            lg: "240px",
          },
        }}
      >
        <Step step="Step-5" text="Begin Development" />
      </Box>
    </Box>
  );
};

export default function Home() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    router.push("/api/auth/login");
  }
  return (
    <Box sx={{}}>
      <Header />
      <Grid container>
        <Grid item xs={0} md={2} />
        <Grid
          item
          xs={12}
          md={8}
          sx={{ height: { xs: "150px", sm: "130px" }, marginTop: "30px" }}
        >
          <AttachedImageComponent />
        </Grid>
        <Grid item xs={0} md={2} />

        <Grid item xs={12} md={12} sx={{ padding: "0px 20px" }}>
          <WhatWeDoFixed />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ padding: "0px 20px", marginTop: { xs: "30px", sm: "0px" } }}
        >
          <MapContainer>
            <AmericaMap src="/mapa.jpg" />
            <WhatWeDoAbosolute />
            <OurWhyAbsolute />
          </MapContainer>
        </Grid>

        <Grid item xs={12} md={12} sx={{ padding: "0px 20px" }}>
          <OurWhyFixed />
        </Grid>

        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={8}>
          <OrangeComponent />
        </Grid>
        <Grid item md={2} />

        <Grid item xs={0} sm={1} md={2} />
        <Grid item xs={12} sm={6} md={4}>
          <ServicesTechnology />
        </Grid>
        <Grid
          item
          sx={{ margin: { xs: "30px 0px", sm: "60px 0px" } }}
          xs={12}
          sm={4}
          md={4}
          mt="80px"
        >
          <ImageGroup />
        </Grid>
        <Grid item xs={0} sm={2} md={2} />

        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={8}>
          <Avatar
            src="/lenguajes.jpg"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "0px",
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Box mb="30px" sx={{ display: { xs: "block", sm: "none" } }}>
            <OrangeBtn
              onClick={() => console.log("hello")}
              text="See All Services"
            />
          </Box>
        </Grid>
        <Grid item xs={0} md={2} />

        <Grid
          item
          xs={12}
          sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}
        >
          <EngagementComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={3.2} mt="80px">
          <StepsComponent />
        </Grid>
        <Grid item sm={1.5} md={2} />
        <Grid
          item
          sm={4}
          md={4}
          sx={{ marginTop: "70px", display: { xs: "none", sm: "block" } }}
        >
          <EngagementComponent />
        </Grid>
        <Grid item sm={0.5} md={2.8} />

        <Grid item xs={12} md={12} mt="80px">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BlueTitle text="Let's start a conversation. Contact us today!" />
            <Box mt="30px" mb="50px">
              <OrangeBtn
                onClick={() => console.log("hello")}
                text="Click Here or see Below"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
