class MyTime {
    constructor(continent, country, capital) {
        this.country = new Country(continent, country, capital);
        this.time = new Date();
    }

    getTime(time) {
        if (time) return time.toLocaleString('en-US', { timeZone: `${this.country.continent}/${this.country.capital}` });
        else return this.time.toLocaleString('en-US', { timeZone: `${this.country.continent}/${this.country.capital}` });
    }

    nextHour() {
        const newTime = new MyTime(this.country.continent, this.country.country, this.country.capital);
        newTime.time = new Date(this.time);
        newTime.time.setHours(newTime.time.getHours()+1);
        return newTime;
    }

    previousHour() {
        const newTime = new MyTime(this.country.continent, this.country.country, this.country.capital);
        newTime.time = new Date(this.time);
        newTime.time.setHours(newTime.time.getHours()-1);
        return newTime;
    }

    getTimeOf(newCountry) {
        const newTime = new MyTime(newCountry.continent, newCountry.country, newCountry.capital);
        newTime.time = new Date(this.time.toLocaleString('en-US', { timeZone: `${newCountry.continent}/${newCountry.capital}` }));
        return newTime;
    }

    static getMonthText(date) {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return months[date.getMonth()];
    }

    toString() {
        const timeLocale = this.getTime();
        const timeCountry = new Date(timeLocale);
        const timeLocaleMonthText = timeLocale.replace(`${timeCountry.getMonth()+1}/`, `${MyTime.getMonthText(timeCountry)} `);

        return `${this.country.continent}-${this.country.country}-${this.country.capital}: ${timeLocaleMonthText}`;
    }
}