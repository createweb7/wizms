"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase, Content } from "@/lib/supabase-data";
import MicroblogForm from "@/components/admin/MicroblogForm";

export default function EditMicroblogPage() {
  const params = useParams();
  const id = params.id as string;
  const [microblog, setMicroblog] = useState<Content | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMicroblog = async () => {
      try {
        const { data, error } = await supabase
          .from("microblogs")
          .select("*")
          .eq("id", parseInt(id))
          .single();

        if (error) throw error;
        setMicroblog(data);
      } catch (error) {
        console.error("Error fetching microblog:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMicroblog();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!microblog) {
    return (
      <div className="page-container">
        <p className="text-red-600">Microblog not found</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Edit Microblog</h1>
        <p>Update your microblog</p>
      </div>
      <MicroblogForm initialMicroblog={microblog} />
    </div>
  );
}
