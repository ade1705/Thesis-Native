const APIURL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchDiagnosis = async (diagnosisPayload) => {
    return await fetch(APIURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diagnosisPayload)
    });
};
