<template>
  <div>
    <section>
      <baseCard>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </baseCard>
    </section>
    <section>
      <baseCard>
        <header>
          <h2>Interested? Reach out now!</h2>
          <baseButton link :to="coachContactLink">Contact</baseButton>
        </header>
        <router-view></router-view>
      </baseCard>
    </section>
    <section>
      <baseCard>
        <baseBadge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></baseBadge>
        <p>{{ description }}</p>
      </baseCard>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
