import Link from 'next/link';
import { ArrowUpRight, Award, Clock3, Leaf, Laptop } from 'lucide-react';

const programs = [
  {
    icon: Leaf,
    category: 'Green Building',
    title: 'EDGE Practitioner Workshop',
    duration: '2 days',
    description:
      'Learn the EDGE standard, project assessment workflow, and practical certification documentation.',
  },
  {
    icon: Award,
    category: 'Certification',
    title: 'LEED Project Fundamentals',
    duration: '3 days',
    description:
      'Understand LEED credit categories, evidence requirements, and the path to project registration.',
  },
  {
    icon: Laptop,
    category: 'Simulation',
    title: 'Building Energy Modeling',
    duration: '4 days',
    description:
      'Build confidence with climate inputs, energy simulation setup, and results interpretation.',
  },
];

export function TrainingSection() {
  return (
    <section className="mx-auto w-full max-w-page-max px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-eco">
            Green Tree Academy
          </span>
          <h2 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-forest-950 sm:text-3xl lg:text-4xl">
            Build expertise for a more sustainable built environment
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Practical, instructor-led training that helps professionals turn green building
            standards into confident project decisions.
          </p>
        </div>

        <Link
          href="/training"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-forest-700 bg-forest-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-850 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eco focus-visible:ring-offset-2 md:self-auto"
        >
          <span>Explore Training</span>
          <ArrowUpRight className="h-4 w-4 text-eco" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:gap-6">
        {programs.map((program) => {
          const Icon = program.icon;

          return (
            <article
              key={program.title}
              className="group flex flex-col rounded-3xl border border-forest-100 bg-white p-6 shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:border-forest-200 hover:shadow-lift sm:p-7"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-forest-100 bg-forest-50 transition-colors group-hover:bg-eco-50">
                  <Icon className="h-6 w-6 text-eco" aria-hidden="true" />
                </div>
                <span className="rounded-full border border-forest-100 bg-sand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest-800">
                  {program.category}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-forest-950 sm:text-xl">
                {program.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                {program.description}
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-forest-100 pt-4 text-xs font-semibold text-gray-500">
                <Clock3 className="h-4 w-4 text-eco" aria-hidden="true" />
                <span>{program.duration}</span>
                <span className="ml-auto text-forest-700">Instructor-led</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
