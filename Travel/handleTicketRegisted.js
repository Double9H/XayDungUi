import { infor } from './main.js'

function render() {
    const time = new Date().toLocaleString('vi-VN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
    const staffName = 'Vu Minh Hieu'
    const { userName, address, tour, note } = infor
    let result = `<table>
        <caption>
            <h1>Thông tin đăng ký</h1>
        </caption>
        <tr>
            <td>Ngày đăng ký</td>
            <td>${time.slice(4)}</td>
        </tr>
        <tr>
            <td>Nhân viên</td>
            <td>${staffName}</td>
        </tr>
        <tr>
            <td>Họ và tên khách</td>
            <td>${userName.value}</td>
        </tr>
        <tr>
            <td>Địa chỉ</td>
            <td>${address.value}</td>
        </tr>
        <tr>
            <td>Tour</td>
            <td>${tour.options[tour.selectedIndex].textContent}</td>
        </tr>
        <tr>
            <td>Ghi chú</td>
            <td>${note.value}</td>
        </tr>
    </table>
    <style>
        #ticketRegisted {
            flex-direction: column;
        }
        th,
        td {
            padding: 4px;
        }
        
        table {
            width: 500px;
        }
        
        caption{
            
            font-weight: bold;
        }
        table {
            border: 1px solid #000;
        }
    </style>`
    let ticketRegister = document.createElement('div', { id: 'ticketRegister' }, '')
    ticketRegister.innerHTML = result
    document.querySelector('#display').appendChild(ticketRegister)
}

export function handldeOnsubmit(form) {
    form.preventDefault()
    document.querySelector('#ticketRegister').style.display = 'none'
    render()
}