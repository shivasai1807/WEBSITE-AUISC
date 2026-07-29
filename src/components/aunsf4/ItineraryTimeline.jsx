import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const ItineraryTimeline = ({ days }) => {
  const [activeDay, setActiveDay] = useState(0);
  const day = days[activeDay];

  return (
    <div>
      {/* Day Selector */}
      <div
        className="flex items-center overflow-x-auto gap-2.5 sm:gap-3 mb-8 sm:mb-12 py-2 px-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden justify-start sm:justify-center"
        role="tablist"
        aria-label="Itinerary day selector"
      >
        {days.map((d, index) => (
          <button
            key={d.day}
            type="button"
            role="tab"
            aria-selected={activeDay === index}
            onClick={() => setActiveDay(index)}
            className={`shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-300 ${
              activeDay === index
                ? "bg-gradient-to-r from-[#0E3B91] to-[#1247B8] text-white border-transparent shadow-md scale-105"
                : "bg-white text-[#0E3B91] border-blue-200/90 hover:border-[#0E3B91] hover:bg-blue-50/50"
            }`}
          >
            {d.day.split("—")[0].trim()}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
        >
          <div className="text-center mb-8 sm:mb-10 px-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0E3B91] tracking-tight">{day.day}</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">{day.date}</p>
            {day.subtitle && (
              <p className="text-gray-600 max-w-2xl mx-auto mt-2.5 leading-relaxed text-xs sm:text-sm md:text-base">
                {day.subtitle}
              </p>
            )}
          </div>

          <ol className="relative border-l-2 border-blue-200/80 ml-3 sm:ml-4 md:ml-0 md:max-w-3xl md:mx-auto space-y-6 sm:space-y-8">
            {day.items.map((item, index) => (
              <motion.li
                key={`${item.time}-${item.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="relative pl-6 sm:pl-9"
              >
                {/* Bullet node */}
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-[#FF5722] to-[#FFB74D] ring-4 ring-white shadow-xs" />

                {/* Timeline Card */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-blue-100/70 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50/90 text-xs font-bold text-[#0E3B91] border border-blue-100/80">
                      <Clock size={13} className="shrink-0 text-[#FF5722]" aria-hidden="true" />
                      {item.time}
                    </span>
                    {item.venue && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                        <MapPin size={12} className="shrink-0 text-[#0E3B91]" aria-hidden="true" />
                        <span className="truncate max-w-[200px] sm:max-w-none">{item.venue}</span>
                      </span>
                    )}
                  </div>

                  <h4 className="mt-2.5 text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h4>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">{item.description}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ItineraryTimeline;
