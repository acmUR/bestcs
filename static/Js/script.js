const btn = document.getElementById('theme_switch')
const title = document.getElementById('title')
var theme_off = true

btn.onclick =  function(){
    // console.log(`${theme_off}`)
    if(theme_off === true){
        // document.body.style.backgroundColor = 'rgb(26, 37, 61)'
        document.documentElement.style.setProperty('--BG_color', 'rgb(20, 29, 48)');
        document.documentElement.style.setProperty('--main_color', 'rgb(162, 52, 52');


        theme_off = false
    } else{
        document.documentElement.style.setProperty('--BG_color', 'rgb(34, 34, 34)');
        document.documentElement.style.setProperty('--main_color', 'rgb(207, 207, 207)');

        theme_off = true
    }
}
// rgb(210, 0, 0)


/*

background-image:
        radial-gradient(rgb(162, 52, 52) 0.6px, transparent 0.6px),
        radial-gradient(rgb(162, 52, 52) 0.6px, transparent 0.6px);
background-size: 30px 30px;
background-position: 0 0, 14px 14px;

! Goes inside .sec

background-color: rgba(65, 65, 65, 0.294);
    background-color: var(--BG_color);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.75);



*/
