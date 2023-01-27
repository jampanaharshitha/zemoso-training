import React from "react";
import Typography from "../../../atoms/typography/";
import Cards from "../../../Organism/organisms/status";
import { Box,  Divider } from "@material-ui/core";
import { styled } from "@mui/system";
const MyComponent = styled("div")({
  width: 200,
  marginLeft: 400,
  marginTop: 90,
});
const Filter = () => {
  let status = {
    0: { text: "All Status" },
    1: { text: "Clear" },
    2: { text: "Consider" },
  };
  let adjudication = {
    0: { text: "All " },
    1: { text: "Engaged" },
    2: { text: "Pre adverse action" },
  };
  return (
    <MyComponent>
      <Box 
      sx={{
        height:'250px',
        fontSize: 12,
        fontWeight: 'medium',
        width: {
          // xs: 100,
          // sm: 200,
          md: 300,
          // lg: 400,
          // xl: 500,
        },
        bgcolor: 'error.main',
      }}
      >
          <div className="filters">
            <Typography type="div" text="Filters" className="heading" />
            <Divider orientation="horizontal" />
            <div className="status">
              <Cards object={status} heading="Status" />
            </div>
            <div className="adjudication">
              <Cards object={adjudication} heading="Adjudication" />
            </div>
          </div>
      </Box>
    </MyComponent>
  );
};
export default Filter;
