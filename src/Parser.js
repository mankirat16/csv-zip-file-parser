// function parseProfessionalSummary(professionalSummary) {
//     // Replace bullet points with commas
//     const cleanedSummary = professionalSummary.replace(/•/g, ',');

//     // Wrap the cleaned summary with <p> tags
//     const parsedSummary = `<p>${cleanedSummary.trim()}</p>`;

//     return parsedSummary;
//   }

//   export default parseProfessionalSummary;

function parseProfessionalSummary(professionalSummary) {
  // Replace bullet points with commas
  const cleanedSummary = professionalSummary.replace(/•/g, ",");

  // Remove leading commas
  const trimmedSummary = cleanedSummary.replace(/^,+/g, "");

  // Wrap the cleaned and trimmed summary with <p> tags
  const parsedSummary = `<p>${trimmedSummary.trim()}</p>`;

  return parsedSummary;
}

export default parseProfessionalSummary;
