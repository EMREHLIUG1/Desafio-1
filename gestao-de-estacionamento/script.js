
function saveReservation() {
    const plate = document.getElementById('plate').value;
    const owner = document.getElementById('owner').value;
    const apartmentNumber = document.getElementById('apartmentNumber').value;
    const block = document.getElementById('block').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const parkingNumber = document.getElementById('parkingNumber').value;
    
    if (parkingNumber < 0 || parkingNumber > 100 || isNaN(parkingNumber)) {
        alert("Por favor, selecione um número de vaga válido entre 0 e 100.");
        return;}

    const reservation = {
        placa: plate,
        proprietário: owner,
        'número do apartamento': apartmentNumber,
        bloco: block,
        'modelo do veículo': model,
        'cor do veículo': color,
        'número da vaga': parkingNumber
    };

    console.log("Reserva salva:");
    console.log(reservation);
    alert("Cadastro realizado com sucesso!");
}


const reservations = [
    {
        plate: "AXF3489",
        owner: "Cleison da Silva",
        apartmentNumber: "43",
        block: "C",
        model: "Lamborghini Huracan",
        color: "Dourado",
        parkingNumber: 23
    },
    {
        plate: "ZQD3421",
        owner: "Marta Gomes",
        apartmentNumber: "301",
        block: "A",
        model: "Porsche 911",
        color: "Vermelho",
        parkingNumber: 14
    }
];

window.onload = function() {
    listReservations();
};

function listReservations() {
    const vagasList = document.getElementById('vagasList');
    vagasList.innerHTML = '';

    reservations.forEach(reservation => {
        const reservationItem = document.createElement('div');
        reservationItem.classList.add('reservation-item');
        reservationItem.innerHTML = `
            <p><strong>Placa:</strong> ${reservation.plate}</p>
            <p><strong>Proprietário:</strong> ${reservation.owner}</p>
            <p><strong>Número do Apartamento:</strong> ${reservation.apartmentNumber}</p>
            <p><strong>Bloco:</strong> ${reservation.block}</p>
            <p><strong>Modelo do Veículo:</strong> ${reservation.model}</p>
            <p><strong>Cor do Veículo:</strong> ${reservation.color}</p>
            <p><strong>Número da Vaga:</strong> ${reservation.parkingNumber}</p>
        `;
        vagasList.appendChild(reservationItem);
    });
}


function goToListPage() {
    window.location.href = "listar.html";
}


function goToReservationPage() {
    window.location.href = "cadastro.html";
}

function goToListPage() {
    window.location.href = "listar.html";
}

function goToReservationPage() {
    window.location.href = "cadastro.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const listButton = document.getElementById('listButton');
    const reservationButton = document.getElementById('reservationButton');

    if (listButton) {
        listButton.addEventListener('click', function() {
            goToListPage();
        });
    }

    if (reservationButton) {
        reservationButton.addEventListener('click', function() {
            goToReservationPage();
        });
    }
});