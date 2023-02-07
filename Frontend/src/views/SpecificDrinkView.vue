<template>
  <div>
    <div>
      <h1>Detalji</h1>
      <div class="col d-flex justify-content-center">
        <div class="card">
          <li
            v-for="resurs in resursi"
            :key="resurs.ime"
            @click="postavi_id(resurs._id)"
          >
            ID: {{ resurs._id.$oid }} Ime pjesme: {{ resurs.ime }} Url:
            {{ resurs.url }} Ocjena:
            {{ resurs.ocjena }}
          </li>
        </div>
      </div>
    </div>
    <button v-on:click="izbrisi" class="btn btn-dark" style="margin: 0.2em">
      Izbriši
    </button>
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
    this.id = localStorage.getItem("_id");
    console.log("Dobiveni id:");
    console.log(this.id);
    console.log(this.pice);
    let podatci = await fetch(
      "https://picenator3000.herokuapp.com/api/pjesme/" +
        this.pice +
        "/" +
        this.id
    );
    let rezultati = await podatci.json();
    this.resursi = rezultati;
  },

  methods: {
    izbrisi() {
      let xhr = new XMLHttpRequest();
      xhr.open(
        "DELETE",
        "https://picenator3000.herokuapp.com/api/pjesme/" + this.id
      );
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
        }
      };

      let podatci = {
        _id: this.id,
      };

      console.log(podatci);
      alert("Uspješno ste obrisali iz databaze");
      xhr.send(JSON.stringify(podatci));
    },

    natrag() {
      this.$router.push("/specific");
    },
  },
};
</script>
