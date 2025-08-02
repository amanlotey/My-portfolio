'use client'

import { useMemo } from 'react'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const data = {
  labels: ['React', 'Firebase', 'Appwrite', 'Docker', 'NextAuth', 'Tailwind', 'tRPC', 'Expo', 'AI SDKs'],
  datasets: [
    {
      label: 'Skill Radar',
      data: [9, 10, 10, 10, 9, 9, 10, 9, 9],
      backgroundColor: 'rgba(168, 85, 247, 0.4)',
      borderColor: 'rgba(168, 85, 247, 1)',
      pointBackgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
  ],
}

const RadarChart = () => {
  const options = useMemo(() => ({
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
    scales: {
      r: {
        angleLines: {
          color: '#444',
        },
        grid: {
          color: '#333',
        },
        pointLabels: {
          color: '#fff',
          font: {
            size: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 14,
          },
        },
        ticks: {
          backdropColor: 'transparent',
          color: '#888',
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ccc',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  }), [])

  return (
    <div className="w-full h-[500px] bg-[#111111] rounded-xl p-4">
      <Radar data={data} options={options} />
    </div>
  )
}

export default RadarChart
