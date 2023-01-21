import MapChart from "../../components/MapChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../themes";
const Map = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Map Chart" subtitle="Simple Map Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <MapChart />
      </Box>
    </Box>
  );
};
export default Map;
