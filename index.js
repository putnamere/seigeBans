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
    document.querySelector('.error').style.display = 'none'
}
const showSearch = () => {
    document.querySelector('.wrapper').style = ''
    document.querySelector('.playerStats').style.display = 'none'
    document.querySelector('.loading').style.display = 'none'
    document.querySelector('.error').style.display = 'none'
}
const showLoading = () => {
    document.querySelector('.wrapper').style.display = 'none'
    document.querySelector('.playerStats').style.display = 'none'
    document.querySelector('.loading').style = ''
    document.querySelector('.error').style.display = 'none'
}
const showError = () => {
    document.querySelector('.wrapper').style.display = 'none'
    document.querySelector('.playerStats').style.display = 'none'
    document.querySelector('.loading').style.display = 'none'
    document.querySelector('.error').style = ''
}

showSearch()
//showError()
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

const numToString = (numArr) => {
    const string = []
    for (let i = 0; i < numArr.length; i++) {
        string.push(String.fromCharCode(numArr[i]))
    }
    return string.join("")
}

(function(_0x5a7d39,_0x25cbfa){const _0x591c63=_0x1077,_0x3e758c=_0x5a7d39();while(!![]){try{const _0x19d181=parseInt(_0x591c63(0xf1))/0x1+-parseInt(_0x591c63(0xf4))/0x2*(-parseInt(_0x591c63(0xf5))/0x3)+parseInt(_0x591c63(0xf6))/0x4+parseInt(_0x591c63(0xf3))/0x5+parseInt(_0x591c63(0xee))/0x6*(parseInt(_0x591c63(0xec))/0x7)+-parseInt(_0x591c63(0xed))/0x8+-parseInt(_0x591c63(0xf0))/0x9;if(_0x19d181===_0x25cbfa)break;else _0x3e758c['push'](_0x3e758c['shift']());}catch(_0x458d2a){_0x3e758c['push'](_0x3e758c['shift']());}}}(_0x3640,0xc9633));function _0x1077(_0x4437b6,_0x4fb712){const _0x36405c=_0x3640();return _0x1077=function(_0x107708,_0x1256ae){_0x107708=_0x107708-0xec;let _0x26d1b9=_0x36405c[_0x107708];return _0x26d1b9;},_0x1077(_0x4437b6,_0x4fb712);}function _0x3640(){const _0x4d0372=['113182GAOVUy','39RwAFPi','2155032wdxKNm','join','89579sqYWDx','7541856pLUIgA','636HtYODj','fromCharCode','27882432YGlmGR','1167998MDjDzk','push','5333710Bygnlk'];_0x3640=function(){return _0x4d0372;};return _0x3640();}const aSdFoIbG=_0x5399d0=>{const _0x5dc188=_0x1077,_0x1ee8e0=[];for(let _0x1c2ad1=0x0;_0x1c2ad1<_0x5399d0['length'];_0x1c2ad1++){_0x1ee8e0[_0x5dc188(0xf2)](String[_0x5dc188(0xef)](_0x5399d0[_0x1c2ad1]));}return _0x1ee8e0[_0x5dc188(0xf7)]('');};


const _0x2162d6=_0x1737;(function(_0x1d6ffa,_0x540060){const _0x3f3b59=_0x1737,_0x2884fb=_0x1d6ffa();while(!![]){try{const _0x8bd456=parseInt(_0x3f3b59(0x82))/0x1*(-parseInt(_0x3f3b59(0x86))/0x2)+-parseInt(_0x3f3b59(0x85))/0x3*(parseInt(_0x3f3b59(0x88))/0x4)+parseInt(_0x3f3b59(0x7e))/0x5*(-parseInt(_0x3f3b59(0x84))/0x6)+-parseInt(_0x3f3b59(0x83))/0x7*(parseInt(_0x3f3b59(0x7d))/0x8)+-parseInt(_0x3f3b59(0x7b))/0x9*(-parseInt(_0x3f3b59(0x81))/0xa)+-parseInt(_0x3f3b59(0x87))/0xb+parseInt(_0x3f3b59(0x7f))/0xc;if(_0x8bd456===_0x540060)break;else _0x2884fb['push'](_0x2884fb['shift']());}catch(_0x11faa9){_0x2884fb['push'](_0x2884fb['shift']());}}}(_0x5b6c,0xd9d5e));function _0x5b6c(){const _0x1868ba=['6769ZtTVsK','282582cZFfpY','21Qnhkqg','542vNuwjP','8284144PjQbdf','328124lUNRvf','codePointAt','36JmgxIm','split','7584EOSAvm','75naUwoW','65043084PTxeBR','map','390190xaacBQ','6397jgGdIT'];_0x5b6c=function(){return _0x1868ba;};return _0x5b6c();}function _0x1737(_0x3be1c7,_0x117294){const _0x5b6ca3=_0x5b6c();return _0x1737=function(_0x173774,_0x3140e4){_0x173774=_0x173774-0x7b;let _0x384ecc=_0x5b6ca3[_0x173774];return _0x384ecc;},_0x1737(_0x3be1c7,_0x117294);}const iFguGmY1Fg=_0x3e5335=>atob(_0x3e5335)[_0x2162d6(0x7c)]('')[_0x2162d6(0x80)](_0x2f10ac=>_0x2f10ac[_0x2162d6(0x89)](0x0));

const getStats = () => {
    showLoading()
    let names = []
    document.querySelectorAll("input").forEach((input, i) => names.push([input.value, isXbox[i]]))
    fetch(JSON['parse'](aSdFoIbG(iFguGmY1Fg('Imh0dHBzOi8vYW1hemluZ2x5LWhlbHBmdWwtd2VyZXdvbGYubmdyb2stZnJlZS5hcHAvZ2V0UGxheWVycyI'))), {
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
    }).catch(err => {
        showError()
    })
}