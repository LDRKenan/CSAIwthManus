import { Button } from '@/components/ui/button'
import { Code, Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI App Builder
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#templates" className="text-gray-600 hover:text-gray-900 transition-colors">
              Templates
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">
              Documentation
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}