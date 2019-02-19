const fetchData = async <T>(endpoint: string, method: string, data: T, version: string) => {
  console.log('iandkkd')
  return fetch(
    `${BASE_URL}${endpoint}`, {
    method: method,
    mode: 'cors',
    headers: HEADERS(version),
    body: JSON.stringify(data)
  })
    .then((response: Response) => response.json())
}

const BASE_URL: string = 'https://devapi.bcaster.com'

const HEADERS = (version: string) => {
  let authToken = {};
  let token = localStorage.getItem('token');

  if(token) {
    authToken = {'Authorization': token}
  }

  return new Headers({
    "Content-Type": "application/json",
    "X-API-SECRET": "pRhPAq$SvG&%8fBvxHB-vnVOo)^zRf+Kh79RrJG1rbphsXJ5ct4TZm99#oV3r3@8ev*Vn(^#4Dby0@P((D$A%$4d-)aLOv-u#vk(",
    "X-API-KEY": "14a2ff95-4d8e-4795-bf25-8feffa9d3c59",
    "X-API-VERSION": version,
    ...authToken
  })
}

const signinUser = () => {
   return fetchData(
    '/users/signin',
    'POST',
    {
      email: 'apiguest@bcaster.com',
      password: 'apiguest2019',
      channel: 'bcaster',
      origin: 'web',
      appId: 'BCaster-Android-V3.5.2'
    },
    '4.3.0'
  )
}
export {fetchData, signinUser}