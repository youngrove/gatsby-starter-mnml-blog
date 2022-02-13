export interface Frontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface PageContext {
  tag: string;
}

export interface IndexQuery {
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

export interface tagListQuery {
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
