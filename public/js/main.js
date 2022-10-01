const search = document.querySelectorAll('.fa-solid')
const addButton = document.querySelectorAll('.fav')

Array.from(addButton).forEach((el)=>{
    el.addEventListener('click', wrenchClick)
})

async function wrenchClick(){

        const whichButton = this
    
    //     const vin = this.parentNode.parentNode.parentNode.children[6].innerText
    //     const row = this.parentNode.parentNode.parentNode.children[5].innerText
    //     const location = this.parentNode.parentNode.parentNode.children[4].innerText
    //     const date = this.parentNode.parentNode.parentNode.children[3].innerText
    //     const year = this.parentNode.parentNode.parentNode.children[2].innerText
    //     const make = this.parentNode.parentNode.parentNode.children[1].innerText
    //     const img = this.parentNode.parentNode.parentNode.children[0].firstChild.childNodes[0].alt
    
    // // console.log( buttonId)
    // console.log( vin)
    // console.log( row)
    // console.log( location)
    // console.log( date)
    // console.log( year)
    // console.log( make)
    // console.log( img)

    // $(".fav")[0].parentNode.previousSibling.previousSibling.previousSibling.previousSibling

    console.log("fuck this")

    try{
        const response = await fetch('/favorites', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({

                // 'vin': "vin",
                // 'row': "row",
                // 'location': "location",
                // 'date': "date",
                // 'year': "1999",
                // 'make': "toyota",
                // 'img': "url.url"

                // 'vin': vin,
                // 'row': row,
                // 'location': location,
                // 'date': date,
                // 'year': year,
                // 'make': make,
                // 'img': img
                'vin': whichButton.parentNode.parentNode.parentNode.children[6].innerText,
                'row': whichButton.parentNode.parentNode.parentNode.children[5].innerText,
                'location': whichButton.parentNode.parentNode.parentNode.children[4].innerText,
               'date': whichButton.parentNode.parentNode.parentNode.children[3].innerText,
               'year': whichButton.parentNode.parentNode.parentNode.children[2].innerText,
                'make': whichButton.parentNode.parentNode.parentNode.children[1].innerText,
                'img': whichButton.parentNode.parentNode.parentNode.children[0].firstChild.childNodes[0].alt,
                
            })
        })
        const data = await response.json()
        console.log(data)
        alert("favorite added")
        location.reload()
       

    }catch(err){
        console.log(err)
    }
}