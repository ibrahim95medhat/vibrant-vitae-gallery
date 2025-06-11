import axios from "axios";
const baseUrl = "https://fortunate-art-a076497b9b.strapiapp.com/api/";
// https://fortunate-art-a076497b9b.strapiapp.com/api/resume?populate=*
export const getCv = async () => {
  try {
    const {
      data: {
        data: {
          resume: { url },
        },
      },
    } = await axios.get(`${baseUrl}resume?populate=*`);

    console.log(url);

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postForm = async (form:unknown) => {
  const response = await axios(`${baseUrl}`);
  console.log(response);
};
