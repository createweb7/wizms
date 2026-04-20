"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase, ConsultantPage } from "@/lib/supabase-data";
import ConsultantForm from "@/components/admin/ConsultantForm";

export default function EditConsultantPage() {
  const params = useParams();
  const id = params.id as string;
  const [page, setPage] = useState<ConsultantPage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const { data, error } = await supabase
          .from("consultant_pages")
          .select("*")
          .eq("id", parseInt(id))
          .single();

        if (error) throw error;
        setPage(data);
      } catch (error) {
        console.error("Error fetching consultant page:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPage();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="page-container">
        <p className="text-red-600">Consultant page not found</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Edit Consultant Page</h1>
          <p>{page.page_name}</p>
        </div>
      </div>
      <ConsultantForm initialPage={page} />
    </div>
  );
}
