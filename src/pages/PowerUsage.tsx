import Menu from "../components/Menu";
import PowerUsageGraph from "../components/PowerUsageGraph";

export default function PowerUsage() {
  return (
    <>
      <Menu header="24h Power Usage"></Menu>
      <PowerUsageGraph />
    </>
  );
}
