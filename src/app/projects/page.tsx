// import ContentWithSearch from '@/components/content-with-search'
import Container from '@/components/layout/container';
import Projects from '@/components/projects/projects';
import { getAllContent } from '@/lib/content';

const ProjectsPage = async () => {
  const allProjects = await getAllContent('projects');
  return (
    <>
      <Container className='max-w-3xl py-10'>
        <h1 className='title mb-12'>Projects</h1>

        {/* <ContentWithSearch contents={allProjects} path='projects' /> */}
        <Projects projects={allProjects} path='projects' />
      </Container>
    </>
  );
};

export default ProjectsPage;
