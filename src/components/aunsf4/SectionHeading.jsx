const SectionHeading = ({ id, children, subtitle }) => (
  <div className="text-center mb-10 sm:mb-14 px-2">
    <h2
      id={id}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0E3B91] tracking-tight mb-3 leading-snug"
    >
      {children}
    </h2>
    {subtitle && (
      <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
        {subtitle}
      </p>
    )}
    <div className="mt-4 sm:mt-5 mx-auto w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#0E3B91] shadow-xs" />
  </div>
);

export default SectionHeading;
