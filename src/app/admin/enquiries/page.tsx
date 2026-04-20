"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-data";
import { MdPhone, MdEmail, MdBusiness, MdCheckCircle, MdRadioButtonUnchecked, MdDelete } from "react-icons/md";

interface Enquiry {
  id: number;
  form_type: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  contacted: boolean;
  created_at: string;
}

const FORM_TYPE_LABELS: Record<string, { label: string; color: string }> = {
  enquiry: { label: "Enquiry", color: "#295e8f" },
  contact: { label: "Contact", color: "#7c3aed" },
  quote:   { label: "Quote",   color: "#ee991a" },
};

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "contacted">("all");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setEnquiries(data || []);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleContacted = async (id: number, current: boolean) => {
    try {
      const { error } = await supabase
        .from("enquiries")
        .update({ contacted: !current })
        .eq("id", id);

      if (error) throw error;
      setEnquiries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, contacted: !current } : e))
      );
    } catch (error) {
      console.error("Error updating enquiry:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this enquiry?")) return;
    try {
      const { error } = await supabase.from("enquiries").delete().eq("id", id);
      if (error) throw error;
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    }
  };

  const filtered = enquiries.filter((e) => {
    const statusMatch =
      filter === "all" ? true : filter === "pending" ? !e.contacted : e.contacted;
    const typeMatch = typeFilter === "all" ? true : e.form_type === typeFilter;
    return statusMatch && typeMatch;
  });

  const counts = {
    all: enquiries.length,
    pending: enquiries.filter((e) => !e.contacted).length,
    contacted: enquiries.filter((e) => e.contacted).length,
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Enquiries</h1>
          <p>Manage all form submissions</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "24px" }}>
        {(["all", "pending", "contacted"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            style={{
              padding: "16px",
              borderRadius: "12px",
              border: `2px solid ${filter === s ? "#295e8f" : "#e5e7eb"}`,
              backgroundColor: filter === s ? "#295e8f08" : "white",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 700, color: "#1a2e44" }}>{counts[s]}</div>
            <div style={{ fontSize: "13px", color: "#6b7280", textTransform: "capitalize", marginTop: "2px" }}>
              {s === "all" ? "Total" : s}
            </div>
          </button>
        ))}
      </div>

      {/* Type filter */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
        {["all", "enquiry", "contact", "quote"].map((t) => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            style={{
              padding: "6px 16px",
              borderRadius: "20px",
              border: "1px solid",
              borderColor: typeFilter === t ? "#295e8f" : "#e5e7eb",
              backgroundColor: typeFilter === t ? "#295e8f" : "white",
              color: typeFilter === t ? "white" : "#374151",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {t === "all" ? "All Types" : t}
          </button>
        ))}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No enquiries found</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {filtered.map((enquiry) => {
            const typeInfo = FORM_TYPE_LABELS[enquiry.form_type] || { label: enquiry.form_type, color: "#6b7280" };
            return (
              <div
                key={enquiry.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                  borderLeft: `4px solid ${enquiry.contacted ? "#10b981" : typeInfo.color}`,
                  opacity: enquiry.contacted ? 0.75 : 1,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                  {/* Left — contact info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ fontWeight: 700, fontSize: "16px", color: "#1a2e44" }}>
                        {enquiry.name}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "2px 10px",
                          borderRadius: "20px",
                          backgroundColor: `${typeInfo.color}15`,
                          color: typeInfo.color,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {typeInfo.label}
                      </span>
                      {enquiry.contacted && (
                        <span style={{ fontSize: "11px", fontWeight: 600, padding: "2px 10px", borderRadius: "20px", backgroundColor: "#d1fae5", color: "#065f46" }}>
                          Contacted
                        </span>
                      )}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "14px", color: "#4b5563" }}>
                      {enquiry.email && (
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <MdEmail size={15} /> {enquiry.email}
                        </span>
                      )}
                      {enquiry.phone && (
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <MdPhone size={15} /> {enquiry.phone}
                        </span>
                      )}
                      {enquiry.company && (
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <MdBusiness size={15} /> {enquiry.company}
                        </span>
                      )}
                    </div>

                    {enquiry.service && (
                      <div style={{ marginTop: "8px", fontSize: "13px", color: "#6b7280" }}>
                        <strong>Service:</strong> {enquiry.service}
                      </div>
                    )}

                    {enquiry.message && (
                      <div style={{
                        marginTop: "10px",
                        fontSize: "13px",
                        color: "#6b7280",
                        backgroundColor: "#f9fafb",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        lineHeight: "1.6",
                        whiteSpace: "pre-line",
                      }}>
                        {enquiry.message}
                      </div>
                    )}

                    <div style={{ marginTop: "10px", fontSize: "12px", color: "#9ca3af" }}>
                      {new Date(enquiry.created_at).toLocaleString("en-GB", {
                        day: "numeric", month: "short", year: "numeric",
                        hour: "2-digit", minute: "2-digit",
                      })}
                    </div>
                  </div>

                  {/* Right — actions */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
                    <button
                      onClick={() => toggleContacted(enquiry.id, enquiry.contacted)}
                      title={enquiry.contacted ? "Mark as pending" : "Mark as contacted"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 14px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: 600,
                        backgroundColor: enquiry.contacted ? "#d1fae5" : "#295e8f",
                        color: enquiry.contacted ? "#065f46" : "white",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {enquiry.contacted ? (
                        <><MdCheckCircle size={16} /> Done</>
                      ) : (
                        <><MdRadioButtonUnchecked size={16} /> Mark Contacted</>
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(enquiry.id)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "8px",
                        border: "1px solid #fca5a5",
                        backgroundColor: "white",
                        color: "#ef4444",
                        cursor: "pointer",
                        fontSize: "13px",
                      }}
                    >
                      <MdDelete size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
