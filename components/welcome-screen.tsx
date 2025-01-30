import { Dumbbell, FlaskRoundIcon as Flask, Shirt, GraduationCap, Monitor, Globe, Utensils, Plane } from "lucide-react";
import { SectionProps, MenuItemProps } from "@/lib/types";

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label }) => (
  <button className="menu-item w-full flex items-center space-x-2">
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </button>
);

const Section: React.FC<SectionProps> = ({ title, bgColor, textColor, items }) => (
  <div className="space-y-4">
    <h2 className={`text-lg font-semibold ${bgColor} ${textColor} px-4 py-2 rounded`}>
      {title}
    </h2>
    <div className="space-y-2">
      {items.map((item, index) => (
        <MenuItem key={index} icon={item.icon} label={item.label} />
      ))}
    </div>
  </div>
);

const WelcomeScreen: React.FC = () => {
  const createItems = [
    { icon: Flask, label: "Mini Volcano Project" },
    { icon: Dumbbell, label: "Make Scented Candles" },
    { icon: Dumbbell, label: "Home Workout Routine" },
  ];

  const learnItems = [
    { icon: Shirt, label: "Style Saree" },
    { icon: GraduationCap, label: "Public Speaking" },
    { icon: Monitor, label: "Artificial Intelligence" },
  ];

  const discoverItems = [
    { icon: Globe, label: "Cultural Festivals" },
    { icon: Utensils, label: "Famous Street Foods" },
    { icon: Plane, label: "Historical Places" },
  ];

  return (
    <div className="h-full overflow-y-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to LOGO Ai</h1>
          <p className="text-xl md:text-2xl text-gray-600">Good afternoon! How can I help you today?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Section title="CREATE" bgColor="bg-yellow-400" textColor="text-black" items={createItems} />
          <Section title="LEARN" bgColor="bg-teal-500" textColor="text-white" items={learnItems} />
          <Section title="DISCOVER" bgColor="bg-green-500" textColor="text-white" items={discoverItems} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
