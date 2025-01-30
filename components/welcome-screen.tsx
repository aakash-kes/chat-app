import { Dumbbell, FlaskRoundIcon as Flask, Shirt, GraduationCap, Monitor, Globe, Utensils, Plane } from "lucide-react"

export default function WelcomeScreen() {
  return (
    <div className="h-full overflow-y-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to LOGO Ai</h1>
          <p className="text-xl md:text-2xl text-gray-600">Good afternoon! How can I help you today?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CREATE Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold bg-yellow-400 text-black px-4 py-2 rounded">CREATE</h2>
            <div className="space-y-2">
              <button className="menu-item w-full">
                <Flask className="h-5 w-5" />
                <span>Mini Volcano Project</span>
              </button>
              <button className="menu-item w-full">
                <Dumbbell className="h-5 w-5" />
                <span>Make Scented Candles</span>
              </button>
              <button className="menu-item w-full">
                <Dumbbell className="h-5 w-5" />
                <span>Home Workout Routine</span>
              </button>
            </div>
          </div>

          {/* LEARN Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold bg-teal-500 text-white px-4 py-2 rounded">LEARN</h2>
            <div className="space-y-2">
              <button className="menu-item w-full">
                <Shirt className="h-5 w-5" />
                <span>Style Saree</span>
              </button>
              <button className="menu-item w-full">
                <GraduationCap className="h-5 w-5" />
                <span>Public Speaking</span>
              </button>
              <button className="menu-item w-full">
                <Monitor className="h-5 w-5" />
                <span>Artificial Intelligence</span>
              </button>
            </div>
          </div>

          {/* DISCOVER Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold bg-green-500 text-white px-4 py-2 rounded">DISCOVER</h2>
            <div className="space-y-2">
              <button className="menu-item w-full">
                <Globe className="h-5 w-5" />
                <span>Cultural Festivals</span>
              </button>
              <button className="menu-item w-full">
                <Utensils className="h-5 w-5" />
                <span>Famous Street Foods</span>
              </button>
              <button className="menu-item w-full">
                <Plane className="h-5 w-5" />
                <span>Historical Places</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

