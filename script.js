// JavaScript code for crop management

function showInfo(crop) {
    const infoBox = document.getElementById("info-box");
    const infoValue = infoBox.querySelectorAll(".info-value");
    const editInputs = infoBox.querySelectorAll("input[type='text']");

    // Ẩn tất cả input khi không cần thiết
    editInputs.forEach(input => input.style.display = 'none');

    switch (crop) {
        case 'tomato':
            infoValue[0].innerText = '01/01/2024'; // Ngày tháng
            infoValue[1].innerText = 'Giống A'; // Giống
            infoValue[2].innerText = 'Khu 1'; // Khu
            infoValue[3].innerText = '10'; // Số cây
            infoValue[4].innerText = 'Mỗi ngày'; // Tưới cây
            infoValue[5].innerText = '70%'; // Độ ẩm đất
            infoValue[6].innerText = '25°C'; // Nhiệt độ nhà kính
            infoValue[7].innerText = '5'; // Tol
            infoValue[8].innerText = 'Có'; // Mái che
            infoValue[9].innerText = 'Không'; // Sâu, bệnh
            infoValue[10].innerText = '0'; // Số cây chết
            infoValue[11].innerText = 'Phân bón A'; // Phân bón
            infoValue[12].innerText = 'Thuốc sinh học A'; // Thuốc sinh học
            infoValue[13].innerText = '50 cm'; // Chiều cao cây
            infoValue[14].innerText = '5'; // Số lá
            infoValue[15].innerText = 'Chín'; // Tình trạng trái
            infoValue[16].innerText = 'Lớn'; // Kích thước trái
            infoValue[17].innerText = '10/02/2024'; // Ước tính ngày thu hoạch
            break;

        case 'bellPepper':
            infoValue[0].innerText = '02/01/2024'; // Ngày tháng
            infoValue[1].innerText = 'Giống B'; // Giống
            infoValue[2].innerText = 'Khu 2'; // Khu
            infoValue[3].innerText = '20'; // Số cây
            infoValue[4].innerText = 'Mỗi 2 ngày'; // Tưới cây
            infoValue[5].innerText = '80%'; // Độ ẩm đất
            infoValue[6].innerText = '22°C'; // Nhiệt độ nhà kính
            infoValue[7].innerText = '4'; // Tol
            infoValue[8].innerText = 'Có'; // Mái che
            infoValue[9].innerText = 'Không'; // Sâu, bệnh
            infoValue[10].innerText = '1'; // Số cây chết
            infoValue[11].innerText = 'Phân bón B'; // Phân bón
            infoValue[12].innerText = 'Thuốc sinh học B'; // Thuốc sinh học
            infoValue[13].innerText = '40 cm'; // Chiều cao cây
            infoValue[14].innerText = '8'; // Số lá
            infoValue[15].innerText = 'Chín'; // Tình trạng trái
            infoValue[16].innerText = 'Vừa'; // Kích thước trái
            infoValue[17].innerText = '15/02/2024'; // Ước tính ngày thu hoạch
            break;

        case 'strawberry':
            infoValue[0].innerText = '03/01/2024'; // Ngày tháng
            infoValue[1].innerText = 'Giống C'; // Giống
            infoValue[2].innerText = 'Khu 3'; // Khu
            infoValue[3].innerText = '15'; // Số cây
            infoValue[4].innerText = 'Mỗi 3 ngày'; // Tưới cây
            infoValue[5].innerText = '75%'; // Độ ẩm đất
            infoValue[6].innerText = '20°C'; // Nhiệt độ nhà kính
            infoValue[7].innerText = '3'; // Tol
            infoValue[8].innerText = 'Có'; // Mái che
            infoValue[9].innerText = 'Không'; // Sâu, bệnh
            infoValue[10].innerText = '0'; // Số cây chết
            infoValue[11].innerText = 'Phân bón C'; // Phân bón
            infoValue[12].innerText = 'Thuốc sinh học C'; // Thuốc sinh học
            infoValue[13].innerText = '30 cm'; // Chiều cao cây
            infoValue[14].innerText = '6'; // Số lá
            infoValue[15].innerText = 'Chín'; // Tình trạng trái
            infoValue[16].innerText = 'Nhỏ'; // Kích thước trái
            infoValue[17].innerText = '20/02/2024'; // Ước tính ngày thu hoạch
            break;

        case 'grape':
            infoValue[0].innerText = '04/01/2024'; // Ngày tháng
            infoValue[1].innerText = 'Giống D'; // Giống
            infoValue[2].innerText = 'Khu 4'; // Khu
            infoValue[3].innerText = '25'; // Số cây
            infoValue[4].innerText = 'Mỗi ngày'; // Tưới cây
            infoValue[5].innerText = '70%'; // Độ ẩm đất
            infoValue[6].innerText = '24°C'; // Nhiệt độ nhà kính
            infoValue[7].innerText = '6'; // Tol
            infoValue[8].innerText = 'Có'; // Mái che
            infoValue[9].innerText = 'Không'; // Sâu, bệnh
            infoValue[10].innerText = '2'; // Số cây chết
            infoValue[11].innerText = 'Phân bón D'; // Phân bón
            infoValue[12].innerText = 'Thuốc sinh học D'; // Thuốc sinh học
            infoValue[13].innerText = '60 cm'; // Chiều cao cây
            infoValue[14].innerText = '10'; // Số lá
            infoValue[15].innerText = 'Chín'; // Tình trạng trái
            infoValue[16].innerText = 'Lớn'; // Kích thước trái
            infoValue[17].innerText = '30/02/2024'; // Ước tính ngày thu hoạch
            break;
    }
}

let isEditing = false;

function toggleEdit() {
    const editInputs = document.querySelectorAll("input[type='text']");
    const infoValues = document.querySelectorAll(".info-value");

    isEditing = !isEditing;

    if (isEditing) {
        editInputs.forEach(input => input.style.display = 'block');
        infoValues.forEach(value => value.style.display = 'none');
        document.getElementById("updateButton").innerText = "Lưu";
    } else {
        editInputs.forEach(input => input.style.display = 'none');
        infoValues.forEach((value, index) => {
            value.innerText = editInputs[index].value || value.innerText;
            value.style.display = 'inline';
        });
        document.getElementById("updateButton").innerText = "Cập nhật";
    }
}

function openEditModal() {
    document.getElementById("editModal").style.display = "block";
}

function closeEditModal() {
    document.getElementById("editModal").style.display = "none";
}

function confirmDelete() {
    const cropToDelete = document.getElementById("cropToDelete").value;
    const message = document.getElementById("message");

    if (cropToDelete) {
        message.innerText = `${cropToDelete} đã được xóa!`;
    } else {
        message.innerText = 'Vui lòng chọn cây để xóa!';
    }
}

function addNewCrop() {
    const newCrop = document.getElementById("newCrop").value;
    const message = document.getElementById("message");

    if (newCrop) {
        message.innerText = `${newCrop} đã được thêm!`;
        // Có thể thêm logic để thêm cây vào danh sách
    } else {
        message.innerText = 'Tên cây chưa được nhập.';
    }
}
