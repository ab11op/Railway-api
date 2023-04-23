import { Request,ResponseToolkit } from "@hapi/hapi"
import axios from 'axios'

export const getTrainStatus = async(req:Request,res:ResponseToolkit)=> {
const apiUrl = 'https://apigw.umangapp.in/CRISApi/ws1/ntes/s1/spotTrainSchedule'


const response = await axios.get(apiUrl);
// return response.data;
console.log("response:",response)


}
