"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from "lucide-react"

const AnimatedSearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<string[]>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Simulated search results
    const results = ["Result 1", "Result 2", "Result 3"].filter((result) =>
      result.toLowerCase().includes(query.toLowerCase()),
    )
    setSearchResults(results)
  }

  return (
    <div className="relative w-full max-w-md mx-auto pt-8 p-4"> {/* Added pt-8 for top padding */}
      <motion.div
        initial={false}
        animate={{
          width: isExpanded ? "100%" : "240px",
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <motion.input
          type="text"
          placeholder="Search Near By Stores..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => !searchQuery && setIsExpanded(false)}
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
        />
        <motion.span
          initial={false}
          animate={{
            opacity: isExpanded ? 0 : 1,
            x: isExpanded ? 20 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <Search className="w-5 h-5 text-gray-400" />
        </motion.span>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("")
              setSearchResults([])
            }}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </motion.div>
      <AnimatePresence>
        {searchResults.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg"
          >
            {searchResults.map((result, index) => (
              <li key={index} className="p-2">
                {result}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AnimatedSearchBar

