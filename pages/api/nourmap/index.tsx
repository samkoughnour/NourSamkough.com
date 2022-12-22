import axios, {AxiosResponse} from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from "node:path/win32";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const API_KEY:string = "AIzaSyAMKDjAl-8_6y8k9fDcBSgQmQqhI3GvqmI"
    const url:string = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=' + API_KEY

    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((response: AxiosResponse) => {
            console.log(response.data.rows[0].elements)
            res.status(200).json(response.data)
          })})
}