import DynamicContentPage from '@/components/common-ui/dynamic-content';
import { getAllContent } from '@/lib/content';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  const allProjects = await getAllContent('projects');
  const slugs = allProjects.map((project) => ({ slug: project.slug }));
  return slugs;
};

const DynamicProjectsPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug) {
    return null;
  }

  return <DynamicContentPage path='projects' slug={slug} />;
};

export default DynamicProjectsPage;
