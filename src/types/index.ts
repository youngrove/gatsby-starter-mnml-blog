export interface Frontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface PageContext {
  tag?: string;
  skip?: number;
  limit?: number;
  numPages?: number;
  currentPage?: number;
}

export interface BlogListQuery {
  site: {
    siteMetadata: {
      title: string;
      gitUrl: string;
    };
  };
  allMdx: {
    edges: {
      node: {
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: Frontmatter;
      };
    }[];
  };
}

export interface BlogPostQuery {
  site: {
    siteMetadata: {
      title: string;
      gitUrl: string;
      utterances: string;
    };
  };
  mdx: {
    frontmatter: Frontmatter;
    excerpt: string;
    body: string;
  };
}

export interface TagListQuery {
  site: {
    siteMetadata: {
      title: string;
      gitUrl: string;
    };
  };
  allMdx: {
    edges: {
      node: {
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: Frontmatter;
      };
    }[];
  };
}

export interface SeoQuery {
  site: {
    siteMetadata: {
      siteUrl: string;
      lang: string;
      defaultTitle: string;
      defaultDescription: string;
      defaultImage: string;
      author: string;
      organization: {
        url: string;
        logo: string;
      };
    };
  };
}

export interface TagsQuery {
  allMdx: {
    edges: {
      node: {
        frontmatter: Frontmatter;
      };
    }[];
  };
}
