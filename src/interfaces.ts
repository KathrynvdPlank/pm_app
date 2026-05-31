import type { ReactNode } from "react";

export interface MenuProps {
    header: string;
}

export interface Metric {
    header: string;
    value: number | string;
    unit: string;
    icon?: string;
}

export interface SnapshotData {
    power_consumption_kw: number;
    daily_energy_usage_kwh: number;
    battery_state_of_charge_percent: number;
    solar_production_kw: number;
    grid_import_export_kw: number;
}

export interface Alerts {
    title: string;
    description: string;
    severity: string;
}