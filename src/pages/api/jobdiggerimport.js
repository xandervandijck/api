export default async function handler(req, res) {
  const repsonse = await fetch('https://searchapi.jobdigger.nl/v2/search', {
    method: 'POST',
    body: JSON.stringify({
    userLanguage: 'nl-NL',
    query: {
      dateUpdated: {
              "gte": 'now-6h/h',
              "lte": "now/h"
          },
      active: true,
      groupLeader: true,
      intermediate: "no",
      isJobboard: false,
          language: "nl",
      TypeOfContracts: [
        "Parttime"
      ],
      workingHoursTo: [
        "24.0",
              "23.0",
              "22.0",
              "21.0",
              "20.0",
              "19.0",
              "18.0",
              "17.0",
              "16.0",
              "15.0",
              "14.0",
              "13.0",
              "12.0",
              "11.0",
              "10.0",
              "9.0",
              "8.0",
              "7.0",
              "6.0",
              "5.0",
              "4.0",
              "3.0",
              "2.0",
              "1.0",
              "0.0"
      ]
      
     },
      fieldsConfiguration: {
          fields: [
              "EscoCompetenceOptional",
              "EscoCompetence",
              "EscoKnowledge",
              "EscoKnowledgeRequired",
              "EscoUuid"
          ],
          type: "EXCLUDE"
      },
      limit: 250
  }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'X-API-Key': process.env.JOBDIGGER_API,
    },
  })
  return res.status(200).json(await repsonse.json())  
}
