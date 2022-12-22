import axios, {AxiosResponse} from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'
import createRouteUrl from "../../../../components/nourmaps/createRouteUrl";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    

    const params = req.query.params

    const url:string = createRouteUrl(params)

    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((response: AxiosResponse) => {
            res.status(200).json(response.data)
          })})
}