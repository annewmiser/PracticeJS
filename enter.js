
// เรียกใข้ function เมื่อโหลดหน้าเว็ปเพจ addEventListener แนบเหตุการณ์ เรียกใช้ Function
document.addEventListener("DOMContentLoaded" , function () {
    // รับ parameter เป็น Event 
   addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            // เลือก input กำหนด div ที่เป็น parent .contai_Pro
            const input = event.target;
            const container = input.closest('.container_Pro');
            // ถ้าไม่ใช้ของ input ของ .container_Pro ใด ให้หยุดทันที
            if(!container) return;
            // เลือก seractor button ที่ไม่ใช้ class="reset"
            const sendButton = container.querySelector("button:not(.reset)");
            // เรียกใช้งาน Method click()
            if (sendButton) {
                sendButton.click();
            }
           
        }
        
    });
});


