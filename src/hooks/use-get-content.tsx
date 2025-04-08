import { getAllContent } from '@/lib/content';

const useGetContents = async (limit?: number) => {
  const allNotes = await getAllContent('notes', limit ? limit : 0);
  const allProjects = await getAllContent('projects', limit ? limit : 0);
  return { allNotes, allProjects };
};

export default useGetContents;
