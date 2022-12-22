const createRouteUrl = (locations:string[]):string =>{
    let url = "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=place_id:" + locations[0]
    for (let i = 1; i< locations.length; i++) {
        url = url+"%7Cplace_id:"+locations[i]
    }
    url = url + "&origins=place_id:" + locations[0]
    for (let i = 1; i< locations.length; i++) {
      url = url+"%7Cplace_id:"+locations[i]
    }
    url = url + "&key=AIzaSyAMKDjAl-8_6y8k9fDcBSgQmQqhI3GvqmI"
    return(url)
  }

export default createRouteUrl