<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
    let chart;
    let options = {
  chart: {
    maxHeight: "100%",
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
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
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
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0
    },
  },
  series: [
    {
      name: "New users",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB",
    },
  ],
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
  },
  zoom: {
    enabled: false,
    allowMouseWheelZoom: false,
}
};
  onMount(async () => {
    if (browser) {
    const ApexCharts = (await import('apexcharts')).default;
      const chartElement = document.getElementById('totalUsersChart');
      chart = new ApexCharts(chartElement, options);
      await chart.render();
    }
  });

  // Cleanup on destroy
  onDestroy(() => {
    if (chart) chart.destroy();
  });
</script> 

<div class="w-full h-[52vh] rounded-xl shadow-xl bg-base-200 p-4 md:p-6 border border-base-300">
    <div class="flex justify-between">
      <div>
        <h5 class="leading-none text-3xl font-bold pb-2">5.4k new clients</h5>
        <p class="text-base font-normal">Client Rate</p>
      </div>
      <!-- TODO: Arrow up arrow down system -->
      <div
        class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 text-green-500 text-center">
        12%
        <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
      </div>
    </div>
    {#if browser}
        <div id="totalUsersChart"></div>
    {/if}
    <div class="grid grid-cols-1 items-center border-t border-base-300 justify-between">
      <div class="flex justify-between items-center pt-5">
        <!-- Button -->
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="lastDaysdropdown"
          data-dropdown-placement="bottom"
          class="text-sm font-medium text-center inline-flex items-center hover:"
          type="button">
          Last 7 days
          <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="lastDaysdropdown" class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow-sm w-44">
            <ul class="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="/" class="block px-4 py-2">Yesterday</a>
              </li>
              <li>
                <a href="/" class="block px-4 py-2">Today</a>
              </li>
              <li>
                <a href="/" class="block px-4 py-2">Last 7 days</a>
              </li>
              <li>
                <a href="/" class="block px-4 py-2">Last 30 days</a>
              </li>
              <li>
                <a href="/" class="block px-4 py-2 ">Last 90 days</a>
              </li>
            </ul>
        </div>
        <a
          href="/"
          class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-500  hover:bg-primary px-3 py-2">
          Users Report
          <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  