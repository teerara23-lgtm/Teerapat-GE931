# AI Learning Portfolio — GE931

เว็บไซต์ Portfolio ธีม AI สำหรับนำไปฝากบน GitHub Pages

## สำคัญมาก: ต้องอัปโหลดทั้งโฟลเดอร์
ปัญหารูปไม่ขึ้นและหน้า 404 มักเกิดจากอัปโหลดเฉพาะ `index.html` แต่ไม่ได้อัปโหลดโฟลเดอร์ `assets`

โครงสร้างที่ถูกต้องต้องเป็นแบบนี้:

```text
repository/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── GE931-portfolio.pdf
    ├── slide-01.jpg
    ├── slide-02.jpg
    ├── ...
    └── slide-36.jpg
```

## วิธีแก้ 404 และรูปไม่ขึ้น
1. เปิด Repository บน GitHub
2. กด **Add file → Upload files**
3. ลาก `index.html`, `style.css`, `script.js` และ **โฟลเดอร์ `assets` ทั้งโฟลเดอร์** ขึ้นไปพร้อมกัน
4. กด **Commit changes**
5. ไปที่ **Settings → Pages**
6. ที่ **Build and deployment** เลือก **Deploy from a branch**
7. เลือก branch `main` และ folder `/ (root)`
8. กด **Save** และรอสักครู่
9. เปิด URL GitHub Pages ของ Repository อีกครั้ง

### ถ้ายังเห็น 404
ตรวจสอบว่า `index.html` อยู่ที่ระดับบนสุดของ Repository ไม่ได้อยู่ในโฟลเดอร์ซ้อน เช่น `ai-learning-portfolio/index.html`

### ถ้ารูปยังไม่ขึ้น
ตรวจสอบว่ามีไฟล์ เช่น `assets/slide-03.jpg`, `assets/slide-05.jpg`, `assets/slide-09.jpg` ฯลฯ อยู่จริงใน Repository และชื่อไฟล์ตัวพิมพ์เล็ก/ใหญ่ตรงกันทุกตัว

### ถ้ากด “ดูสไลด์ต้นฉบับ” แล้ว 404
ต้องมีไฟล์ `assets/GE931-portfolio.pdf` อยู่ใน Repository ด้วย เว็บไซต์ใช้ path แบบ relative (`./assets/...`) เพื่อให้ทำงานบน GitHub Pages ได้

## หมายเหตุ
อย่าอัปโหลดแค่ไฟล์ HTML ไฟล์เดียว เพราะภาพและ PDF ถูกเรียกจากโฟลเดอร์ `assets`
