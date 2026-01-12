"use client";

import React from "react";
import MicroblogForm from "@/components/admin/MicroblogForm";

export default function NewMicroblogPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Create New Microblog</h1>
        <p>Add a new microblog to your website</p>
      </div>
      <MicroblogForm />
    </div>
  );
}
