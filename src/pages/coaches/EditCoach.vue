<template>
  <section>
    <base-card>
      <h2>Edit Coach Details</h2>
      <coach-edit-form @update-data="updateData"></coach-edit-form>
    </base-card>
  </section>
</template>

<script>
import CoachEditForm from '../../components/coaches/CoachEditForm.vue';

export default {
  components: {
    CoachEditForm,
  },
  methods: {
    updateData(data) {
      // console.log(data)
      this.$store.dispatch('coaches/updateCoaches', data);
      // this.$router.replace('/coaches');
    }
  }
};
</script>