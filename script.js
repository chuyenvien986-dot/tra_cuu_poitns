/** * HỆ THỐNG QUẢN LÝ QUÂN SỐ VPAR - KHANGKHAN99
 * Hướng dẫn: Sửa thông tin trong mảng 'militaryData' bên dưới.
 */

const UNIT_INFO = {
    name: "LỰC LƯỢNG ĐẶC NHIỆM VPAR - ĐƠN VỊ SỐ 1",
    code: "VPAR-VN"
};

// 1. DANH SÁCH TÙY CHỈNH TỪNG NGƯỜI
// Bạn có thể thêm/sửa cho đủ 500 người tại đây
const militaryData = [
    { stt: 1, rbxName: "khangkhan99", id: "VPAR-001", rank: "Co-owner", points: 999.999.999 },
    { stt: 2, rbxName: "Subinsunhi28", id: "VPAR-002", rank: "Trung Úy", points: 5 },
    { stt: 3, rbxName: "LONGKHUNG75", id: "VPAR-003", rank: "Trung Tướng", points: 0 },
    { stt: 4, rbxName: "cuben_phanthiet", id: "VPAR-004", rank: "Owner", points: 9999999999.99 },
    { stt: 5, rbxName: "NA", id: "VPAR-005", rank: "Civilian", points: .... },
    
];


function fillTo500() {
    const currentLength = militaryData.length;
    if (currentLength < 500) {
        for (let i = currentLength + 1; i <= 500; i++) {
            militaryData.push({
                stt: i,
                rbxName: `Chưa gán tên ${i}`,
                id: `${UNIT_INFO.code}-${1000 + i}`,
                rank: "Binh Nhì",
                points: 0
            });
        }
    }
}


function renderSystem() {
    
    const ledText = document.getElementById('led-unit');
    ledText.innerText = `>>> ĐƠN VỊ: ${UNIT_INFO.name} | QUẢN TRỊ: KHANGKHAN99 | BẢN QUYỀN VPAR VỮNG MẠNH <<<`;

    const tableBody = document.getElementById('user-list');
    tableBody.innerHTML = "";

    const fragment = document.createDocumentFragment();

    militaryData.forEach(user => {
        const tr = document.createElement('tr');
        
        
        let pointStyle = user.points >= 5000 ? "color: #00ff00; font-weight: bold;" : "color: #f1c40f;";
        
        tr.innerHTML = `
            <td>${user.stt}</td>
            <td style="color: #3498db;">${user.rbxName}</td>
            <td><code>${user.id}</code></td>
            <td class="rank-cell">${user.rank}</td>
            <td style="${pointStyle}">${user.points.toLocaleString()}</td>
        `;
        fragment.appendChild(tr);
    });

    tableBody.appendChild(fragment);
}


document.getElementById('searchInput').addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = militaryData.filter(u => 
        u.rbxName.toLowerCase().includes(keyword) || 
        u.id.toLowerCase().includes(keyword) ||
        u.rank.toLowerCase().includes(keyword)
    );
    
    
    const tableBody = document.getElementById('user-list');
    tableBody.innerHTML = "";
    filtered.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${user.stt}</td><td>${user.rbxName}</td><td>${user.id}</td><td>${user.rank}</td><td>${user.points}</td>`;
        tableBody.appendChild(tr);
    });
});


fillTo500();
renderSystem();
                                         
