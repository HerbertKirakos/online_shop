import axios from "axios";


export  const API = axios.create({
    baseURL: 'https://sephora.p.rapidapi.com',
    
    headers: {
      'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
      'X-RapidAPI-Key': 'd5904a9de8msh786a58d8af8f667p118379jsn19bae099dab5' // Robert
    }
  });