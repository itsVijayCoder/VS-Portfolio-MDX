export type NavbarItem = {
  label: string;
  href: string;
};

export type Content = {
  metadata: ContentMetadata;
  content: string;
};

export type ContentMetadata = {
  slug: string;
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  author?: string;
  image?: string;
  coverImg?: string;
  video?: string;
};

export type PathDirectory = 'notes' | 'projects';

export type RecentContentsProps = {
  limit?: number;
  path: PathDirectory;
};
