# HẬU NGUYỄN — KẾ HOẠCH CHỈNH SỬA WEBSITE & PROMPT TỔNG

Dùng cùng 2 file: `HauNguyen_Design_System.md` (token, component, animation) và `HauNguyen_Homepage_Blueprint.md` (bố cục trang chủ bất đối xứng).
File này quyết định **nội dung nào đổi, đổi thành gì, theo thứ tự nào**.

---

## 1. TÓM TẮT YÊU CẦU CỦA KHÁCH

| # | Yêu cầu | Cách xử lý |
|---|---|---|
| 1 | Tông **trắng – vàng**, có thể kem | Trắng/kem làm nền, vàng làm nhấn. Navy chỉ làm màu chữ (xem 3.1) |
| 2 | Tập trung **đội xe chuyên dụng Hino thùng kín và thùng bạt** | Đội xe là nhân vật chính của trang chủ, có trang riêng |
| 3 | Bỏ **vốn điều lệ** | Xoá ở mọi nơi: trang Giới thiệu, thẻ thông tin pháp lý, footer, schema |
| 4 | Chèn **ảnh xe thật** ở đầu trang | Hero dùng ảnh xe thật của khách (xem mục 5) |
| 5 | Tuyến chính: **Hà Tĩnh, Nghệ An, Thanh Hoá → các tỉnh phía Bắc, Tây Bắc** | Trang Tuyến đường + dải tuyến ở trang chủ |
| 6 | Chuyên dòng xe **Hino, Hyundai** | Lọc theo hãng, logo chữ thương hiệu ở đội xe |
| 7 | **Giá cước tính theo từng loại xe** | Bảng giá theo loại xe, nút "Báo giá xe này" (xem 4.3) |
| 8 | Thông tin công ty mới | Cập nhật toàn site (mục 2) |
| 9 | **Đổi logo** | Dùng logo HN mới (ảnh `IMG_3937.jpeg`), thay ở header, footer, favicon, ảnh chia sẻ |
| 10 | 3 dòng xe: tải nhỏ, tải trung, tải nặng | Cấu trúc đội xe theo 3 nhóm (mục 4.1) |
| 11 | E ơi
Phần cước xe
E cứ để bên a tự báo giá
Mình ko cần để giá trực tiếp lên trang e ạ
E để cho a mục báo giá để khách nhấp vô là được rồi
Khách nhấp vô phần báo giá sẽ tự động hiện lên zalo của a. A sẽ trực tiếp báo giá e ai
Ạ
---

## 2. THÔNG TIN CÔNG TY (nguồn duy nhất, dùng đúng từng chữ)

```
Tên đầy đủ:  CÔNG TY TNHH XÂY DỰNG VÀ DỊCH VỤ VẬN TẢI HẬU NGUYỄN
Tên ngắn:    Hậu Nguyễn Transport  (hiển thị: "Hậu Nguyễn")
Khẩu hiệu:   Vận tải – Xây dựng – Dịch vụ
Địa chỉ:     92 Đông Xuân, Xã Trường Văn, Tỉnh Thanh Hóa
Hotline:     0823 040 412   (tel:0823040412)
Zalo:        0823 040 412   (https://zalo.me/0823040412)
Email:       nguyenhau1707hhh@gmail.com
Mã số thuế:  2803219353
```
**Bỏ hoàn toàn:** vốn điều lệ, và mọi số liệu cũ của bản demo (số xe, năm kinh nghiệm, số khách hàng) cho đến khi khách xác nhận số thật.

> Lưu ý quan trọng: hồ sơ năng lực ghi công ty **thành lập 13/03/2026**. Vì vậy **không viết "nhiều năm kinh nghiệm"** hay "hàng nghìn chuyến". Thay bằng cam kết cụ thể (đúng giờ, xe thùng kín giữ hàng khô ráo, báo vị trí xe) và số xe thật hiện có.

---

## 3. THAY ĐỔI GIAO DIỆN

### 3.1 Màu (cập nhật so với Design System)
Khách muốn **trắng – vàng**, nên tăng trọng số trắng/kem và giảm navy:

```css
:root{
  --white:#FFFFFF; --cream-50:#FFFCF5; --cream-100:#FAF4E6; --cream-200:#F1E7CF;
  --gold-300:#F2D27A; --gold-500:#D9A21B; --gold-600:#B9840F; --gold-700:#8A610A;
  --ink:#1B2A57;        /* chỉ cho chữ và footer; lấy từ logo để hài hoà */
  --ink-muted:#5B6482;
}
```
Tỉ lệ: **70% trắng/kem · 18% vàng · 12% navy (chữ, footer)**. Nếu khách yêu cầu bỏ hẳn navy, đổi `--ink` thành nâu đậm `#2A2113` và `--ink-muted` thành `#6B6252`; logo vẫn giữ nguyên màu gốc.

### 3.2 Logo
- Dùng ảnh logo HN mới. Ảnh gốc chỉ rộng 803px: **xin file gốc (SVG/PNG nền trong suốt)** từ người thiết kế logo. Trong lúc chờ, dùng bản PNG hiện có, đặt cao ≤ 48px để không bị vỡ.
- Header: logo chữ HN + "HẬU NGUYỄN" (cao 40px mobile / 48px desktop). Footer: logo + **tên đầy đủ công ty**.
- Favicon: chỉ chữ **HN** cắt từ logo trên nền trắng, 512×512; thêm `apple-touch-icon` 180×180.
- Ảnh chia sẻ (Open Graph) 1200×630: ảnh xe + logo.

### 3.3 Chuyển động và bố cục
Áp dụng nguyên Design System mục 6 và Homepage Blueprint mục 4–6. Điều chỉnh riêng:
- Chương Dịch vụ của trang chủ thay bằng chương **Đội xe** (to hơn, lên trước).
- Chương Con số: chỉ dùng số thật; chưa có thì ẩn.

---

## 4. NỘI DUNG THEO TRANG

### 4.1 Đội xe (trọng tâm)

Khách có **3 dòng xe** và **5 mức tải**. Khách chưa nói mức nào thuộc nhóm nào, đề xuất sau (cần khách xác nhận):

| Nhóm | Tải trọng | Thể tích thùng | Loại thùng | Hãng |
|---|---|---|---|---|
| **Tải nhỏ** | 3,5 tấn | 18 khối | Thùng kín / thùng bạt* | Hyundai / Hino* |
| **Tải trung** | 6 tấn | 35 khối | Thùng kín / thùng bạt* | Hino / Hyundai* |
| **Tải trung** | 8 tấn | 55 khối | Thùng kín / thùng bạt* | Hino* |
| **Tải nặng** | 10 tấn | 60 khối | Thùng kín / thùng bạt* | Hino* |
| **Tải nặng** | 15 tấn | 60 khối | Thùng kín / thùng bạt* | Hino* |

`*` = **chưa xác nhận**. Không hiển thị cột nào còn dấu `*` trên website cho đến khi khách trả lời (xem mục 8). Cột "Hãng" và "Loại thùng" cho từng mức tải phải theo thực tế đội xe.

**Thẻ xe (card):**
- Ảnh xe (4:3), tên: `Xe tải 6 tấn · Thùng kín`, thẻ nhỏ: `Hino`.
- Thông số: Tải trọng `6 tấn` · Thể tích `35 khối` · Loại thùng · Phù hợp chở gì (1 dòng).
- Nút: `Báo giá xe này →` (mở form có sẵn chọn xe đó).
- Bộ lọc phía trên: **Tất cả · Thùng kín · Thùng bạt** và **Hino · Hyundai**.

**Khối so sánh thùng kín và thùng bạt** (ngắn, 2 cột lệch nhau):
- *Thùng kín:* hàng khô ráo, chống mưa nắng và bụi, an toàn hàng hoá giá trị, hợp hàng tiêu dùng, điện máy, nội thất.
- *Thùng bạt:* linh hoạt hàng cồng kềnh, xếp dỡ nhiều hướng, hợp vật liệu, nông sản, hàng dài.
(Nội dung phổ thông về hai loại thùng; khách nên rà lại cho đúng thực tế.)

### 4.2 Tuyến đường
- **Điểm đi thường xuyên:** Hà Tĩnh · Nghệ An · Thanh Hoá.
- **Điểm đến:** các tỉnh phía Bắc và Tây Bắc. Nếu khách liệt kê tỉnh cụ thể, hiển thị làm điểm trên đường nét đứt vàng; **không tự điền tên tỉnh khi chưa được xác nhận**.
- Hiển thị: đường nét đứt vàng từ ba điểm đi hội tụ lên phía Bắc, hiện dần khi cuộn.
- Dòng chữ: `Xuất phát thường xuyên từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc và Tây Bắc.`
- Nút: `Hỏi lịch xe tuyến này →` (Zalo).

### 4.3 Bảng giá cước theo loại xe
Khách chưa đưa số giá. **Không bịa giá.** Làm khung sẵn:

| Loại xe | Tuyến (từ → đến) | Giá cước | Hành động |
|---|---|---|---|
| Tải 3,5 tấn · 18 khối | chọn | `Liên hệ báo giá` | Báo giá |
| Tải 6 tấn · 35 khối | chọn | `Liên hệ báo giá` | Báo giá |
| Tải 8 tấn · 55 khối | chọn | `Liên hệ báo giá` | Báo giá |
| Tải 10 tấn · 60 khối | chọn | `Liên hệ báo giá` | Báo giá |
| Tải 15 tấn · 60 khối | chọn | `Liên hệ báo giá` | Báo giá |

Dòng giải thích: `Giá cước tính theo từng loại xe, quãng đường và loại hàng. Gọi 0823 040 412 để nhận báo giá nhanh.`
Cấu trúc dữ liệu để sau này khách điền giá chỉ cần sửa một file: `data/fleet.json` (mỗi xe có `price` hoặc `null`). `null` thì hiển thị "Liên hệ báo giá".
Mobile: bảng chuyển thành thẻ dọc, không cuộn ngang.

### 4.4 Giới thiệu
- Xoá: vốn điều lệ.
- Giữ: tên đầy đủ, địa chỉ, mã số thuế, lĩnh vực (vận tải, xây dựng, dịch vụ).
- Đoạn mở đầu gợi ý: `Hậu Nguyễn là đơn vị vận tải tại Thanh Hóa, chuyên xe thùng kín và thùng bạt dòng Hino và Hyundai, nhận hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc và Tây Bắc.`

### 4.5 Liên hệ
- Hotline, Zalo, email, địa chỉ ở mục 2; bản đồ nhúng vị trí **92 Đông Xuân, Trường Văn, Thanh Hóa**.
- Form ngắn: Họ tên · Số điện thoại · Loại xe (chọn) · Điểm đi → điểm đến · Loại hàng. Gửi xong hiện lời cảm ơn và nút gọi.
- Thanh CTA cố định dưới màn hình mobile: `Gọi ngay` · `Zalo`.

### 4.6 Thư viện
Xem mục 5. Chỉ dùng ảnh thật.

---

## 5. ẢNH XE (đã tách sẵn từ hồ sơ năng lực)

Đã đặt trong thư mục `anh-xe/` (hoặc file `anh-xe-hau-nguyen.zip`):

| File | Nội dung | Dùng cho |
|---|---|---|
| `hyundai-thung-kin-01-chinh-dien` | Hyundai thùng kín, xanh, chính diện sạch | **Hero**, thẻ xe tải nhỏ/trung |
| `hyundai-thung-kin-02/03/04/05` | Cùng xe, nhiều góc | Thẻ xe, thư viện, collage |
| `hino-thung-kin-trang-va-xe-thung-bat-01/02/03` | Hino thùng kín trắng, kèm xe thùng bạt phía sau | **Khối thùng kín và thùng bạt**, hero phụ |
| `hyundai-co-bang-ron-01/02` | Xe có băng rôn của đơn vị khác | **Không dùng** ở hero (xem dưới) |

**Cần biết trước khi dùng:**
1. Trong hồ sơ chỉ có **khoảng 3 cảnh xe thật** (Hyundai thùng kín xanh, Hino thùng kín trắng, xe thùng bạt). Chưa có ảnh riêng cho đủ 5 mức tải. Cần khách chụp thêm: mỗi mức tải một ảnh chính diện + một ảnh nghiêng, nắng đẹp, nền sạch.
2. Ảnh chỉ rộng khoảng 1000–1280px. Làm hero rộng toàn màn hình sẽ hơi mềm. Dùng ảnh trong khung vừa (như bố cục Blueprint) hoặc **xin ảnh gốc từ điện thoại** (thường 3–4MB, nét hơn nhiều).
3. Một số ảnh có **băng rôn xanh của đơn vị khác** trên thùng xe. Không đặt ở hero. Nếu bắt buộc, cắt bỏ hoặc xin ảnh khác.
4. Các trang 1–9 của hồ sơ năng lực là ảnh minh hoạ cảng container, **không phải xe của Hậu Nguyễn**. Không lấy để làm banner, vì sai với thực tế (xe Hino/Hyundai thùng kín, thùng bạt).
5. Biển số xe trong ảnh: nên làm mờ nhẹ khi đưa lên web công khai.
6. Đồng bộ màu ảnh theo Homepage Blueprint mục 5 (ấm, giảm bão hoà xanh).

**Hero đầu trang (bắt mắt, sinh động):**
- Một ảnh lớn (Hyundai thùng kín chính diện) tràn mép phải, bo một góc lớn.
- Hai ảnh nhỏ chồng lệch ở góc dưới trái ảnh lớn (Hino trắng; góc xiên Hyundai), mỗi ảnh vào cảnh trễ 150ms.
- Một dải chữ chạy chậm phía dưới: `HINO · HYUNDAI · THÙNG KÍN · THÙNG BẠT · HÀ TĨNH · NGHỆ AN · THANH HOÁ → BẮC · TÂY BẮC` (tốc độ chậm, dừng khi hover, tắt khi `prefers-reduced-motion`).
- Tiêu đề gợi ý: `Xe thùng kín & thùng bạt\nHino · Hyundai.` Mô tả: `Vận chuyển hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc và Tây Bắc. Giá cước theo từng loại xe.`
- Nút chính `Nhận báo giá`, nút phụ `Xem đội xe`.
- Video đã dựng (`HauNguyen_video_final.mp4`) vẫn dùng ở chương video của trang chủ. Lưu ý các cảnh quay là hình do AI sinh, xe không phải xe thật của công ty. Nên ghi nhãn "Hình ảnh minh hoạ" trong chú thích video, hoặc thay bằng video quay xe thật khi có.

---

## 6. KẾ HOẠCH LÀM VIỆC (2 bên cùng theo)

| Giai đoạn | Việc | Ai làm | Xong khi |
|---|---|---|---|
| **0. Chốt dữ liệu** | Trả lời danh sách mục 8; gửi ảnh gốc và logo vector | Khách | Có đủ dữ liệu cho `fleet.json` |
| **1. Nền tảng** | Token màu/chữ/bo góc, logo, favicon, thông tin công ty, **xoá vốn điều lệ** | Dev | Toàn site đúng màu và đúng thông tin |
| **2. Trang chủ** | Hero ảnh xe, chương Đội xe, video, tuyến, CTA | Dev | Đủ 9 chương theo Blueprint |
| **3. Đội xe + Bảng giá** | Trang đội xe, bộ lọc, thẻ xe, bảng giá `Liên hệ báo giá` | Dev | Lọc đúng, form nhận loại xe |
| **4. Tuyến + Liên hệ + Giới thiệu** | Đường tuyến, form, bản đồ, nội dung mới | Dev | Gọi/Zalo bấm được |
| **5. Kiểm thử** | 5 kích thước màn hình, Lighthouse mobile ≥ 90, rà chính tả tiếng Việt | Dev + Khách duyệt | Khách duyệt bản cuối |
| **6. Điền giá thật** | Cập nhật `price` trong `fleet.json` | Khách đưa số, Dev nhập | Bảng giá hiển thị số |

**Thứ tự ưu tiên nếu thiếu thời gian:** (1) thông tin công ty + xoá vốn điều lệ + logo → (2) hero ảnh xe + đội xe → (3) form báo giá + CTA gọi/Zalo → (4) tuyến → (5) hiệu ứng nâng cao.

---

## 7. SEO CỤC BỘ & KỸ THUẬT

- `<title>` trang chủ: `Hậu Nguyễn – Vận tải xe Hino, Hyundai thùng kín, thùng bạt | Thanh Hóa`
- Meta description (≤ 155 ký tự): `Xe tải Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn. Chạy Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc, Tây Bắc. Hotline 0823 040 412.`
- Schema `LocalBusiness` (name, address, telephone, email, areaServed); **không đưa vốn điều lệ vào schema**.
- `alt` ảnh mô tả thật: `Xe tải Hino thùng kín màu trắng tại kho`.
- Nút gọi `tel:`, Zalo, email `mailto:` đều bấm được.
- Mỗi trang đúng một `h1`.

---


---

## 9. PROMPT TỔNG DÁN VÀO ANTIGRAVITY

```
Bạn là Senior UI/UX Designer + Frontend Engineer. Hãy chuyển website demo thành
website thật cho "CÔNG TY TNHH XÂY DỰNG VÀ DỊCH VỤ VẬN TẢI HẬU NGUYỄN", theo 3 file đính kèm:
HauNguyen_Design_System.md, HauNguyen_Homepage_Blueprint.md và HauNguyen_Ke_hoach_va_Prompt.md.

MỤC TIÊU
Website tập trung vào ĐỘI XE CHUYÊN DỤNG HINO / HYUNDAI THÙNG KÍN VÀ THÙNG BẠT,
nhận hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc, Tây Bắc.
Giá cước tính theo từng loại xe. Phong cách: trắng – vàng (kem), sạch, bất đối xứng,
nhiều khoảng trống, mobile-first.

VIỆC PHẢI LÀM (theo thứ tự)
1. Thông tin công ty: thay toàn site theo mục 2 của file kế hoạch (tên, địa chỉ, hotline,
   Zalo, email, MST). Thông tin lấy từ MỘT file `data/company.json`.
2. XOÁ HOÀN TOÀN "vốn điều lệ" ở mọi trang, component, footer, schema, meta.
   Xoá cả các số liệu demo (số xe, năm kinh nghiệm, số khách) nếu chưa có dữ liệu thật.
3. Logo: thay bằng logo HN mới (assets/logo). Header, footer (kèm tên đầy đủ), favicon,
   og-image.
4. Màu: dùng token mục 3.1 (trắng/kem + vàng, navy chỉ làm chữ). Xoá mọi màu rời rạc.
5. Trang chủ: 9 chương theo Blueprint, thay chương Dịch vụ bằng chương ĐỘI XE.
   Hero dùng ảnh xe thật ở thư mục anh-xe/ (ảnh lớn + 2 ảnh nhỏ chồng lệch + dải chữ chạy chậm).
   KHÔNG dùng ảnh có băng rôn đơn vị khác ở hero. KHÔNG dùng ảnh cảng container.
6. Đội xe: dữ liệu từ `data/fleet.json` (id, name, group[nhỏ|trung|nặng], tonnage, volume_m3,
   body[kín|bạt], brand[Hino|Hyundai], image, suitable_for, price|null).
   Bộ lọc theo loại thùng và hãng. Thẻ xe có nút "Báo giá xe này" mở form đã chọn xe.
   CHỈ hiển thị các trường đã xác nhận; trường chưa có thì ẩn, KHÔNG tự bịa.
7. Bảng giá: khung theo từng loại xe; price = null thì hiện "Liên hệ báo giá".
   Mobile: bảng chuyển thành thẻ dọc.
8. Tuyến đường: điểm đi Hà Tĩnh / Nghệ An / Thanh Hóa, điểm đến "các tỉnh phía Bắc, Tây Bắc".
   Đường nét đứt vàng vẽ khi cuộn. Không tự thêm tên tỉnh chưa được xác nhận.
9. Liên hệ: form (họ tên, SĐT, loại xe, điểm đi → đến, loại hàng), bản đồ 92 Đông Xuân, Trường Văn,
   Thanh Hóa, thanh CTA cố định dưới màn hình mobile (Gọi ngay / Zalo).
10. SEO: title, description, schema LocalBusiness (không có vốn điều lệ), alt ảnh có nghĩa, một h1/trang.

DỮ LIỆU CỨNG (không được thay đổi)
- Tải: 3,5 tấn 18 khối · 6 tấn 35 khối · 8 tấn 55 khối · 10 tấn 60 khối · 15 tấn 60 khối.
- 3 nhóm xe: tải nhỏ, tải trung, tải nặng (nhóm theo từng mức tải: chờ khách xác nhận;
  tạm dùng 3,5t = nhỏ; 6t và 8t = trung; 10t và 15t = nặng).
- Công ty thành lập 13/03/2026: TUYỆT ĐỐI không viết "nhiều năm kinh nghiệm" hay số liệu chưa có.

KỸ THUẬT & CHẤT LƯỢNG
- Mobile-first; kiểm tra 360 / 390 / 768 / 1280 / 1536px, không cuộn ngang.
-animate transform/opacity/clip-path; tôn trọng prefers-reduced-motion.
- Ảnh WebP, srcset, lazy (trừ hero), có width/height; video có poster, muted loop playsinline,
  chỉ phát khi vào khung nhìn. Video ghi chú "Hình ảnh minh hoạ".
- Lighthouse mobile ≥ 90; LCP < 2.5s; CLS < 0.1. Chữ tiếng Việt đủ dấu, line-height tiêu đề ≥ 1.2.

KẾT THÚC
Liệt kê: (a) file đã sửa, (b) dữ liệu đang chờ khách xác nhận (mục 8), (c) điểm chưa đạt chuẩn.
Không tự bịa số liệu, tên tỉnh, giá cước hay ảnh.
```
