import { Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { navData } from "./navData";

const Tables = () => {
  const [header, setHeader] = useState([]);
  const [itemRow, setItemRow] = useState([]);

  useEffect(() => {
    const keys = Object.keys();
    setHeader(keys);
    const values = Object.values();
    setItemRow(values);
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {header.map((item) => (
            <Grid item xs={12 / header.length}>
              {item}
            </Grid>
          ))}

          {
            (itemRow.map = (item) => (
              <Grid item xs={12 / itemRow.length}>
                {item}
              </Grid>
            ))
          }
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Tables;
