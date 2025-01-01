import React from 'react';

const skills = {
  'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'],
  'Backend': ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
  'Tools': ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel'],
  'Other': ['REST APIs', 'GraphQL', 'CI/CD', 'Agile', 'Testing']
};

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li 
                    key={index}
                    className="flex items-center bg-white rounded-lg p-3 shadow-sm"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}