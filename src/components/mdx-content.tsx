'use client';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
// import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { JSX } from 'react';
import { Callout } from '@/components/callout';
import { MdxCard } from '@/components/mdx-card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import MdxAccordion from '@/components/mdx-accordion';

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </>
  );
}

type ComponentProps<T extends HTMLElement> = React.HTMLAttributes<T> & {
  className?: string;
};

const components = {
  Image,
  Callout,
  Card: MdxCard,
  Accordion: MdxAccordion,
  h1: ({ className, ...props }: ComponentProps<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentProps<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentProps<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: ComponentProps<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: ComponentProps<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: ComponentProps<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps<HTMLParagraphElement>) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentProps<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentProps<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentProps<HTMLLIElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentProps<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        '[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: ComponentProps<HTMLHRElement>) => (
    <hr className='my-4 md:my-8' {...props} />
  ),
  table: ({ className, ...props }: ComponentProps<HTMLTableElement>) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: ComponentProps<HTMLTableRowElement>) => (
    <tr
      className={cn('even:bg-muted m-0 border-t p-0', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: ComponentProps<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentProps<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: ComponentProps<HTMLPreElement>) => (
    <pre
      className={cn(
        'm-0 overflow-x-auto rounded-lg border bg-black p-0',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentProps<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className
      )}
      {...props}
    />
  )
};
