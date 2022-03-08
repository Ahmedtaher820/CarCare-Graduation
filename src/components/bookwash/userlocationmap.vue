<template>
  <div
    class="mapbox mx-auto py-2 pb-1 border center-items"
    v-if="userlatlan != 0"
  >
    <span>ZoomIn To See Your Location</span>
    <GmapMap
      :center="{ lat: coords.lat, lng: coords.long }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 365px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  computed: {
    userlatlan() {
      return this.$store.state.userlatlan;
    },
    coords() {
      return this.$store.state.usercarwash.location;
    },
  },
};
</script>

<style></style>
