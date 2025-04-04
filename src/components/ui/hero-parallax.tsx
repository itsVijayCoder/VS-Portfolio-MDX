'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue
} from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerTextFlip } from './container-text-flip';

type Products = {
  id: number;
  title: string;
  link: string;
  thumbnail: string;
};

type HeroParallaxProps = {
  products: Products[];
};
export const HeroParallax = ({ products }: HeroParallaxProps) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className='relative flex h-[250vh] flex-col self-auto overflow-hidden rounded-lg py-10 antialiased [perspective:1000px] [transform-style:preserve-3d] lg:h-[310vh] 2xl:h-[230v]'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
        className=''
      >
        <motion.div className='mb-20 flex flex-row-reverse space-x-20 space-x-reverse'>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className='mb-20 flex flex-row space-x-20'>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse space-x-20 space-x-reverse'>
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='relative top-0 left-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40'>
      <h1 className='hidden text-2xl font-bold sm:block md:text-7xl dark:text-white'>
        The Ultimate{' '}
        <span className=''>
          <ContainerTextFlip
            words={['React', 'NextJS', 'TypeScript']}
            textClassName='text-primary-blue '
            className='[background:var(--color-background)]'
          />
        </span>
        <br />
        developer..
      </h1>
      <h1 className='text-3xl font-bold sm:hidden md:text-7xl dark:text-white'>
        The Ultimate <span className='text-primary-blue text-4xl'>React</span>
        <br />
        developer..
      </h1>
      <p className='mt-8 max-w-2xl text-lg md:text-xl'>
        I build beautiful products with the latest technologies and frameworks.
        I am a passionate developer that love to build amazing products.
      </p>
    </div>
  );
};

type ProductCardProps = {
  product: Products;
  translate: MotionValue<number>;
};

export const ProductCard = ({ product, translate }: ProductCardProps) => {
  return (
    <motion.div
      style={{
        x: translate
      }}
      whileHover={{
        y: -20
      }}
      key={product.id}
      className='group/product relative h-96 w-[40rem] shrink-0'
    >
      <Link
        href={product.link}
        className='block group-hover/product:shadow-2xl'
      >
        <Image
          src={product.thumbnail}
          height='600'
          width='600'
          className='absolute inset-0 h-full w-full rounded-lg object-cover object-left-top'
          alt={product.title}
        />
      </Link>
      <div className='pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 transition-all duration-300 group-hover/product:rounded-lg group-hover/product:opacity-80'></div>
      <h2 className='absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100'>
        {product.title}
      </h2>
    </motion.div>
  );
};
