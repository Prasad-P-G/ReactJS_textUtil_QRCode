import React from "react";

export default function About() {
  return (
    <div
      className="mt-5 mx-5"
      style={{
        width: "700px",
        display: "flex",
        top: "10px",
        paddingTop: "20px",
        paddingLeft: "20px",
        backgroundColor: "gray",
      }}
    >
      <p style={{ color: "white" }}>
        Text analysis is the process of using computer systems to read and
        understand human-written text for business insights. Text analysis
        software can independently classify, sort, and extract information from
        text to identify patterns, relationships, sentiments, and other
        actionable knowledge.
      </p>
    </div>
  );
}
