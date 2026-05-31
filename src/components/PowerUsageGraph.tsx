import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import power_usage from "../../data/power_usage.json";
import { Box, Typography } from "@mui/material";

export default function PowerUsageGraph() {
  return (
    <>
      {power_usage?.length ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={power_usage}
            margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis unit=" kW" />
            <Line
              type="monotone"
              dataKey="power_consumption_kw"
              stroke="var(--accent-color)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <Box
          sx={{
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "text.secondary",
            border: "1px dashed",
            borderColor: "divider",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">No chart data available</Typography>
          <Typography variant="body2">
            Waiting for power usage telemetry...
          </Typography>
        </Box>
      )}
    </>
  );
}
