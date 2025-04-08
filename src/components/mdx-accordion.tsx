import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type AccordionProps = React.ComponentProps<typeof Accordion>;
type MdxAccordionProps = AccordionProps & {
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  type?: 'single' | 'multiple';
};
const MdxAccordion = ({
  header,
  children,
  className,
  type = 'single'
}: MdxAccordionProps) => {
  return (
    <>
      <Accordion type={type} collapsible className={cn('w-full', className)}>
        <AccordionItem value='item-1' className='bg-foreground/10 rounded-md'>
          <AccordionTrigger className='px-2 text-xl'>{header}</AccordionTrigger>
          <AccordionContent className='p-0'>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default MdxAccordion;
