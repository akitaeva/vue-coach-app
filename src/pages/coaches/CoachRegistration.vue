<template>
  <section>
    <baseCard>
      <h2>Register as a coach now!</h2>
      <CoachRegForm @save-data="saveData"></CoachRegForm>
    </baseCard>
  </section>
</template>

<script>
import CoachRegForm from "../../components/coaches/CoachRegForm";

export default {
  components: {
    CoachRegForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/coaches");
    },
  },
};
</script>
