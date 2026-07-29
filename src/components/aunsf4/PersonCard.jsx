import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const PersonCard = ({ person, variant = "lead", index = 0 }) => {
  const altText = [person.name, person.designation || person.role, person.organization || person.department]
    .filter(Boolean)
    .join(", ");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 group">
        <img
          src={person.photo}
          alt={altText}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {person.role && variant === "guest" && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#0E3B91]/90 text-white backdrop-blur-md border border-white/20 shadow-md">
            {person.role}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-[#0E3B91] text-base sm:text-lg leading-snug tracking-tight">
          {person.name}
        </h3>

        {person.designation && (
          <p className="text-xs sm:text-sm text-gray-700 mt-1 font-medium leading-snug">{person.designation}</p>
        )}

        {person.role && variant !== "guest" && (
          <p className="text-xs sm:text-sm text-indigo-700 font-semibold mt-1">{person.role}</p>
        )}

        {(person.organization || person.department || person.team) && (
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            {person.organization || person.department || person.team}
          </p>
        )}

        {person.bio && (
          <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-3">{person.bio}</p>
        )}

        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on LinkedIn`}
            className="mt-auto pt-3.5 inline-flex items-center gap-1.5 text-[#0E3B91] hover:text-[#FF5722] transition-colors text-xs font-semibold"
          >
            <Linkedin size={15} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default PersonCard;
