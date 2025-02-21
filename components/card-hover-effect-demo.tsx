"use client"

import { useState } from "react"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

const categories = [
  "All",
  "Analytics",
  "Marketing",
  "Productivity",
  "Sales",
  "Finance",
  "Communication",
  "Cloud Services",
  "Security",
  "Design",
  "Development",
  "Human Resources",
  "Customer Support",
  "E-commerce",
  "Social Media",
]

export const projects = [
  {
    title: "Integration 3",
    description:
      "This is a detailed description for Integration 3. It provides communication services to streamline your workflow and improve efficiency. With powerful...",
    link: "#",
    category: "Communication",
  },
  // Add more integrations following the same pattern...
  {
    title: "Integration 10",
    description:
      "This is a detailed description for Integration 10. It provides communication services to streamline your workflow and improve efficiency. With powerful...",
    link: "#",
    category: "Cloud Services",
  },
  {
    title: "Integration 18",
    description:
      "This is a detailed description for Integration 18. It provides communication services to streamline your workflow and improve efficiency. With powerful...",
    link: "#",
    category: "Security",
  },
  {
    title: "Integration 31",
    description:
      "This is a detailed description for Integration 31. It provides communication services to streamline your workflow and improve efficiency. With powerful...",
    link: "#",
    category: "Analytics",
  },
  {
    title: "Integration 35",
    description:
      "This is a detailed description for Integration 35. It provides communication services to streamline your workflow and improve efficiency. With powerful...",
    link: "#",
    category: "Marketing",
  },
  {
    title: "Integration 37",
    description:
      "This is a detailed description for Integration 37. It provides communication services to streamline your workflow and improve efficiency. With powerful...",
    link: "#",
    category: "Productivity",
  },
]

export default function CardHoverEffectDemo() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const currentProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 p-6 space-y-4">
        <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category ? "bg-white text-black" : "text-white hover:bg-zinc-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Market-Place</h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
          <Input
            type="text"
            placeholder="Search integrations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zinc-900 border-zinc-800 text-white"
          />
        </div>

        {/* Cards Grid */}
        <HoverEffect items={currentProjects} />

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-white">
            Page {currentPage} of {Math.max(1, totalPages)}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

