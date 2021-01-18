export const FIOptions = (showChartHandler: Function) => {
  return {
    title: {
      display: true,
      text: 'Feature Importance',
      fontSize: 20,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: { mirror: false, fontSize: 10, z: 2, fontColor: '#0f0f0ff0' },
        },
      ],
    },
    onClick: (event: Event, element: { _index: number }[]) => {
      if (element[0]) {
        const index = element[0]._index;
        showChartHandler(index);
      }
    },

    onHover: (e: MouseEvent, element: { _index: number }[]) => {
      const target = e.target as HTMLCanvasElement;
      if (element[0]) {
        target.style.cursor = 'pointer';
      } else {
        target.style.cursor = 'auto';
      }
    },
  };
};

export const NSOptions = {
  title: {
    display: true,
    text: 'Nan Stability Analysis',
    fontSize: 20,
    position: 'bottom',
  },
  legend: {
    display: false,
  },
};

export const SAOptions = {
  title: {
    display: true,
    text: 'Stability Analysis',
    fontSize: 20,
    position: 'bottom',
  },
  legend: {
    display: true,
    position: 'right',
  },
};
