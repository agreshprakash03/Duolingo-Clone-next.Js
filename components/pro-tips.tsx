import { Sparkles } from "lucide-react"

export const ProTips = () => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-2">
      <div className="flex items-center justify-center w-full">
      <Sparkles color="#FFDF00"/>
        <h1 className="font-bold text-xl">
        Pro-Tips    
        </h1>
      </div>
      <div className="text-md text-muted-foreground p-2">
            <p>
            1. You can Refill your hearts by exchanging XP with hearts in the Shop
            </p>
            <p className="pt-2">
            2. You can reattempt the completed lessons to gain more XPs, without losing hearts
            </p>
      </div>
    </div>
  )
}