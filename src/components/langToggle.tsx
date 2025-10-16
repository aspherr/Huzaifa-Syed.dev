"use client"

import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const LangToggle = () => {
  const [language, setLanguage] = useState<"en" | "jp">("en")

  const toggleLanguage = () => {
    // setLanguage((prev) => (prev === "en" ? "jp" : "en"))
    setLanguage("en");
    toast.info("Hang tight — We're still working on this feature.")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative px-2 py-2 w-9 h-9 rounded-full flex items-center justify-center hover:scale-105 transition-transform shrink-0"
      aria-label="Toggle language"
    >
      <div className="relative w-4 h-4 overflow-hidden rounded-full">
        <Image
          src={language === "en" ? "/images/uk.svg" : "/images/japan.svg"}
          alt={language === "en" ? "English" : "Japanese"}
          fill
          sizes="100%"
          className="object-cover rounded-full"
        />
      </div>
    </Button>
  )
}

export default LangToggle;
