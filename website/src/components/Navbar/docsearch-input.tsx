"use client";

import { DocSearch } from "@docsearch/react";

import "@docsearch/css";
import "@/styles/docsearch.css";

export default function DocSearchInput() {
  return (
    <DocSearch
      appId="XW4C4EHHAU"
      indexName="codinasn"
      apiKey="350fa7d9887bc726f217d7f485cd427a"
    />
  );
}
