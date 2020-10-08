"use strict"

const hamburger = document.getElementById('hamburger')
const topNav= document.getElementById('top-nav')

hamburger.addEventListener('click', () => {
    topNav.className === 'top-nav' ? topNav.className= 'top-nav visible' : topNav.className= 'top-nav'
})

window.addEventListener('resize', () => {
    window.innerWidth > 800 && topNav.className === 'top-nav visible' ? topNav.className = 'top-nav' : null
})