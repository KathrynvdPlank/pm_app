import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import type { Metric } from "../interfaces";
import { iconMap } from "../services/DataTransform";

export default function MetricCard(props: Metric) {
  const icon = props.icon ? iconMap[props.icon] : null;

  return (
    <Card>
      <CardActionArea>
        <CardContent sx={{ p: 1.5, padding: "30px 8px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.5,
                  textAlign: 'start'
                }}
              >
                {props.value}
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    ml: 0.5,
                    color: "text.secondary",
                  }}
                >
                  {props.unit}
                </Typography>
              </Typography>

              <Typography variant="caption">{props.header}</Typography>
            </Box>

            {icon && <Box>{icon}</Box>}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
