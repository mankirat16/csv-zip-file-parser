// import React, { useState } from "react";
// import JSZip from "jszip";
// import Papa from "papaparse";

// function App() {
//   const [csvData, setCsvData] = useState({});

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const zip = new JSZip();
//     const zipData = await zip.loadAsync(file);

//     const parsedData = {};
//     let MyJSON = {};
//     MyJSON.educations = [];
//     MyJSON.workExperiences = [];
//     MyJSON.Skills = [];
//     // console.log(zipData.files);
//     // Loop through the extracted files and parse CSV files
//     for (const relativePath in zipData.files) {
//       if (relativePath.endsWith(".csv")) {
//         try {
//           const content = await zipData.files[relativePath].async("string");
//           const csvParsed = Papa.parse(content, { header: true });
//           if (relativePath.includes("Profile")) {
//             // console.log(csvParsed.data,"data");
//             MyJSON.firstName = csvParsed.data[0]["First Name"];
//             MyJSON.lastName = csvParsed.data[0]["Last Name"];
//             MyJSON.subTitle = csvParsed.data[0]["Headline"];
//             MyJSON.professional_summary = csvParsed.data[0]["Summary"];
//           }
//           if (relativePath.includes("Skills")) {
//             for (const record of csvParsed.data) {
//               MyJSON.Skills.push({
//                 id: record["Degree Name"] || null,
//                 skill: record["Name"] || null,
//                 level: record["Level"] || null,
//                 resumeId: record["City"] || null,
//                 createdAt: record["createdAt"] || null,
//                 updatedAt: record["updatedAt"] || null,
//                 position: record["position"] || null,
//                 sourceAlgo: record["sourceAlgo"] || null,
//                 cid: record["cid"] || null,
//               });
//             }
//             // MyJSON.Skills = csvParsed.data;
//           }

//           //Educations section
//           if (relativePath.includes("Education")) {
//             for (const record of csvParsed.data) {
//               MyJSON.educations.push({
//                 school: record["School Name"] || null,
//                 degree: record["Degree Name"] || null,
//                 city: record["City"] || null,
//                 dateFrom: record["Start Date"] || null,
//                 dateUntil: record["End Date"] || null,
//                 description: record["Notes"] || null,
//                 resumeId: record["id"] || null, // Use "id" from the CSV data
//                 createdAt: record["createdAt"] || null,
//                 updatedAt: record["updatedAt"] || null,
//                 position: record["position"] || null,
//                 isMonthUntilHidden: record["isMonthUntilHidden"] || false,
//                 isDateUntilPresent: record["isDateUntilPresent"] || false,
//                 isMonthFromHidden: record["isMonthFromHidden"] || false,
//                 cid: record["cid"] || null,
//               });
//             }
//           }

//           //Positions/WorkExperiences
//           if (relativePath.includes("Positions")) {
//             for (const record of csvParsed.data) {
//               MyJSON.workExperiences.push({
//                 title: record["Title"] || null,
//                 employer: record["Company Name"] || null,
//                 city: record["Location"] || null,
//                 dateFrom: record["Started On"] || null,
//                 dateUntil: record["Finished On"] || null,
//                 description: Array.isArray(record["Description"])
//                   ? record["Description"].join("\n")
//                   : record["Description"] || null,
//                 resumeId: record["id"] || null,
//                 createdAt: record["createdAt"] || null,
//                 updatedAt: record["updatedAt"] || null,
//                 position: record["Title"] || null,
//                 isMonthUntilHidden: record["isMonthUntilHidden"] || false,
//                 isDateUntilPresent: record["isDateUntilPresent"] || false,
//                 isMonthFromHidden: record["isMonthFromHidden"] || false,
//                 normalizedJobTitleId: record["normalizedJobTitleId"] || null,
//                 cid: record["cid"] || null,
//               });
//             }
//           }

//           parsedData[relativePath] = csvParsed.data;
//         } catch (error) {
//           console.error(`Error parsing CSV file ${relativePath}: ${error}`);
//         }
//       }
//     }
//     console.log(MyJSON);

//     // Store the parsed CSV data in state
//     setCsvData(parsedData);
//   };

//   return (
//     <div>
//       <input type="file" accept=".zip" onChange={handleFileUpload} />
//       {Object.keys(csvData).length > 0 && (
//         <div>
//           <h2>Parsed CSV Data</h2>
//           {Object.keys(csvData).map((filename) => (
//             <div key={filename}>
//               <h3>{filename}</h3>
//               <pre>{JSON.stringify(csvData[filename], null, 2)}</pre>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import JSZip from "jszip";
import Papa from "papaparse";
import parseProfessionalSummary from "./Parser";

function App() {
  const [csvData, setCsvData] = useState({});

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const zip = new JSZip();
    const zipData = await zip.loadAsync(file);

    const parsedData = {};
    let MyJSON = {};
    MyJSON.bgColor = "#082A4D";
    MyJSON.secondaryColor = "#40b281";
    MyJSON.demo = true;
    MyJSON.lineHeight = "100";
    MyJSON.fontFamily = "Helvetica";
    MyJSON.educations = [];
    MyJSON.workExperiences = [];
    MyJSON.Skills = [];
    MyJSON.socialProfiles = [];
    MyJSON.phoneNumber = "7696593565";
    MyJSON.dateOFBirth = "18-12-2000";
    MyJSON.courses = [];
    MyJSON.score = 49;
    MyJSON.hobbies = [];
    MyJSON.references = [];
    MyJSON.customSections = [];
    MyJSON.activities = [];
    MyJSON.type = "resume";
    MyJSON.avatar = {
      transform: null,
      thumbUrl: "?version=fbc5a3846",
      mediumUrl: "?version=fbc5a3846",
      originalUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      blank: true,
    };
    const activitiesData = [
      {
        id: 7060678,
        title: "Quark Pryas: Manager",
        employer: "Quark Inc",
        city: "MOHALI",
        dateFrom: "2014-03-01",
        dateUntil: "2016-04-01",
        description:
          "<ul>\n  <li>Manage the Social activities for the Quark Prays Group</li>\n  <li>Arrange Books for poor students</li>\n</ul>",
        resumeId: 19667604,
        createdAt: "2022-04-10T09:54:24.389+02:00",
        updatedAt: "2022-04-10T09:56:25.373+02:00",
        position: 1,
        isMonthUntilHidden: false,
        isDateUntilPresent: false,
        isMonthFromHidden: false,
        cid: null,
      },
    ];
    activitiesData.forEach((activity) => {
      const activityInfo = {
        title: activity.title,
        employer: activity.employer,
        city: activity.city,
        dateFrom: activity.dateFrom,
        dateUntil: activity.dateUntil,
        description: activity.description,
      };
      MyJSON.activities.push(activityInfo);
    });
    const customSectionsData = [
      {
        id: 7403199,
        title: "Custom Section 1",
        externalId: "3533979987",
        items: [
          {
            id: 7810120,
            sectionId: 7403299,
            title: "Sniper",
            city: "MOHALI",
            description:
              "<ul>\n  <li>Worked to ensure a positive and hassle-free customer experience.</li>\n  <li>Identified and maximized sales opportunities, and increased customer retention rates.</li>\n  <li>Settled any customer disputes in a professional and pleasant manner.</li>\n</ul>",
            dateFrom: "2022-02-01",
            dateUntil: null,
            isDateUntilPresent: null,
            isMonthUntilHidden: null,
            isMonthFromHidden: false,
            createdAt: "2022-02-24T20:45:48.853+01:00",
            updatedAt: "2022-02-24T20:45:59.313+01:00",
            position: 1,
            cid: null,
          },
        ],
      },
      {
        id: 7403299,
        title: "Custom Section 2",
        externalId: "3533979987",
        items: [
          {
            id: 7810120,
            sectionId: 7403299,
            title: "Soldier",
            city: "Chandigarah",
            description: null,
            dateFrom: "2022-02-01",
            dateUntil: null,
            isDateUntilPresent: null,
            isMonthUntilHidden: null,
            isMonthFromHidden: false,
            createdAt: "2022-02-24T20:45:48.853+01:00",
            updatedAt: "2022-02-24T20:45:59.313+01:00",
            position: 2,
            cid: null,
          },
        ],
      },
      {
        id: 7403399,
        title: "Custom Skills",
        externalId: "3533979987",
        items: [
          {
            id: 7810120,
            title: "Subtitle",
            sectionId: 7403299,
            description: "<p>Programming language</p>",
            createdAt: "2022-02-24T20:45:48.853+01:00",
            updatedAt: "2022-02-24T20:45:59.313+01:00",
            position: 2,
            cid: null,
          },
        ],
      },
    ];
    customSectionsData.forEach((customSection) => {
      const customSectionInfo = {
        title: customSection.title,
        items: customSection.items.map((item) => ({
          title: item.title,
          city: item.city,
          description: item.description,
          dateFrom: item.dateFrom,
          dateUntil: item.dateUntil,
        })),
      };
      MyJSON.customSections.push(customSectionInfo);
    });
    const referencesData = [
      {
        id: 11841261,
        name: "",
        company: "",
        phone: "07818752",
        email: "mankirat0816@gmail.com",
        resumeId: 19667604,
        createdAt: "2022-04-10T09:53:39.427+02:00",
        updatedAt: "2022-04-10T09:56:31.572+02:00",
        position: 1,
        cid: null,
      },
      {
        id: 11841261,
        name: "",
        company: "",
        phone: "07818752",
        email: "mankirat0816@gmail.com",
        resumeId: 19667604,
        createdAt: "2022-04-10T09:53:39.427+02:00",
        updatedAt: "2022-04-10T09:56:31.572+02:00",
        position: 2,
        cid: null,
      },
    ];
    referencesData.forEach((reference) => {
      const referenceInfo = {
        name: reference.name,
        company: reference.company,
        phone: reference.phone,
        email: reference.email,
      };
      MyJSON.references.push(referenceInfo);
    });
    const hobbyData = {
      id: 7333025,
      hobby: "<p>Chess\n Ludo</p>",
      resumeId: 19667604,
      createdAt: "2022-04-10T09:49:43.928+02:00",
      updatedAt: "2022-04-10T09:50:10.189+02:00",
      position: 1,
      cid: null,
    };

    const socialProfile1 = {
      id: 5431112,
      label: "Personal Website",
      link: "",
      resumeId: 19667604,
      createdAt: "2022-04-10T10:01:59.798+02:00",
      updatedAt: "2022-04-10T10:02:26.352+02:00",
      position: 1,
      cid: "_16014839.499364076",
    };

    const socialProfile2 = {
      id: 5431115,
      label: "Stackoverflow",
      link: "https://stackoverflow.com",
      resumeId: 19667604,
      createdAt: "2022-04-10T10:02:28.456+02:00",
      updatedAt: "2022-04-10T10:03:10.843+02:00",
      position: 2,
      cid: "_7328171.234935635",
    };

    const course1 = {
      id: 11071292,
      course: "Android Development",
      institution: "Netmex",
      dateFrom: "2009-04-01",
      dateUntil: "2012-12-01",
      description: null,
      resumeId: 19667604,
      createdAt: "2022-04-10T09:50:18.905+02:00",
      updatedAt: "2022-04-10T10:03:56.923+02:00",
      position: 1,
      isMonthUntilHidden: false,
      isDateUntilPresent: false,
      isMonthFromHidden: false,
      cid: null,
    };

    const course2 = {
      id: 11071299,
      course: "C++",
      institution: "Stackoverflow",
      dateFrom: "2006-04-01",
      dateUntil: "2007-03-01",
      description: null,
      resumeId: 19667604,
      createdAt: "2022-04-10T09:51:14.921+02:00",
      updatedAt: "2022-04-10T10:04:10.390+02:00",
      position: 2,
      isMonthUntilHidden: false,
      isDateUntilPresent: false,
      isMonthFromHidden: false,
      cid: null,
    };

    MyJSON.socialProfiles.push(socialProfile1, socialProfile2);
    MyJSON.courses.push(course1, course2);
    MyJSON.hobbies.push(hobbyData);

    for (const relativePath in zipData.files) {
      if (relativePath.endsWith(".csv")) {
        try {
          const content = await zipData.files[relativePath].async("string");
          const csvParsed = Papa.parse(content, { header: true });
          if (relativePath.includes("Profile")) {
            // console.log(csvParsed.data,"data");
            MyJSON.firstName = csvParsed.data[0]["First Name"];
            MyJSON.lastName = csvParsed.data[0]["Last Name"];
            MyJSON.subTitle = csvParsed.data[0]["Headline"];
            MyJSON.professional_summary = csvParsed.data[0]["Summary"];
          }
          if (relativePath.includes("Skills")) {
            for (const record of csvParsed.data) {
              MyJSON.Skills.push({
                id: record["Degree Name"] || null,
                skill: record["Name"] || null,
                level: record["Level"] || null,
                resumeId: record["City"] || null,
                createdAt: record["createdAt"] || null,
                updatedAt: record["updatedAt"] || null,
                position: record["position"] || null,
                sourceAlgo: record["sourceAlgo"] || null,
                cid: record["cid"] || null,
              });
            }
            // MyJSON.Skills = csvParsed.data;
          }

          //Educations section
          if (relativePath.includes("Education")) {
            for (const record of csvParsed.data) {
              MyJSON.educations.push({
                school: record["School Name"] || null,
                degree: record["Degree Name"] || null,
                city: record["City"] || null,
                dateFrom: record["Start Date"] || null,
                dateUntil: record["End Date"] || null,
                description: record["Notes"] || null,
                resumeId: record["id"] || null, // Use "id" from the CSV data
                createdAt: record["createdAt"] || null,
                updatedAt: record["updatedAt"] || null,
                position: record["position"] || null,
                isMonthUntilHidden: record["isMonthUntilHidden"] || false,
                isDateUntilPresent: record["isDateUntilPresent"] || false,
                isMonthFromHidden: record["isMonthFromHidden"] || false,
                cid: record["cid"] || null,
              });
            }
          }
          
          //Positions/WorkExperiences
          if (relativePath.includes("Positions")) {
            for (const record of csvParsed.data) {
              MyJSON.workExperiences.push({
                title: record["Title"] || null,
                employer: record["Company Name"] || null,
                city: record["Location"] || null,
                dateFrom: record["Started On"] || null,
                dateUntil: record["Finished On"] || null,
                description: Array.isArray(record["Description"])
                  ? record["Description"].join("\n")
                  : record["Description"] || null,
                resumeId: record["id"] || null,
                createdAt: record["createdAt"] || null,
                updatedAt: record["updatedAt"] || null,
                position: record["Title"] || null,
                isMonthUntilHidden: record["isMonthUntilHidden"] || false,
                isDateUntilPresent: record["isDateUntilPresent"] || false,
                isMonthFromHidden: record["isMonthFromHidden"] || false,
                normalizedJobTitleId: record["normalizedJobTitleId"] || null,
                cid: record["cid"] || null,
              });
            }
          }

          parsedData[relativePath] = csvParsed.data;
        } catch (error) {
          console.error(`Error parsing CSV file ${relativePath}: ${error}`);
        }
      }
    }
    MyJSON.professional_summary = parseProfessionalSummary(
      MyJSON.professional_summary
    );
    console.log(JSON.stringify(MyJSON));

    // Store the parsed CSV data in state
    setCsvData(parsedData);
  };

  return (
    <div>
      <input type="file" accept=".zip" onChange={handleFileUpload} />
      {Object.keys(csvData).length > 0 && (
        <div>
          <h2>Parsed CSV Data</h2>
          {Object.keys(csvData).map((filename) => (
            <div key={filename}>
              <h3>{filename}</h3>
              <pre>{JSON.stringify(csvData[filename], null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
