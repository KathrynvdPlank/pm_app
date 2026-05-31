import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import type { Alerts } from "../interfaces";
import { severityColors } from "../services/DataTransform";

export default function AlertBar({ title, description, severity }: Alerts) {
  return (
    <Card sx={{ margin: "5px 10px" }}>
      <CardContent sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, mb: 0.5, textAlign: "left" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "left" }}
            >
              {description}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: severityColors[severity],
              flexShrink: 0,
              boxShadow: `0 0 8px ${severityColors[severity]}80`,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
