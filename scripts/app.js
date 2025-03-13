const app = Vue.createApp({
    data(){
        return{
            // User Input Fields
            title: 'Week 10 lab',
            firstName: '',
            lastName: '',
            quantity: 0,
            pricePerItem: 10
        };
    },

    computed: {
        //Computes full name
        fullName(){
            return this.firstName + '' + this. lastName;
        },
        //Computes the total price
        totalPrice(){
            return this.quantity * this.pricePerItem;
        }
    },
    methods: {
        //clears all input fields
        clearFields(){
            this.firstName = '';
            this.lastName = '';
            this.quantity = 0;
        }
    }
});
// mounting vue app
app.mount('#app');