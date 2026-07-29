import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const DomainCard = ({ domain, index = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className={`bg-white rounded-3xl shadow-lg border ${domain.border} overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 group`}
  >
    <div className={`bg-gradient-to-r ${domain.color} p-6 sm:p-7 text-white relative overflow-hidden`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
          {domain.emoji}
        </span>
        <span className="text-[11px] font-bold tracking-wider uppercase text-white/90 bg-white/15 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
          Domain {index + 1}
        </span>
      </div>
      <h3 className="text-xl sm:text-2xl font-black leading-snug tracking-tight text-white">
        {domain.name}
      </h3>
    </div>

    <div className="p-6 sm:p-7 flex flex-col flex-grow">
      <p className="text-sm text-gray-600 leading-relaxed font-normal">
        {domain.description}
      </p>

      {domain.sdgs?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-5">
          {domain.sdgs.map((sdg) => (
            <span
              key={sdg}
              className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gray-50/90 border ${domain.border} ${domain.accent} shadow-2xs`}
            >
              {sdg}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3.5 sm:gap-4">
        <img
          src={domain.mentor.photo}
          alt={`${domain.mentor.name}, ${domain.mentor.designation}`}
          loading="lazy"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top shadow-md shrink-0 border-2 border-white ring-2 ring-blue-50"
        />
        <div className="min-w-0">
          <p className={`text-[11px] font-bold uppercase tracking-wider ${domain.accent}`}>
            Domain Mentor
          </p>
          <p className="font-bold text-gray-900 text-sm sm:text-base leading-tight mt-0.5">
            {domain.mentor.name}
          </p>
          <p className="text-xs text-gray-500 leading-snug mt-0.5">
            {domain.mentor.designation}
            {domain.mentor.organization ? `, ${domain.mentor.organization}` : ""}
          </p>
          {domain.mentor.linkedin && (
            <a
              href={domain.mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${domain.mentor.name} on LinkedIn`}
              className="inline-flex items-center gap-1 text-[#0E3B91] hover:text-[#FF5722] transition-colors mt-1.5 text-xs font-semibold"
            >
              <Linkedin size={13} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.article>
);

export default DomainCard;
