class List{
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    save() {
        try {
            localStorage.setItem('list', JSON.stringify(this));
            return {status: true};
        } catch (e) {
            return {status: false, error: e};
        }
    }

    get() {
        try {
            const list = JSON.parse(localStorage.getItem('list'));
            this.name = list.name;
            this.items = list.items;
            return {status: true};
        } catch (e) {
            return {status: false, error: e};
        }
    }
}
/*
const list = new List('shopping list');
list.items = ['potatoes', 'pasta', 'rice'];
list.save();
console.log(list.get());
*/