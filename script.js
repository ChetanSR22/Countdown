const targetDate = new Date ('2025-01-01T00:00:00')

function updateCountdown(){
    const currentDate = new Date()

    const timeDiff = targetDate - currentDate

    const days = Math.floor(timeDiff/(1000 * 60 * 60 * 24))

    const hours = Math.floor((timeDiff % 1000 * 60 * 60 * 24)/(1000 * 60 * 60))

    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000* 60))

    const seconds = Math.floor((timeDiff % 1000 * 60) / 1000)


    document.getElementById('countdown').innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
    setTimeout(updateCountdown,1000)
}

updateCountdown()