function resetSection(event) {
    const container = event.target.closest('.container_Pro'); // หากล่องแม่
    if (!container) return;

    // เคลียร์ input ภายใน container
    const inputs = container.querySelectorAll('input[type="text"] , input[type="number"]');
    inputs.forEach(input => input.value = "");

    // เคลียร์ <p> ที่มี id และอยู่ใน container
    const outputs = container.querySelectorAll('p[id]');
    outputs.forEach(p => p.innerHTML = "");
}

// เพิ่ม Event Listener ให้กับปุ่ม reset ทุกปุ่ม
document.querySelectorAll('.reset').forEach(btn => {
    btn.addEventListener('click', resetSection);
});