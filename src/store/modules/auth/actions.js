import axios from 'axios';
export default {
  async login(context, data){
     await axios.post('http://localhost/myProjectVue-Cors/public/api/login', 
    data
  )
  .then((response) => {
    if(response.data.success){
      console.log(response.data);
    }else{
      console.log('error')
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  // console.log(responseData.json());
  },
  // Register
  async signUp(context, data){
    // console.log(data)
  // async submitForm(){
    const dataStr = {
      name: data.name,
      email: data.email,
      password: data.password,
      address: data.address,
      pin: data.pin
    }
    console.log(dataStr)
    const responseData = await fetch('http://127.0.0.1:8000/api/register', 
    {
      method: 'POST',
      body: JSON.stringify(dataStr)
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log(responseData);
  context.commit('setUserDetails', {
    ...dataStr
  });
  // context.commit('setToken', {
  //   token:23523
  // })
  },
   async getUser() {
      const response = await axios.get('http://localhost/myProjectVue-Cors/public/api/getUsers');
        //  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      // const response = await axios.get('http://127.0.0.1:8000/api/getUsers');
      console.log(response);
  },
};
