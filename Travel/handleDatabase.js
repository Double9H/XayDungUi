import tours from './database.js'
export const optionTags = tours.reduce(function (result, tour) {
    return [...result,
    `<option 
            class="adultsPrice"
            id=${tour.id} 
            value=${tour.price.toLocaleString('vi-VN')}
            >${tour.name} 
    </option>`]
}, []).join('')