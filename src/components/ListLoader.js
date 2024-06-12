const url = 'https://lists.priem.etu.ru/public';

export const getListCompetitions = async (campaign, typeList) => {
    try {
        console.log("Trying to connect to: " + `${url}/competitions/${campaign}/${typeList}`);
        const response = await fetch(`${url}/competitions/${campaign}/${typeList}`);
        const { data } = await response.json();
        //console.log("Data: ", data);
        return data;
    } catch {
        return 'error';
    }
}

export const getList = async (uuid) => {
    try {
        const response = await fetch(`${url}/list/${uuid}`);
        const { data } = await response.json();
        return data;
    } catch {
        return 'error';
    }
}