const BASE_URL_API = "https://geopet.herokuapp.com/";

export async function getPetsAroundMe(geoloc) {
  const { userLat, userLng } = geoloc;
  return await fetch(
    `${BASE_URL_API}/pets?userLat=${userLat}&userLng=${userLng}`
  );
}
