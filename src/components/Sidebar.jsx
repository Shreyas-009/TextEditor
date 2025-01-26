import {
  PenLine,
  Wand2,
  Lightbulb,
  LayoutGrid,
  FileText,
  Sparkles,
  Heart,
  Calendar,
  Settings2,
  MessageSquarePlus,
  Zap,
  InfoIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-72 flex-col border-r bg-white p-4 ">
      <button className="mb-4 mt-14 w-full flex items-center justify-center gap-2 bg-sky-500 text-white py-2 px-4 rounded-full hover:bg-sky-500/90 transition-colors">
        <PenLine className="h-4 w-4" />
        Write Post
      </button>

      <nav className="space-y-1">
        <NavItem icon={Wand2} label="Post Generator" />
        <NavItem icon={Lightbulb} label="Ideas Generator" />
        <NavItem icon={LayoutGrid} label="Carousel Maker" />
        <NavItem icon={FileText} label="Posts" />
        <NavItem icon={Sparkles} label="Content Inspiration" />
        <NavItem icon={Heart} label="Posts for You" />
        <NavItem icon={Calendar} label="Schedule" />
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <nav className="space-y-1">
          <NavItem icon={Settings2} label="Preferences" />
          <NavItem icon={MessageSquarePlus} label="Feature Request" />
        </nav>
        <div className="rounded-lg bg-gray-50 p-4 space-y-4 border-2 border-gray-200">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                Words generated
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </div>
              <span className="text-gray-600">1.25k/50k</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-400 transition-all duration-300"
                style={{ width: "80%" }}
              />
            </div>
            <p className="text-xs text-gray-500">
              Monthly usage resets in 29 days
            </p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 bg-white text-gray-700 py-2 px-4 rounded-full hover:bg-gray-50 transition-colors">
            <Zap className="h-4 w-4" />
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
};

function NavItem({ icon: Icon, label }) {
  return (
    <button className="flex w-full items-center rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
      <Icon className="mr-2 h-4 w-4" />
      <span className="text-sm">{label}</span>
    </button>
  );
}

export default Sidebar;
