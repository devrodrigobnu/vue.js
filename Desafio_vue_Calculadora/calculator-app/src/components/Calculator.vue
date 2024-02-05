<template>
      <div>
            <h1>Calculadora</h1>
            <input v-model="num1" type="number" placeholder="Digite o primeiro número" />
            <input v-model="num2" type="number" placeholder="Digite o segundo número" />
            <button @click="somar">Somar</button>
            <button @click="subtrair">Diminuir</button>
            <button @click="dividir">Dividir</button>
            <button @click="multiplacar">Multiplacar</button>

            <p>Resultado: {{ resultado }}</p>
      </div>
</template>

<script>
export default {
      data() {
            return {
                  num1: 0,
                  num2: 0,
                  resultado: 0
            };
      },
      methods: {
            somar() {
                  this.resultado = Number(this.num1) + Number(this.num2);
            },
            subtrair() {
                  this.resultado = Number(this.num1) - Number(this.num2);
            },
            dividir() {
                  this.resultado = Number(this.num1) / Number(this.num2)
            },
            multiplacar() {
                  this.resultado = Number(this.num1) * Number(this.num2)
            }
      }
};
</script>

<style scoped>
.calculator-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      text-align: center;
}

input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
}

button:hover {
      background-color: #45a049;
}

.resultado {
      font-size: 18px;
      margin-top: 10px;
}
</style>
