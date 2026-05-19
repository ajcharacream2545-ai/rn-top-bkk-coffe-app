# rn-top-bkk-coffee-app 👋

แอปพลิเคชันแนะนำร้านกาแฟยอดนิยมในกรุงเทพฯ (Top Bangkok Coffee) พัฒนาด้วย **React Native (Expo)** ร่วมกับ **Supabase** ในการจัดการฐานข้อมูลและการดึงข้อมูลแบบ Real-time บันทึกข้อมูลพิกัด เบอร์โทรศัพท์ และรูปภาพร้านคาแฟ่อย่างครบถ้วน

---

## 📱 Screenshots (หน้าจอการทำงานของแอปพลิเคชัน)

<p align="center">
  <img src="https://github.com/user-attachments/assets/166d8aa4-08be-416b-b519-b1858d029142" width="260" alt="Splash Screen"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/1447b17b-27b1-4021-91f1-3cc2ddf8bdf4" width="260" alt="Home Screen"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/b0cbaf68-5361-41fb-b678-0ae5790f2e3a" width="260" alt="Detail Screen 1"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/359ebb9a-da86-4617-8c8d-9ec8bc892658" width="260" alt="Detail Screen 2"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/0c944797-f46d-4f23-9404-d852e18b11ab" width="260" alt="Map Screen"/>
</p>

---

## ✨ Features (คุณสมบัติเด่นของแอปพลิเคชัน)

* **Splash Screen:** หน้าต้อนรับเข้าสู่แอปพลิเคชันพร้อมอนิเมชัน Loading สวยงามก่อนเข้าสู่หน้าหลัก
* **Coffee Shop Directory:** ดึงข้อมูลรายชื่อร้านกาแฟชั้นนำ 10 ร้านจาก Supabase Database มาแสดงผลอัตโนมัติพร้อมระบบจัดเรียงตามชื่อร้าน
* **Detailed Information:** แสดงรายละเอียดเชิงลึกของแต่ละคาเฟ่ เช่น เขตพื้นที่, รีวิวอธิบายร้าน, และเบอร์โทรศัพท์ที่สามารถกดดูได้
* **Interactive Map Integration:** มีระบบปักหมุดตำแหน่ง (Marker) บนแผนที่ด้วยค่า Latitude และ Longitude จริง เพื่อนำทางไปยังร้านกาแฟได้อย่างแม่นยำ

---

## 🛠️ Tech Stack & Tools (เครื่องมือที่ใช้ในการพัฒนา)

* **Frontend:** React Native, TypeScript, Expo Router
* **Backend & Database:** Supabase (PostgreSQL)
* **Icon Library:** Expo Vector Icons (Ionicons)
* **Design & Layout:** StyleSheet (Flexbox)
