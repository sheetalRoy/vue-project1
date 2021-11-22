import axios from 'axios';
export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(
      `https://vue-http-demo-85e9e.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async saveCoaches(context, data){
    const dataStr = {
      firstname: data.first,
      lastname: data.last,
      description: data.desc,
      rate: data.rate,
      areas: data.areas
    };
    const jsonStr = JSON.stringify(dataStr)
    // console.log(jsonStr)
    
    await axios.post('http://localhost/myProjectVue-Cors/public/api/saveCoaches', 
    jsonStr
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  // adding areas into dataStr json by hardcode
  // dataStr["areas"]=["frontend","backend"];
  // console.log(dataStr);
  context.commit('registerCoach', {
    ...dataStr,
  });
  },
  // Load Coaches data
  async loadCoaches(context, payload) {
    // console.log(context)
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      console.log('foreRefresh')
      return;
    }

    const response = await fetch(
      `http://localhost/myProjectVue-Cors/public/api/getCoaches`
    );
    const responseData = await response.json();
      // console.log(responseData.data[0].areas)
    if (!response.ok) {
      console.log('err')
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const coaches = [];
    var areaObj = [];
    for (const key in responseData.data) {
      // const coach = {
      //   id: responseData.data[key].id,
      //   firstName: responseData.data[key].firstname,
      //   lastName: responseData[key].lastname,
      //   description: responseData[key].description,
      //   hourlyRate: responseData[key].rate,
      //   areas: "Frontend"
      // };
      /* Fetch area and add in array */
      for(let i=0;i<responseData.data[key].areas.length;i++){
        //  alert(responseData.data[key].areas[i].area)
        areaObj[i] = responseData.data[key].areas[i].area
      }
      
      // for(const ar in responseData.data[key].areas){
      //   console.log(responseData.data[key].areas[ar].area)
      //   areaObj.unshift(responseData.data[key].areas[ar].area)
      //   // areaObj[ar] = responseData.data[key].areas[ar].area
      // }
      const coach = {
        id: responseData.data[key].id,
        firstName: responseData.data[key].firstname,
        lastName: responseData.data[key].lastname,
        description: responseData.data[key].description,
        hourlyRate: responseData.data[key].rate,
        areas: areaObj,
      };
      areaObj=[]
      coaches.push(coach);
    }
    console.log(coaches)

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
  async updateCoaches(context, data){
    const id = data.id;
    const dataStr = {
      firstname: data.first,
      lastname: data.last,
      description: data.desc,
      rate: data.rate
    };
    console.log(id)
    await axios.put(`http://localhost/myProjectVue-Cors/public/api/updateCoaches/${id}`, dataStr)
    .then(response => {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};
