import React from "react";
import { Helmet } from "react-helmet";
import { useSeo } from "../../hooks/useSeo";
import SchemaOrg from "../SchemaOrg";

interface SeoProps {
  title: string;
  desc?: string;
  pathname?: string;
  image?: string;
  isPosting?: boolean;
  postDate?: string;
}
const Seo = ({
  desc,
  title,
  pathname,
  image,
  isPosting,
  postDate,
}: SeoProps) => {
  const site = useSeo();
  const {
    siteMetadata: {
      siteUrl,
      lang,
      defaultTitle,
      defaultDescription,
      defaultImage,
      author,
      organization,
    },
  } = site;
  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ""}`,
  };

  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={title}
        defaultTitle={defaultTitle}
      >
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
      </Helmet>
      <SchemaOrg
        title={title}
        url={seo.url}
        canonicalUrl={siteUrl}
        image={seo.image}
        description={seo.description}
        author={author}
        organization={organization}
        dataPublished={postDate}
        isPosting={isPosting}
      />
    </>
  );
};

export default Seo;
