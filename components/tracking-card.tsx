"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Truck, Package, Box } from "lucide-react"

interface TrackingCardProps {
  orderNumber: number
  trackingNumber: string
  expectedDate: string
  currentStep: string
}

const steps = [
  { label: "Order Processed", icon: <CheckCircle className="h-6 w-6" /> },
  { label: "In Transit", icon: <Truck className="h-6 w-6" /> },
  { label: "Out for Delivery", icon: <Package className="h-6 w-6" /> },
  { label: "Order Reached", icon: <Box className="h-6 w-6" /> }
]

const TrackingCard: React.FC<TrackingCardProps> = ({
  orderNumber,
  trackingNumber,
  expectedDate
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  // Automatically cycle through steps for demonstration purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 w-full max-w-2xl p-6 bg-white rounded-lg shadow-md border border-border/40 text-gray-800"
    >
      {/* Header Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Order #{orderNumber}</h2>
        <p className="mt-1 text-gray-600">
          Tracking Number: 
          <span className="ml-1 font-medium text-black">{trackingNumber}</span>
        </p>
        <p className="text-gray-600">
          Expected Date: 
          <span className="ml-1 font-medium text-black">{expectedDate}</span>
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mt-6">
        {steps.map((step, index) => {
          // Is this step complete, current, or upcoming?
          const isActive = index === currentStepIndex
          // If you want to style completed steps differently, you can define "isComplete = index < currentStepIndex"

          return (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: isActive ? 1 : 0.8,
                opacity: isActive ? 1 : 0.5
              }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className={`rounded-full p-3 ${isActive ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-500"}`}>
                {step.icon}
              </div>
              <p className="mt-2 text-sm font-medium">
                {step.label}
              </p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default TrackingCard

