import Menu from "../components/Menu";
import alerts from "../../data/alerts.json";
import AlertBar from "../components/AlertBar";
import { useState } from "react";
import { Box, Chip } from "@mui/material";
import { severities } from "../services/DataTransform";

export default function Alerts() {
  const [severityFilter, setSeverityFilter] = useState<
    "all" | "info" | "warning" | "error"
  >("all");

  const filteredAlerts =
    severityFilter === "all"
      ? alerts
      : alerts.filter((alert) => alert.severity === severityFilter);

  return (
    <>
      <Menu header="Alerts"></Menu>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mb: 2,
          width: "98%",
          marginTop: "10px",
        }}
      >
        {severities.map((sev) => (
          <Chip
            key={sev}
            label={sev.toUpperCase()}
            clickable
            onClick={() => setSeverityFilter(sev as typeof severityFilter)}
            sx={{
              flex: 1,
              bgcolor: `var(--${sev}-color)`,
              color: "white",
              justifyContent: "center",
            }}
          />
        ))}
      </Box>
      {filteredAlerts.map((alert, index) => (
        <AlertBar
          key={index}
          title={alert.title}
          description={alert.description}
          severity={alert.severity}
        />
      ))}
    </>
  );
}
