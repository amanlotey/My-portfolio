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
  labels: ['NextAuth', 'React', 'Supabase', 'Appwrite', 'Docker', 'Rust (I just nod when people talk)', 'Tailwind', 'tRPC', 'Expo', 'AI SDKs'],
  datasets: [
    {
      label: 'Skill Radar',
      data: [10.8,10.9, 10.8, 10.6, 10.6, 10, 10.9, 10.6, 10.9, 10.7],
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
            size: 14,
          },
        },
        ticks: {
          backdropColor: 'transparent',
          color: '#888',
          stepSize: 1,
          max: 10,
          min: 0,
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
