import ContentWithSearch from '@/components/common-ui/content-with-search';
import Container from '@/components/layout/container';
import { getAllContent } from '@/lib/content';

const NotesPage = async () => {
  const allNotes = await getAllContent('notes');
  return (
    <>
      {/* <section className='py-10'> */}
      {/* <div className='container max-w-3xl'> */}

      <Container className='max-w-3xl py-10'>
        <h1 className='title mb-12'>Notes</h1>

        <ContentWithSearch contents={allNotes} path='notes' />
      </Container>
      {/* </div> */}
      {/* </section> */}
    </>
  );
};

export default NotesPage;
