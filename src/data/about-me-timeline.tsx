import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { TimelineEntry } from '@/components/ui/timeline';

export type CardContentProps = {
  role: string;
  company: string;
  description: string;
  points: string[];
};

const AboutMeCard = ({
  role,
  company,
  description,
  points
}: CardContentProps) => (
  <Card className='bg-transparent'>
    <CardHeader>
      <CardTitle className='mb-1 text-2xl font-semibold'>{role}</CardTitle>
      <CardDescription className='mb-3 text-lg'>{company}</CardDescription>
    </CardHeader>

    <CardContent className='space-y-3'>
      <p className='mb-4 text-sm font-normal'>{description}</p>
      <ul className='mb-8 list-none space-y-2 pl-5 text-sm'>
        {points.map((point, index) => (
          <li key={index} className=''>
            <span className=''>{point}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export const aboutMeTimeline: TimelineEntry[] = [
  {
    title: '2024',
    content: (
      <div className='space-y-4'>
        <AboutMeCard
          role='React Developer - Current'
          company='Susanoox'
          description='Joined Susanoox as a Junior Developer in February. Currently contributing to full-stack projects and sharpening my React and JavaScript skills.'
          points={[
            'Built scalable and reusable components using React.',
            'Improved application performance through code optimization.',
            'Collaborated with cross-functional teams in agile sprints.'
          ]}
        />
        <AboutMeCard
          role='Tech Stack'
          company='Tools & Technologies I Use'
          description='These are the main technologies I currently work with on a daily basis.'
          points={[
            'Next.js',
            'React',
            'TypeScript',
            'TailwindCSS',
            'ShadCN',
            'React Query',
            'React Hook Form',
            'Zustand'
          ]}
        />
      </div>
    )
  },
  {
    title: '2023',
    content: (
      <AboutMeCard
        role='React Developer Intern'
        company='CoderProfession'
        description='Started my tech journey as a React Developer Intern at CoderProfession, where I worked on real-time web projects until January 2024.'
        points={[
          'Gained experience in building user-friendly web apps with React.',
          'Worked on integrating RESTful APIs and handling application state.',
          'Participated in code reviews and debugging sessions with the dev team.'
        ]}
      />
    )
  },
  {
    title: '2022',
    content: (
      <AboutMeCard
        role='Sales Officer'
        company='HDFC Bank – HDB Financial Services'
        description='Joined HDFC Bank – HDB Financial Services as a Sales Officer in the Construction Equipment department.'
        points={[
          'Specialized in managing sales processes for Construction Equipment financing.',
          'Assisted clients with financial documentation and eligibility verification.',
          'Worked closely with dealers and field teams to meet monthly targets.',
          'Improved client satisfaction through transparent communication and quick resolution of queries.'
        ]}
      />
    )
  },
  {
    title: '2019',
    content: (
      <AboutMeCard
        role='B.Sc. Mathematics'
        company='Sri K.G.S Arts & Science College'
        description='Graduated with distinction in B.Sc. Mathematics, developing a strong foundation in analytical and logical reasoning.'
        points={[
          'Specialized in calculus, statistics, and abstract algebra.',
          'Participated in seminars and competitive math workshops.',
          'Developed strong independent research and study habits.'
        ]}
      />
    )
  },
  {
    title: '2016',
    content: (
      <AboutMeCard
        role='HSC'
        company='St. Johns Hr. Sec. School'
        description='Completed my Higher Secondary education with a focus on Science and Mathematics.'
        points={[
          'Excelled in mathematics and physics.',
          'Developed strong analytical and logical thinking skills.',
          'Laid a solid foundation for future academic pursuits.'
        ]}
      />
    )
  },
  {
    title: '2014',
    content: (
      <AboutMeCard
        role='SSLC'
        company='St. Johns Hr. Sec. School'
        description='Completed my SSLC, marking the beginning of my academic and career journey.'
        points={[
          'Built strong discipline and a consistent study routine.',
          'Discovered my passion for numbers and logical thinking.',
          'Formed the core values that continue to guide my journey.'
        ]}
      />
    )
  }
];
