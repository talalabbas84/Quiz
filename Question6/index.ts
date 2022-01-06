// const useAuthProvide = () => {
//   const [tenantId, setTenantId] = useState(
//     window.localStorage.getItem('tenantId'),
//   );
//   const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
//   const [accessToken, setAccessToken] = useState(
//     window.localStorage.getItem('access_token'),
//   );
//   const history = useHistory();
//   const userLogin = async (
//     email: string,
//     password: string,
//     redirectPath: string,
//   ) => {
//     try {
//       const response = await axios({
//         method: 'post',
//         url: `https://domain.com/api/login`,
//         data: {
//           email,
//           password,
//         },
//       });
//       if (response.data) {
//         console.log(JSON.stringify(response.data, null, 2));
//         if (response.data.type !== 'tenant') {
//           alert('Unauthorized User');
//         } else {
//           window.localStorage.setItem('userId', response.data.userId);
//           setUserId(response.data.userId);
//           window.localStorage.setItem('tenantId', response.data.tenantId);
//           setTenantId(response.data.tenantId);
//           console.log('tenantId:' + tenantId);
//           window.localStorage.setItem(
//             'access_token',
//             response.data.accessToken,
//           );
//           setAccessToken(response.data.accessToken);
//           history.push(redirectPath);
//         }
//       }
//     } catch (e) {
//       alert('Error Happened');
//     }
//   };

// How i will improve this code?
// 1. I will use the useEffect hook to check the accessToken and userId and set state if they are available.
// 2. I will make a file named store.ts and add the following code and import it in the index.ts file to get and retrieve data from store.
  // const prefix = "1594461923517";
  // const store = window.localStorage
  // export const Store = {
  //   // utilities
  //   set: (name, item) => {
  //     store.set(prefix + name, item);
  //   },
  //   get: (name, arg) => {
  //     return store.get(prefix + name) || arg;
  //   },
  //   setUserToken: (accessToken) => {
  //     store.set(prefix + "accessToken", accessToken);
  //   },
  //   setUserId: (userId) => {
  //     store.set(prefix + "userId", userId);
  //   },
  //   setTenantId: (user) => {
  //     store.set(prefix + "user", user);
  //   },
  //   getUserToken: (arg) => {
  //     return store.get(prefix + 'accessToken') || arg;
  //   },
  //   getUserId: (arg) => {
  //     return store.get(prefix + 'userId') || arg;
  //   },
  //   getTenantId: (arg) => {
  //     return store.get(prefix + 'user') || arg;
  //   },
  //   getAllKeys: (arg) => {
  //     return store.getAllKeys() || arg
  //   },
  //   remove: (key) => {
  //     return store.remove(prefix + key);
  //   },
  //   reset(except = []) {
  //     store.getAllKeys().forEach(key => {
  //       if (except.findIndex(i => (prefix + i) == key) == -1) {
  //         store.remove(key);
  //       }
  //     })
  //   },
  //   logoutAndReset: () => {
  //     store.remove(prefix + 'user');
  //     store.remove(prefix + 'userId');
  //     store.remove(prefix + 'tenantId');
  //     store.remove(prefix + 'accessToken');

  //   },
  // }


// 3. I will make seperate file named apiService.ts and add the following code and import it in the index.ts file to make the api calls.
  // import Axios from 'axios';
  // import { method } from 'lodash';
  // import { baseurl } from '../store/constants/baseurl';
  // import { Popup } from '../uiComponents';

  // import { Store } from './store';
  // // const FileUpload = require('react-fileupload');
  // // want don't use so run 'npm uninstall --save react-fileupload'
  // // Add a request interceptor
  // Axios.interceptors.request.use(
  //   function (config) {
  //     if (config.progress) {
  //       Popup.show({
  //         progressBar: true,
  //       });
  //     }
  //     // Do something before request is sent

  //     return config;
  //   },
  //   function (error) {
  //     Popup.hide();
  //     // Do something with request error
  //     return Promise.reject(error);
  //   },
  // );

  // // Add a response interceptor
  // Axios.interceptors.response.use(
  //   function (response) {
  //     // Any status code that lie within the range of 2xx cause this function to trigger
  //     // Do something with response data
  //     // console.log("response interceptor");
  //     Popup.hide();
  //     return response;
  //   },
  //   function (error) {
  //     Popup.hide();
  //     // Any status codes that falls outside the range of 2xx cause this function to trigger
  //     // Do something with response error
  //     return Promise.reject(error);
  //   },const useAuthProvide = () => {
//   const [tenantId, setTenantId] = useState(
//     window.localStorage.getItem('tenantId'),
//   );
//   const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
//   const [accessToken, setAccessToken] = useState(
//     window.localStorage.getItem('access_token'),
//   );
//   const history = useHistory();
//   const userLogin = async (
//     email: string,
//     password: string,
//     redirectPath: string,
//   ) => {
//     try {
//       const response = await axios({
//         method: 'post',
//         url: `https://domain.com/api/login`,
//         data: {
//           email,
//           password,
//         },
//       });
//       if (response.data) {
//         console.log(JSON.stringify(response.data, null, 2));
//         if (response.data.type !== 'tenant') {
//           alert('Unauthorized User');
//         } else {
//           window.localStorage.setItem('userId', response.data.userId);
//           setUserId(response.data.userId);
//           window.localStorage.setItem('tenantId', response.data.tenantId);
//           setTenantId(response.data.tenantId);
//           console.log('tenantId:' + tenantId);
//           window.localStorage.setItem(
//             'access_token',
//             response.data.accessToken,
//           );
//           setAccessToken(response.data.accessToken);
//           history.push(redirectPath);
//         }
//       }
//     } catch (e) {
//       alert('Error Happened');
//     }
//   };
  // );
  // export const api = {
  //   invoke: (method, url, data = {}, token = Store.getUserToken(null)) => {
  //     let progress = data && data.progress === false ? data.progress : true;
  //     // console.log('progress',progress)
  //     let param = null;
  //     if (method.toLowerCase() == 'get') {
  //       param = data;
  //       data = null;
  //     }
  //     return Axios({
  //       url: url,
  //       progress: progress,
  //       baseURL: baseurl,
  //       method: method,
  //       headers: {
  //         Authorization: 'Bearer ' + token,
  //       },
  //       params: param,
  //       data: data,
  //     }).catch((error) => {
  //       return error.response;
  //     });
  //   },
  //   uploadFormData: (
  //     method,
  //     url,
  //     data = {},
  //     token = Store.getUserToken(null),
  //   ) => {
  //     //   console.log(ot)
  //     // alert(token);
  //     const config = {
  //       method: method,
  //       headers: {
  //         Authorization: 'Bearer ' + token,
  //         Accept: 'application/json',
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       body: data,
  //     };

  //     return Axios({
  //       url: url,
  //       baseURL: baseurl,
  //       method: method,
  //       headers: {
  //         Authorization: 'Bearer ' + token,
  //         Accept: 'application/json',
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       data: data,
  //     }).catch((error) => {
  //       return error.response;
  //     });
  //   },
  // };