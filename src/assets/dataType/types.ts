export type Item = {
  id: number;
  question: string;
  src: any;
  alt: string;
  imageClass: string;
  divClass: string;
};

export type ParentVariants = {
  hidden: { opacity: number };
  show: {
    opacity: number;
    transition: { type: string; staggerChildren: number };
  };
};
