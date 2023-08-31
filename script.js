const populate = async (desired, value, currency) => {
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_3QfydeiYUnxxCdq38xKPitbZSMYYnyEH4YaPKBbS&base_currency=" + currency;
    let response = await fetch(url);
    let rjson = await response.json();
    for (let key of Object.keys(rjson["data"])) {
        if (key == desired) {
            output.innerHTML = (rjson["data"][key]["value"] * value).toFixed(2);
            break;
        }
    }
}
const btn = document.querySelector(".btn");
SUBMIT.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    const desired = document.querySelector("select[name='val']").value;
    populate(desired, value, currency);
})



