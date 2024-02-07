const app = Vue.createApp({
    data() {
        return {
            url: "https://www.google.com.br",
            number1: 0,
            number2: 0,
            result: 0,
            showBooks: false,
            isLoggedIn: false,
            username: '',
            password: '',
            loginError: '',
            // title: "Procurando DEV",
            // author: "Mario Idelbran",
            // age: 9,
            books: [
                {
                    title: "Procurando DEV", author: "Mario Idelbran",
                    img: 'img/1.jpg', isFav: true
                },
                {
                    title: "Harry Dev e o Emprego Secreto", author: "J.K. DEV",
                    img: 'img/2.jpg', isFav: false
                },
                {
                    title: "Percy DEV e o Ladrao de Códigos", author: "Anônimo",
                    img: 'img/3.jpg', isFav: true
                },
            ],

        }
    },
    methods: {
        changeTitle($title) {
            this.title = $title
        },

        // outra forma de fazer o aparecer/desaparecer livros
        showBooksHandler() {
            this.showBooks = !this.showBooks
        },
        handlerEvent(e) {
            console.log(e)


        },

        handlerEvent2(e) {
            e.target.innerText = "Troquei"

        },

        somar() {
            this.result = this.number1 + this.number2

        },

        dividir() {
            this.result = this.number1 / this.number2

        },

        multiplicar() {

            this.result = this.number1 * this.number2
        },

        subtrair() {

            this.result = this.number1 - this.number2
        },
        toggleFavorite(index) {
            this.books[index].isFav = !this.books[index].isFav;
        },
        login() {
            const fakeUsername = 'Rodrigo';
            const fakePassword = 'password';
            if (this.username === fakeUsername && this.password === fakePassword) {
                this.isLoggedIn = true;
                this.loginError = '';
            } else {
                this.isLoggedIn = false;
                this.loginError = 'Usuario ou senha incorretas. Por favor tente novamente'
            }
        },
        logout() {
            this.isLoggedIn = false;
            this.username = '';
            this.password = '';
            this.loginError = '';
        },
        // Filtra os livros
        // filtrando() {
        //     this.books.filter(book => book.isFav == true)
        //}

    },
    // São funcoes dinamicas que funcionam em tempo real
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav)
        }
    }
})
app.mount('#app')



