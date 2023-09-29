import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function QtifyTab({ handleTabChange, tabValue }) {
  // const [value, setValue] = React.useState("1");
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            aria-label="lab API tabs example"
            sx={{ color: "white" }}
          >
            <Tab label="All" value="1" sx={{ color: "white" }} />
            <Tab label="Rock" value="2" sx={{ color: "white" }} />
            <Tab label="Pop" value="3" sx={{ color: "white" }} />
            <Tab label="Jazz" value="4" sx={{ color: "white" }} />
            <Tab label="Blues" value="5" sx={{ color: "white" }} />
          </TabList>
        </Box>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
        <TabPanel value="4"></TabPanel>
        <TabPanel value="5"></TabPanel>
      </TabContext>
    </Box>
  );
}
