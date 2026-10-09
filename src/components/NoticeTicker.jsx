import React from "react";
import { Bell, Sparkles, ChevronRight, Pause, Play } from "lucide-react";
import { TICKER_NOTICES, NOTICES_DATA } from "../data/schoolData";

export default function NoticeTicker({ onSelectNotice }) {
  const [isPaused, setIsPaused] = React.useState(false);

  const handleNoticeClick = (tickerItem) => {
    // Find the corresponding full notice or construct one
    const fullNotice = NOTICES_DATA.find((n) => n.id === tickerItem.id) || {
      id: tickerItem.id,
      title: tickerItem.title,
      category: tickerItem.category,
      date: tickerItem.date,
      documentRef: `TSS/${tickerItem.category}-2083`,
      author: "Administration & Plant Science Department",
      summary: tickerItem.title,
      content: `Notice regarding: ${tickerItem.title}\n\nPlease check with the Plant Science Department office for full circular details and examination schedules.`
    };
    onSelectNotice(fullNotice);
  };

  return (
    <div className="relative bg-emerald-900 border-b border-emerald-800 text-white overflow-hidden py-2.5 px-3 z-30 shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Left Sticky Badge */}
        <div className="shrink-0 flex items-center gap-2 px-3 py-1 rounded-xl bg-lime-400 text-emerald-950 font-black text-xs uppercase tracking-wider shadow-md select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-800 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-900"></span>
          </span>
          <span className="flex items-center gap-1">
            <Bell className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Notice Board</span>
            <span className="sm:hidden">Notices</span>
          </span>
        </div>

        {/* Marquee Wrapper */}
        <div 
          className="flex-1 overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-emerald-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-emerald-900 to-transparent pointer-events-none z-10" />

          <div 
            className="flex items-center gap-8 whitespace-nowrap animate-ticker"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {/* Duplicated for seamless infinite loop */}
            {[...TICKER_NOTICES, ...TICKER_NOTICES].map((item, idx) => (
              <button
                key={`${item.id}-${idx}`}
                onClick={() => handleNoticeClick(item)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-100 hover:text-lime-300 transition-colors cursor-pointer group px-2 py-0.5 rounded-lg hover:bg-emerald-800/60"
              >
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-emerald-800 text-lime-300 border border-emerald-700/60">
                  {item.category}
                </span>
                <span className="group-hover:underline underline-offset-4">
                  {item.title}
                </span>
                <span className="text-emerald-400 font-mono text-[11px] opacity-80">
                  ({item.date})
                </span>
                <ChevronRight className="w-3 h-3 text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {/* Pause/Play indicator or quick link to full notices */}
        <div className="shrink-0 hidden md:flex items-center gap-2 text-[11px] text-emerald-300">
          <a 
            href="#notices" 
            className="hover:text-lime-300 font-bold underline underline-offset-2 transition-colors"
          >
            All Notices →
          </a>
        </div>
      </div>
    </div>
  );
}
