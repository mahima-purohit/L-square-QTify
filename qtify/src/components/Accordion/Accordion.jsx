import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";

export default function BasicAccordion() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <Typography sx={{ fontSize: "50px", fontWeight: "600" }}>
            FAQs
          </Typography>
        </div>
        <Accordion
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <AccordionSummary
            sx={{
              border: "1px solid",
            }}
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "green",
                  width: "35px",
                  height: "40px",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              top: "1823px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <AccordionSummary
            sx={{
              border: "1px solid",
            }}
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "green",
                  width: "35px",
                  height: "40px",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "white",
              color: "black",
            }}
          >
            <Typography>
              Sorry, unfortunately we don't provide the service t download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
