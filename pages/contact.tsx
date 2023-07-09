import { InputMessage } from "@/components/InputMessage";
import {
  BlueTitle,
  ContactImageComponent,
  Footer,
  Header,
} from "@/components/LayoutComponents";
import { TextInput } from "@/components/TextInput";
import { Box, Grid, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box>
      <Header />
      <Grid container>
        <Grid item md={2} />
        <Grid
          item
          sx={{ height: { xs: "150px", sm: "130px" }, marginTop: "30px" }}
          xs={12}
          md={8}
        >
          <ContactImageComponent />
        </Grid>
        <Grid item md={2} />

        <Grid item md={12} mt="70px" display="flex" justifyContent="center">
          <BlueTitle text="Send us a note and tell us about your project" />
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          mt="70px"
          display="flex"
          justifyContent="center"
        >
          <Box
            sx={{
              width: {
                xs: "220px",
                sm: "431px",
              },
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextInput label="First Name" />
            <TextInput label="Last Name" />
            <TextInput label="Email" />
            <TextInput label="Subject" />
            <InputMessage label="Message" />

            <Button
              sx={{
                width: "142px",
                height: "30px",
                borderRadius: "1px",
                marginTop: "20px",
                backgroundColor: "#ea7226",
                padding: "0",
                ":hover": {
                  backgroundColor: "#fff",
                  color: "#ea7226",
                  border: "1px solid #ea7226",
                  boxShadow: "none",
                },
              }}
              variant="contained"
            >
              Send
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          md={12}
          mt="70px"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <BlueTitle text="Let's start a conversation. Contact us today!" />
          <Button
            sx={{
              width: "276px",
              height: "49px",
              borderRadius: "1px",
              marginTop: "20px",
              backgroundColor: "#ea7226",
              padding: "0",
              ":hover": {
                backgroundColor: "#fff",
                color: "#ea7226",
                border: "1px solid #ea7226",
                boxShadow: "none",
              },
            }}
            variant="contained"
          >
            Click Here or See Below
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
