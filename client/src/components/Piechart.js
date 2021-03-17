// ................Month Piechart.................
import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green'],
          datasets: [
            {
              label: '# of votes',
              data: [120, 190, 30, 50 ],
              borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={280}
        width={450}
        options={{
          maintainAspectRatio: false,
          
          legend: {
            labels: {
              fontSize: 10,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart;