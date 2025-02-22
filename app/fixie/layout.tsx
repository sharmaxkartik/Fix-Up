import type React from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutGrid, Settings, Users, FunctionSquare as Functions, Layers, Eye, BarChart2, X } from "lucide-react"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800 transition-all duration-300 ease-in-out">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <img
              src="/gemini.png"
              alt="Fixie"
              className="h-12 w-12 object-contain"
            />
            <span className="font-semibold">Fixie</span>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="space-y-4 p-4">
            <nav className="space-y-2">
  {["Tasks", "Functions", "Integrations", "Users", "Settings"].map((item, index) => {
    const Icon = [LayoutGrid, Functions, Layers, Users, Settings][index]
    return (
      <Button
        key={item}
        variant="ghost"
        className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out"
      >
        <Icon className="mr-2 h-4 w-4" />
        {item}
      </Button>
    )
  })}
</nav>

            <div className="pt-4 border-t border-gray-800">
              {["Live preview", "Performance"].map((item, index) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out"
                >
                  {
  (() => {
    const Icon = [Eye, BarChart2][index]
    return <Icon className="mr-2 h-4 w-4" />
  })()
}

                  {item}
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b border-gray-800 px-4 flex items-center justify-between">
            <h1 className="text-sm font-medium">Voice conversation</h1>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-black hover:bg-white transition-all duration-200 ease-in-out"
              >
                Save conversation
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-gray-300 hover:text-black hover:bg-white transition-all duration-200 ease-in-out"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </header>
          {children}
        </div>

        {/* Right Panel */}
        <div className="w-80 border-l border-gray-800 transition-all duration-300 ease-in-out">
          <div className="h-14 border-b border-gray-800 px-4 flex items-center">
            <h2 className="font-medium">Conversation details</h2>
          </div>
          <div className="p-4">
            <div className="flex gap-4 border-b border-gray-800 pb-4">
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200 ease-in-out"
              >
                Actions
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out"
              >
                Customer
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out"
              >
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

