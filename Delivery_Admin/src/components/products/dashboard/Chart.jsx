import { useEffect } from 'react';


const Chart = () => {

  useEffect(() => {
    const chartConfig = {
      series: [
        {
          name: "Sales",
          data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
      ],
      chart: {
        type: "bar",
        height: 240,
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#0000ff"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#020610",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#020610",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "light",
      },
    };

    const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);
    chart.render();

    // Cleanup function to destroy the chart
    return () => {
      chart.destroy();
    };
  }, []);
  
  return (
    
<div className="w-full bg-white rounded shadow  p-4 md:p-4">
  <div className="flex justify-between pb-2 mb-4 border-b border-gray-200 bg-green-200">
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-lg bg-gray-300  flex items-center justify-center me-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="teal" ><path d="M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.49 3.49 0 0 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52zM15 9h2.43l1.8 3H15zM6.5 19A1.5 1.5 0 1 1 8 17.5 1.5 1.5 0 0 1 6.5 19zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"></path></svg>
      </div>
      <div>
        <h5 className="leading-none text-2xl font-bold font-serif text-gray-900 pb-1">3.4k</h5>
        <p className="text-sm font-normal text-gray-500">Deliveries per month</p>
      </div>
    </div>
    <div>
      <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
        42.5%
      </span>
    </div>
  </div>



  <div  className="w-full">
  <div className="relative flex flex-col rounded-md bg-gray-200 bg-clip-border text-blue-900 shadow-md">
 
  <div className="pt-6 px-2 pb-0">
    <div id="bar-chart"></div>
  </div>
</div>

  </div>

   
</div>

  )
}

export default Chart