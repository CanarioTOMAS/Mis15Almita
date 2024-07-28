"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
export const Location = () => {
  return (
    <Card
      sx={{
        // background: 'radial-gradient(circle, #eeeeee 0%, #d7d7d7 100%)',
        boxShadow: "10px 10px 5px 0px rgba(217,217,217,0.5)",
        borderRadius: "20px",
      }}
      style={{
        backgroundColor:'#e8e8e8'
      }}
      className="bg-cover"
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Mate",
            color: "black",
            fontWeight: 700,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            style={{ margin: "auto" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"
            />
          </svg>
          UBICACÍON
        </Typography>
        <Typography variant="h4" fontFamily={"Libre Baskerville"}>
          Quincho Monet
        </Typography>
      </CardContent>
      <CardActions sx={{ textAlign: "center", m: "auto" }}>
        <Button
          sx={{ bgcolor: "black", color: "white", borderRadius: 60 }}
          fullWidth
          href="https://www.google.com/maps/place/Salon+monet/@-32.4413787,-63.2436601,15z/data=!4m6!3m5!1s0x95cc43a9d56a69a5:0x2d22eeb7efbff2fa!8m2!3d-32.4413778!4d-63.2375987!16s%2Fg%2F11bw8m2yg6?entry=ttu"
        >
          ¿Cómo llegar?
        </Button>
      </CardActions>
    </Card>
  );
};
