import { getAllContent } from '@/lib/content';
import DynamicContentPage from '@/components/common-ui/dynamic-content';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  const allNotes = await getAllContent('notes');
  const slugs = allNotes.map((note) => ({ slug: note.slug }));
  return slugs;
};
const DynamicNotesPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug) {
    return null;
  }

  return <DynamicContentPage path='notes' slug={slug} />;
};

export default DynamicNotesPage;
