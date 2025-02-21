import TrackingCard from "@/components/tracking-card"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <TrackingCard 
          orderNumber={12345} 
          trackingNumber="1Z999AA10123456784" 
          expectedDate="2023-12-31" 
          currentStep="In Transit" 
        />
      </div>
    </div>
  )
}


