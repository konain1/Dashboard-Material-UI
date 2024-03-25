import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function GridDemo() {

  function AlertHandler(){
    alert('alertHandler')
  }
  return (
    <>

    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />

<Button onClick={AlertHandler}  variant="contained">Get Data</Button>

    </>

  );
  
}