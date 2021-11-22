<template>
  <div>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
        <button @click="viewdata">Click</button>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ cId }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      isLoading: true,
      cId: this.id,
      selectedCoach: [],
    };
  },
  computed: {
    fullName() {
      // return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
      return 'Tomba';
    },
    areas() {
      // return this.selectedCoach.areas;
      return ['A'];
    },
    rate() {
      // return this.selectedCoach.hourlyRate;
      return 20;
    },
    description() {
      // return this.selectedCoach.description;
      return 34;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
  created() {
    // let cId = this.id;
    // console.log(this.$store.getters['coaches/coaches'])
    // this.selectedCoach = this.$store.getters['coaches/coaches'].find(
    //   (coach) => coach.id === cId
    // );
    // this.selectedCoach = this.$store.getters['coaches/coaches'].filter(
    //   (coach) => coach.id === this.cId
    // );
    // console.log(this.selectedCoach)
    this.viewCoach();
  },
  // mounted(){
  //   this.viewCoach();
  // },
  methods: {
    async viewCoach() {
      this.isLoading = true;
      // let routePar = this.$route.params.id;
      // console.log(routePar)
      let coachesArr = await this.$store.getters['coaches/coaches'];
      let selected = await coachesArr.filter((coach) => 
      coach.id === this.$route.params.id
      );

      //   this.selectedCoach = this.$store.getters['coaches/coaches'].filter(
      //   (coach) => coach.id === this.cId
      // );
      // let bigCities = cities.filter(city => city.population > 3000000);
      this.isLoading = false;
      console.log(selected);
    },
    viewdata() {
      let routePar = this.$route.params.id;
      let coachesArr = this.$store.getters['coaches/coaches'];
      let selected = coachesArr.filter((coach) => coach.id !== routePar);
      console.log(selected);
    },
  },
};
</script>