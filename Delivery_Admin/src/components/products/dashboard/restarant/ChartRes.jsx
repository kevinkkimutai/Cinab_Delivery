import { useEffect } from "react";


const ChartRes = () => {

  useEffect (() => {
const getChartOptions = () => {
  return {
    series: [52.8, 26.8, 20.4],

    chart: {
      height: 420,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        labels: {
          show: true,
        },
        size: "100%",
        dataLabels: {
          offset: -25
        }
      },
    },

    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "%"
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value  + "%"
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  }
}

  const chart = new ApexCharts(document.getElementById("pie-chart"), getChartOptions());
  chart.render();
  return () => {
    chart.destroy();
  };
});

useEffect (() => {
const options = {
  // set this option to enable the tooltip for the chart, learn more here: https://apexcharts.com/docs/tooltip/
  tooltip: {
    enabled: true,
    x: {
      show: true,
    },
    y: {
      show: true,
    },
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -26
    },
  },
  series: [
    {
      name: "Developer Edition",
      data: [1500, 1418, 1456, 1526, 1356, 1256],
      color: "#1A56DB",
    },
    {
      name: "Designer Edition",
      data: [643, 413, 765, 412, 1423, 1731],
      color: "#7E3BF2",
    },
  ],
  chart: {
    height: "70%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: true
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  xaxis: {
    categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      formatter: function (value) {
        return '$' + value;
      }
    }
  },
  }
  
 
  const chart = new ApexCharts(document.getElementById("tooltip-chart"), options);
  chart.render();
  return () => {
    chart.destroy();
  };
});

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
<div className="w-full bg-white rounded-lg shadow  p-4 md:p-6">

<div className="flex justify-between items-start w-full">
    <div className="flex-col items-center">
      <div className="flex items-center mb-1">
          <h5 className="text-xl font-bold leading-none text-gray-900 me-1">Restaurant Rates</h5>
         
    </div>
    <button id="dateRangeButton" data-dropdown-toggle="dateRangeDropdown" data-dropdown-ignore-click-outside-className="datepicker" type="button" className="inline-flex items-center text-blue-700  font-medium hover:underline">31 Nov - 31 Dev <svg className="w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
    <div id="dateRangeDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-80 lg:w-96">
        <div className="p-3" aria-labelledby="dateRangeButton">
          <div date-rangepicker datepicker-autohide className="flex items-center">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="Start date" />
              </div>
              <span className="mx-2 text-gray-500 ">to</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="End date" />
            </div>
          </div>
        </div>
    </div>
  </div>

</div>

{/* <!-- Line Chart --> */}
<div className="py-6" id="pie-chart"></div>

<div className="grid grid-cols-1 items-center border-gray-200 border-t  justify-between">
  <div className="flex justify-between items-center pt-5">
    {/* <!-- Button --> */}
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="lastDaysdropdown"
      data-dropdown-placement="bottom"
      className="text-sm font-medium text-gray-500  hover:text-gray-900 text-center inline-flex items-center "
      type="button">
      Last 7 days
      <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
    <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Yesterday</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Today</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Last 7 days</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Last 30 days</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Last 90 days</a>
          </li>
        </ul>
    </div>
    <a
      href="#"
      className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700  px-3 py-2">
      Order analysis
      <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" d="m1 9 4-4-4-4"/>
      </svg>
    </a>
  </div>
</div>
</div>

<div className=" w-full bg-white rounded-lg shadow  p-4 md:p-6">
  <div className="flex justify-between mb-5">
    <div>
      <h5 className="leading-none text-3xl font-bold text-gray-900  pb-2">$12,423</h5>
      <p className="text-base font-normal text-gray-500 ">Sales this week</p>
    </div>
    <div
      className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      23%
      <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  <div id="tooltip-chart"></div>
  <div className="grid grid-cols-1 items-center border-gray-200 border-t justify-between mt-5">
    <div className="flex justify-between items-center pt-5">
      {/* <!-- Button --> */}
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="lastDaysdropdown"
        data-dropdown-placement="bottom"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 text-center inline-flex items-center "
        type="button">
        Last 7 days
        <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Yesterday</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Today</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Last 7 days</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Last 30 days</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Last 90 days</a>
            </li>
          </ul>
      </div>
      <a
        href="#"
        className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700  px-3 py-2">
        Sales Report
        <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </div>
  </div>
</div>
</div>
  )
}

export default ChartRes