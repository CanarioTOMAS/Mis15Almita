import Image from "next/image";
import { Header } from "./components/header";
import { Timer } from "./components/timer";
import { Welcome } from "./components/welcome";
import { Dresscode } from "./components/dresscode";
import { Location } from "./components/location";
import MusicPlayer from "./components/musicController";
import GiftComponent from "./components/giftAction";
import FormAssist from "./components/formAsistencia";
import GiftBox from "./components/exampleGift";
import Box from "@mui/material/Box";
import ImagenAlma from "../public/Imagen2-Alma.jpeg";
import ImagenAlma2 from "../public/Imagen3-Alma.jpeg";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Timer
        initialTime={new Date("2024-08-17T18:00:00-03:00").getTime()}
      ></Timer>
      <Welcome></Welcome>

      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={ImagenAlma}
          alt="Mis 15 - ALMA"
          style={{
            width: "100%",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85% ,transparent )",
          }}
        />
      </Box>
      <Grid
        container
        marginTop={"20%"}
        marginBottom={"20%"}
        zIndex={200}
        color={"white"}
      >
        <Grid item xs={12} md={4} p={6}>
          <Location></Location>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 200,
        }}
      >
        <Image
          src={ImagenAlma2}
          alt="Mis 15 - ALMA"
          style={{
            width: "100%",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85% ,transparent )",
          }}
        />
      </Box>
      <Box
        sx={{
          p: 6,
          pb: 10,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontFamily: "Libre Baskerville",
            color: "black",
            fontWeight: 900,
          }}
        >
          CONFIRMAR ASISTENCIA ANTES DEL 10/08
        </Typography>
        <Button sx={{color:'#000000',bgcolor:'#ffffff'}} href="https://wa.me/543571311480?text=%C2%A1Hola!%F0%9F%91%8B*%20Confirmamos%20asistencia*:%0A%0APara%20compartir%20y%20festejar%20el%20cumple%20de%20Lola%20&%20Nico%F0%9F%8E%8A%F0%9F%8E%8A"> Confirmar asistencia </Button>
      </Box>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}
