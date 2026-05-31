import Menu from "../components/Menu";
import current_state from "../../data/current_state.json";
import MetricCard from "../components/MetricCard";
import { parseSnapshotToMetrics } from "../services/DataTransform";
import PowerUsageGraph from "../components/PowerUsageGraph";
import { Box, Typography } from "@mui/material";

export default function Dashboard() {
  const metrics = parseSnapshotToMetrics(current_state);

  return (
    <>
      <Menu header="Dashboard"></Menu>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "16px",
          padding: "16px",
        }}
      >
        {metrics?.length ? (
          metrics.map((metric) => (
            <MetricCard
              key={metric.header}
              header={metric.header}
              value={metric.value}
              unit={metric.unit}
              icon={metric.icon}
            />
          ))
        ) : (
          <Box sx={{ p: 2, textAlign: "center", color: "var(--accent-color)" }}>
            <Typography variant="h6">No data available</Typography>
          </Box>
        )}
      </div>
      <PowerUsageGraph />
    </>
  );
}
