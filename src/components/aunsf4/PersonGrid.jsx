import PersonCard from "./PersonCard";

const gridClasses = {
  2: "grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto",
  3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6",
  4: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5",
  6: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4",
};

const PersonGrid = ({ people, variant = "lead", columns = 4 }) => (
  <div className={gridClasses[columns] || gridClasses[4]}>
    {people.map((person, index) => (
      <PersonCard
        key={person.id}
        person={person}
        variant={variant}
        index={index}
      />
    ))}
  </div>
);

export default PersonGrid;
