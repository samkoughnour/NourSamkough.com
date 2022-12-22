import axios, { AxiosResponse } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { params } = req.query

  const url: string =
    'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
    params +
    '&key=' +
    process.env.GOOGLE_MAPS_API_KEY

  return new Promise((resolve, reject) => {
    axios.get(url).then((response: AxiosResponse) => {
      res.status(200).json(response.data)
    })
  })
}
