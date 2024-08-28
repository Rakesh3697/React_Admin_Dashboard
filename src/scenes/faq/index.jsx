import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What data can I manage on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dashboard allows you to manage various data including team management, contact information, and invoice balances.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I update my profile information?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can update your profile information using the Profile Form page on the dashboard. This allows you to edit personal details, contact information, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I manage my schedule?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Calendar page on the dashboard helps you manage your schedule, set reminders, and plan events efficiently.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What types of charts are available on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dashboard includes various charts such as Bar Chart, Pie Chart, Line Chart, and Geography Chart to help you visualize your data effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where can I find the FAQ page?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The FAQ Page is accessible from the dashboard and provides answers to commonly asked questions about managing and navigating the platform.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
