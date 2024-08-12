import Header from "@/components/Header";
import { Editor } from "@/src/components/editor/Editor";
import React from "react";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit justify-center items-center gap-2">
          <p className="document-title">Document Title</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
