<template>
  <div>
    <h1>Detalji za pice {{ pice }}</h1>
    <div>
      <div class="col d-flex justify-content-center">
        <div class="card">
          <router-link to="/specific_drink"
            ><li
              v-for="resurs in resursi"
              :key="resurs.ime"
              @click="postavi_id(resurs._id)"
            >
              {{ resurs.ime }}
            </li></router-link
          >
        </div>
      </div>
    </div>
    <button v-on:click="natrag" class="btn btn-dark" style="margin: 0.2em">
      Natrag
    </button>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      pice: "",
      resursi: [],
      id: "",
    };
  },

  async mounted() {
    this.pice = localStorage.getItem("pice");
    let podatci = await fetch(
      "https://picenator3000.herokuapp.com/api/pjesme/" + this.pice
    );
    let rezultati = await podatci.json();
    this.resursi = rezultati;
    console.log(rezultati);
  },

  methods: {
    postavi_id(id) {
      console.log("id");
      console.log(id.$oid);
      this.id = localStorage.setItem("_id", id.$oid);
    },

    natrag() {
      this.$router.push("/delete");
    },
  },
};
</script>
