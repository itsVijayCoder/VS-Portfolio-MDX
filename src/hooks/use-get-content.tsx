import { getContent } from '@/lib/content';

const useGetContents = async (limit?: number) => {
  const allNotes = await getContent('notes', limit ? limit : 0);
  const allProjects = await getContent('projects', limit ? limit : 0);
  return { allNotes, allProjects };
};

export default useGetContents;
