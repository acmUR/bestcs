const btn = document.getElementById('theme_switch')
const title = document.getElementById('title')
var theme_off = true

btn.onclick =  function(){
    // console.log(`${theme_off}`)
    if(theme_off === true){
        // document.body.style.backgroundColor = 'rgb(26, 37, 61)'
        document.documentElement.style.setProperty('--BG_color', 'rgb(26, 37, 61)');
        document.documentElement.style.setProperty('--main_color', 'rgb(210, 0, 0)');


        theme_off = false
    } else{
        document.documentElement.style.setProperty('--BG_color', 'rgb(34, 34, 34)');
        document.documentElement.style.setProperty('--main_color', 'rgb(207, 207, 207)');

        theme_off = true
    }
}
// rgb(210, 0, 0)
