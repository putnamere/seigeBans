document.addEventListener('click', () => {
    document.querySelectorAll('span').forEach(s => s.style.visibility = 'hidden')
})

document.addEventListener('mousemove', e => {
    document.querySelectorAll(".background").forEach(el => el.style.setProperty("--mouse-y", `${e.clientY}px`))
    document.querySelectorAll(".background").forEach(el => el.style.setProperty("--mouse-x", `${e.clientX}px`))
})
document.querySelectorAll('.inputDiv').forEach(e => {
    let target = e
    e.addEventListener('click', () => {
        for (let i = 0; i < target.children.length; i++) {
            setTimeout(() => {
                target.children[i].style.visibility = 'visible'
            }, 10);
        }
    })
})

document.querySelector('.search').addEventListener('click', () => {
    showSearch()
})

let isXbox = [true, true, true, true, true]

const hideSearch = () => {
    document.querySelector('.wrapper').style.display = 'none'
    document.querySelector('.playerStats').style = ''
    document.querySelector('.loading').style.display = 'none'
}
const showSearch = () => {
    document.querySelector('.wrapper').style = ''
    document.querySelector('.playerStats').style.display = 'none'
    document.querySelector('.loading').style.display = 'none'
}
const showLoading = () => {
    document.querySelector('.wrapper').style.display = 'none'
    document.querySelector('.playerStats').style.display = 'none'
    document.querySelector('.loading').style = ''
}
showSearch()
//"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/platinum-3.png"
//"https://trackercdn.com/cdn/r6.tracker.network/operators/badges/valkyrie.png"

document.querySelectorAll(".platforms").forEach((platform, i) => {
    let xboxButton = platform.children[0] 
    let psButton = platform.children[1]
    xboxButton.style = 'box-shadow: inset 0px 0px 5px white'
    psButton.addEventListener('click', () => {
        psButton.style = 'box-shadow: inset 0px 0px 5px white;'
        xboxButton.style = ''
        isXbox[i] = false
    })
    xboxButton.addEventListener('click', () => {
        psButton.style = ''
        xboxButton.style = 'box-shadow: inset 0px 0px 5px white'
        isXbox[i] = true
    })
})

const clearNames = () => document.querySelectorAll("input").forEach(i => i.value = '')

const getStats = () => {
    showLoading()
    let names = []
    document.querySelectorAll("input").forEach((input, i) => names.push([input.value, isXbox[i]]))
    fetch(`${document.URL}getPlayers`, {
        method: "POST", 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ players: names }) 
    }).then(res => res.json()).then(data => {
        console.log(data)
        hideSearch()
        data.forEach((player, i) => {
            if (typeof player == "object") {
                document.querySelector(`.player-${i+1} > .rank`).src = player.rankImg ? player.rankImg : 'https://trackercdn.com/cdn/r6.tracker.network/ranks/s23/small/unranked.png'
                document.querySelector(`.player-${i+1} > .name`).innerHTML = `${player.ign}&nbsp;`
                document.querySelector(`.player-${i+1} > .op1`).src = player.op1 ? player.op1 : './question-mark.png'
                document.querySelector(`.player-${i+1} > .op2`).src = player.op2 ? player.op2 : './question-mark.png'
                document.querySelector(`.player-${i+1} > .op3`).src = player.op3 ? player.op3 : './question-mark.png'
                document.querySelector(`.player-${i+1} > .kd`).innerHTML = `${player.kd}&nbsp;`
                document.querySelector(`.player-${i+1} > .ltk`).innerHTML = `${player.ltk}&nbsp;`
                document.querySelector(`.player-${i+1} > .hsp`).innerHTML = `${player.hsp}&nbsp;`
                document.querySelector(`.player-${i+1} > .level`).innerHTML = `${player.level}`
            } else {
                document.querySelector(`.player-${i+1} > .rank`).src = './question-mark.png'
                document.querySelector(`.player-${i+1} > .name`).innerHTML = `${player}&nbsp;`
                document.querySelector(`.player-${i+1} > .op1`).src = './question-mark.png'
                document.querySelector(`.player-${i+1} > .op2`).src = './question-mark.png'
                document.querySelector(`.player-${i+1} > .op3`).src = './question-mark.png'
                document.querySelector(`.player-${i+1} > .kd`).innerHTML = `&nbsp;NaN&nbsp;`
                document.querySelector(`.player-${i+1} > .ltk`).innerHTML = `NaN&nbsp;`
                document.querySelector(`.player-${i+1} > .hsp`).innerHTML = `NaN&nbsp;`
                document.querySelector(`.player-${i+1} > .level`).innerHTML = `NaN`
            }
        })
    })
}