function digiclk(){
    var date = new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dt=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var day =date.getDay()
    console.log(hh,mm,ss,dt,mo,yy,day)
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh-=12
        }
    }
    if(hh==0)
    {
        hh=12
    }

    switch(mo)
    {
        case 0: mo="jan"
        break
        case 1: mo="feb"
        break
        case 2: mo="mar"
        break
        case 3: mo="april"
        break
        case 4: mo="may"
        break
        case 5: mo="june"
        break
        case 6: mo="july"
        break
        case 7: mo="aug"
        break
        case 8: mo="sep"
        break
        case 9: mo="oct"
        break
        case 10: mo="nov"
        break
        case 11: mo="dec"
        break
    }
    switch(day)
    {
        case 0: day="Sunday"
        document.body.style.backgroundImage="linear-gradient(90deg,red,blue)"
        break
        case 1: day="Monday"
        document.body.style.backgroundImage="linear-gradient(90deg,pink,orange)"
        break
        case 2: day="Tuesday"
        document.body.style.backgroundImage="linear-gradient(90deg,teal,skyblue)"
        break
        case 3: day="Wednesday"
        document.body.style.backgroundImage="linear-gradient(90deg,gray,violet)"
        break
        case 4: day="Thursday"
        document.body.style.backgroundImage="linear-gradient(90deg,rgb(197, 47, 177),rgb(194, 226, 11))"
        break
        case 5: day="Friday"
        document.body.style.backgroundImage="linear-gradient(90deg,rgb(224, 50, 108),rgb(49, 219, 140))"
        break
        case 6: day="saturday"
        document.body.style.backgroundImage="linear-gradient(90deg,rgb(129, 34, 66),rgb(40, 220, 226))"
        break
    }

    document.getElementById("date").innerHTML=`${dt}/${mo}/${yy}`
    document.getElementById("time").innerHTML=`${hh}:${mm}:${am_pm}`
    document.getElementById("day").innerHTML=day
    document.getElementById("sec").innerHTML=ss
    setTimeout(digiclk,1000)
}
digiclk() 