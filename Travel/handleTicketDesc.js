import {infor} from './main.js'

let ticket = {
    adultsCount: 0,
    adultsPrice: 0,
    adultsOfTotal: 0,
    childrenCount: 0,
    childrenPrice: 0,
    childrenOfTotal: 0,
    total: 0,
    calc() {
        this.adultsOfTotal = this.adultsCount * this.adultsPrice
        this.childrenOfTotal = this.childrenCount * this.childrenPrice
        this.total = this.adultsOfTotal + this.childrenOfTotal
    },
    render() {
        document.querySelector('td.adultsCount').textContent = this.adultsCount
        document.querySelector('td#adultsPrice').textContent = this.adultsPrice.toLocaleString('vi-VN')
        document.querySelector('td#adultsOfTotal').textContent = this.adultsOfTotal.toLocaleString('vi-VN')
        document.querySelector('td.childrenCount').textContent = this.childrenCount
        document.querySelector('td#childrenPrice').textContent = this.childrenPrice.toLocaleString('vi-VN')
        document.querySelector('td#childrenOfTotal').textContent = this.childrenOfTotal.toLocaleString('vi-VN')
        document.querySelector('td#total').textContent = this.total.toLocaleString('vi-VN') + 'đ'
    }
}

function renderPrice(tag) {
    if (tag.className == 'adultsCount' || tag.className == 'childrenCount' || tag.className == 'tour') {
        if (tag.className == 'adultsCount' || tag.className == 'childrenCount') {
            ticket[tag.className] = Number(tag.value)
        }
        else if (tag.className == 'tour') {
            let price = Number(tag.value.replace(/\./g, ''))
            ticket['adultsPrice'] = price
            ticket['childrenPrice'] = price / 2
        }
        ticket.calc()
        ticket.render()
    }
}

export function handleInfor() {
    infor[this.className] = this
    renderPrice(this)
}