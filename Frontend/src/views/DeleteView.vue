<template>
  <div>
    <div>
      <h1>Odaberite piće za prikazat pjesme:</h1>
      <div class="col d-flex justify-content-center" style="margin: 0.2em">
        <div>
          <button-group class="col d-flex justify-content-center">
            <div
              class="col d-flex justify-content-center"
              style="margin: 0.2em"
            >
              <div class="card">
                <img
                  :src="require(`@/assets/img/bambus.jpg`)"
                  height="150px"
                  width="150px"
                  style="margin: 1em"
                />

                <div
                  class="col d-flex justify-content-center"
                  style="margin: 0.2em"
                >
                  <button
                    v-on:click="biranje('Bambus')"
                    type="button"
                    class="btn btn-outline-dark"
                    style="width: 6rem"
                  >
                    Bambus
                  </button>
                </div>
              </div>
            </div>

            <div
              class="col d-flex justify-content-center"
              style="margin: 0.2em"
            >
              <div class="card">
                <img
                  :src="require(`@/assets/img/đeger-cola.jpg`)"
                  height="150px"
                  width="150px"
                  style="margin: 1em"
                />

                <div
                  class="col d-flex justify-content-center"
                  style="margin: 0.2em"
                >
                  <button
                    v-on:click="biranje('Jaeger')"
                    type="button"
                    class="btn btn-outline-dark"
                    style="width: 6rem"
                  >
                    Jäger Cola
                  </button>
                </div>
              </div>
            </div>

            <div
              class="col d-flex justify-content-center"
              style="margin: 0.2em"
            >
              <div class="card">
                <img
                  :src="require(`@/assets/img/gin-tonic.jpg`)"
                  height="150px"
                  width="150px"
                  style="margin: 1em"
                />

                <div
                  class="col d-flex justify-content-center"
                  style="margin: 0.2em"
                >
                  <button
                    v-on:click="biranje('Gin')"
                    type="button"
                    class="btn btn-outline-dark"
                    style="width: 6rem"
                  >
                    Gin Tonic
                  </button>
                </div>
              </div>
            </div>
          </button-group>
        </div>
      </div>
      <div>
        <div class="col d-flex justify-content-center" style="margin: 0.2em">
          <div>
            <button-group class="col d-flex justify-content-center">
              <div
                class="col d-flex justify-content-center"
                style="margin: 0.2em"
              >
                <div class="card">
                  <img
                    :src="require(`@/assets/img/jack_s_ledom.jpg`)"
                    height="150px"
                    width="150px"
                    style="margin: 1em"
                  />

                  <div
                    class="col d-flex justify-content-center"
                    style="margin: 0.2em"
                  >
                    <button
                      v-on:click="biranje('Jack')"
                      type="button"
                      class="btn btn-outline-dark"
                      style="width: 6rem"
                    >
                      Jack s ledom
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="col d-flex justify-content-center"
                style="margin: 0.2em"
              >
                <div class="card">
                  <img
                    :src="require(`@/assets/img/merlot.jpg`)"
                    height="150px"
                    width="150px"
                    style="margin: 1em"
                  />

                  <div
                    class="col d-flex justify-content-center"
                    style="margin: 0.2em"
                  >
                    <button
                      v-on:click="biranje('Merlot')"
                      type="button"
                      class="btn btn-outline-dark"
                      style="width: 6rem"
                    >
                      Merlot
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="col d-flex justify-content-center"
                style="margin: 0.2em"
              >
                <div class="card">
                  <img
                    :src="require(`@/assets/img/stock.jpg`)"
                    height="150px"
                    width="150px"
                    style="margin: 1em"
                  />

                  <div
                    class="col d-flex justify-content-center"
                    style="margin: 0.2em"
                  >
                    <button
                      v-on:click="biranje('Stock')"
                      type="button"
                      class="btn btn-outline-dark"
                      style="width: 6rem"
                    >
                      Stock Cola
                    </button>
                  </div>
                </div>
              </div>
            </button-group>
          </div>
        </div>
      </div>

      <div class="col d-flex justify-content-center" style="margin: 0.2em">
        <div>
          <button-group class="col d-flex justify-content-center">
            <div
              class="col d-flex justify-content-center"
              style="margin: 0.2em"
            >
              <div class="card">
                <img
                  :src="require(`@/assets/img/travarica.jpg`)"
                  height="150px"
                  width="150px"
                  style="margin: 1em"
                />

                <div
                  class="col d-flex justify-content-center"
                  style="margin: 0.2em"
                >
                  <button
                    v-on:click="biranje('Travarica')"
                    type="button"
                    class="btn btn-outline-dark"
                    style="width: 6rem"
                  >
                    Travarica
                  </button>
                </div>
              </div>
            </div>

            <div
              class="col d-flex justify-content-center"
              style="margin: 0.2em"
            >
              <div class="card">
                <img
                  :src="require(`@/assets/img/voda.jpg`)"
                  height="150px"
                  width="150px"
                  style="margin: 1em"
                />

                <div
                  class="col d-flex justify-content-center"
                  style="margin: 0.2em"
                >
                  <button
                    v-on:click="biranje('Voda')"
                    type="button"
                    class="btn btn-outline-dark"
                    style="width: 6rem"
                  >
                    Voda
                  </button>
                </div>
              </div>
            </div>

            <div
              class="col d-flex justify-content-center"
              style="margin: 0.2em"
            >
              <div class="card">
                <img
                  :src="require(`@/assets/img/vodka-juice.jpg`)"
                  height="150px"
                  width="150px"
                  style="margin: 1em"
                />

                <div
                  class="col d-flex justify-content-center"
                  style="margin: 0.2em"
                >
                  <button
                    v-on:click="biranje('Vodka')"
                    type="button"
                    class="btn btn-outline-dark"
                    style="width: 6rem"
                  >
                    Vodka Juice
                  </button>
                </div>
              </div>
            </div>
          </button-group>
        </div>
      </div>
    </div>

    <div class="col d-flex justify-content-center" style="margin: 0.2em">
      <button v-on:click="natrag" class="btn btn-dark" style="margin: 1em">
        Natrag
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",

  data() {
    return {
      pice: "",
    };
  },

  methods: {
    biranje(pice) {
      localStorage.setItem("pice", pice);
      this.$router.push("/specific");
    },

    natrag() {
      this.$router.push("/upis");
    },
  },
};
</script>
