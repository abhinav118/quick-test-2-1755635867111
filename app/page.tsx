import { siteData, navigation } from '@/lib/data'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-4">Quick Test 2</h1>
            <p className="text-xl opacity-90">Testing basic functionality</p>
          </div>
        </div>
<div className="container py-8">
          <div className="card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Home</h2>
            <p className="text-gray-600">Main testing page with basic components</p>
          </div>
        </div>
    </div>
  )
}