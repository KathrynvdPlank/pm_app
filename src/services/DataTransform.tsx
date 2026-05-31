import type { Metric, SnapshotData } from "../interfaces";

import BoltIcon from "@mui/icons-material/Bolt";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import GridOnIcon from "@mui/icons-material/GridOn";
import type { ReactNode } from "react";

export const parseSnapshotToMetrics = (data: SnapshotData): Metric[] => {
  return [
    {
      header: "Power Consumption",
      value: data.power_consumption_kw,
      unit: "kW",
      icon: "bolt",
    },
    {
      header: "Daily Energy Usage",
      value: data.daily_energy_usage_kwh,
      unit: "kWh",
      icon: "meter",
    },
    {
      header: "Battery State of Charge",
      value: data.battery_state_of_charge_percent,
      unit: "%",
      icon: "battery",
    },
    {
      header: "Solar Production",
      value: data.solar_production_kw,
      unit: "kW",
      icon: "solar",
    },
    {
      header: "Grid Import/Export",
      value: data.grid_import_export_kw,
      unit: "kW",
      icon: "grid",
    },
  ];
};

export const iconMap: Record<string, ReactNode> = {
  bolt: <BoltIcon sx={{ color: "var(--accent-color)", fontSize: 36 }} />,
  solar: <SolarPowerIcon sx={{ color: "var(--accent-color)", fontSize: 36 }} />,
  battery: (
    <BatteryFullIcon sx={{ color: "var(--accent-color)", fontSize: 36 }} />
  ),
  meter: (
    <ElectricMeterIcon sx={{ color: "var(--accent-color)", fontSize: 36 }} />
  ),
  grid: <GridOnIcon sx={{ color: "var(--accent-color)", fontSize: 36 }} />,
};

export const severityColors = {
  info: "var(--info-color)",
  warning: "var(--warning-color)",
  error: "var(--error-color)",
};

export const severities = ["all", "info", "warning", "error"];
