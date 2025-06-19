"use client"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion"

type Props = {
  revision: string
  date: string
  progress: number
}

export default function RevisionCard({ revision, date, progress }: Props) {
  return (
    <div
       
    className="bg-white rounded-2xl shadow-md p-5 w-full max-w-xs hover:shadow-xl transition-shadow">
      <div className="text-sm text-blue-600 font-semibold">{revision}</div>
      <div className="text-green-500 text-sm font-medium mt-1">Completed</div>
      <div className="text-xs text-gray-500">{date}</div>

      <div className="my-4 flex justify-center">
        <div className="w-20 h-20">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: '#6366f1',
              textColor: '#111',
              trailColor: '#e5e7eb',
            })}
          />
        </div>
      </div>

      <button className="bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white w-full py-2 rounded-xl text-sm font-medium transition-colors">
        View Report
      </button>
    </div>
  )
}
