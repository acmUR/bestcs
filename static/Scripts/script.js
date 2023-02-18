const btn = document.getElementById('theme_switch')
var theme_off = true

btn.onclick =  function(){
    // console.log(`${theme_off}`)
    if(theme_off === true){
        document.body.style.backgroundColor = 'rgb(26, 37, 61)'
        theme_off = false
    } else{
        document.body.style.backgroundColor = 'rgb(34, 34, 34)'
        theme_off = true
    }
}
