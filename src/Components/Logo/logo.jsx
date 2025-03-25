function LogoData() {
    return (
      <div className="flex items-center space-x-3 bg-[#0a2248] p-2">
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="University Logo"
            className="h-16 w-16 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-white text-xl font-bold leading-tight">General Sir John Kotelawala</span>
          <span className="text-white text-xl font-bold leading-tight">Defence University</span>
          <span className="text-white text-xs mt-1">For the Motherland Forever | සිය රටටමයි කවදත්</span>
        </div>
      </div>
    );
  }
  
  export default LogoData;