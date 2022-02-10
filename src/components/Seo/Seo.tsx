import React from "react";
import { Helmet } from "react-helmet";
import { useSeo } from "../../hooks/useSeo";

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}
const Seo = ({ description = "", lang = "en", meta = [], title }: SeoProps) => {
  const site = useSeo();
  console.log(site);
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      defaultTitle={site?.siteMetadata?.title}
    />
  );
};

export default Seo;
