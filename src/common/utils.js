export function computeDollars(btc, btcRate) {
    return btc * btcRate;
}

export function formatDollars(dollars) {
    dollars = (Math.round(dollars * 100) / 100).toFixed(2);
    dollars = dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return dollars;
}

export function reRenderDirectory(){

    console.log("hi levi")

}