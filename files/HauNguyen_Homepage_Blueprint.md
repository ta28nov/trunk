# HẬU NGUYỄN — BLUEPRINT TRANG CHỦ
Bổ sung cho `HauNguyen_Design_System.md` (dùng chung token màu, chữ, easing). File này chỉ quy định **bố cục, nhịp cuộn và cách đặt nội dung** của trang chủ.

---

## 1. Triết lý trang chủ

Trang chủ không bán hàng chi tiết. Nó là **trailer**: cho khách thấy công ty trông thế nào, vận hành ra sao, rồi mời họ sang trang con.

1. **Mỗi section chỉ một ý, một hình, một lối đi** (một link sang trang con). Không nhồi.
2. **Khoảng trống là nội dung.** Khoảng trống lớn giữa các chương tạo nhịp thở để khách cuộn.
3. **Bất đối xứng có kỷ luật:** lệch trái – lệch phải luân phiên, nhưng mọi thứ vẫn bám một lưới 12 cột và một lề trái chung.
4. **Không cần vừa một viewport.** Section có thể cao 70svh, 130svh hay 220svh (khi có hiệu ứng pin). Chiều cao khác nhau chính là nhịp.
5. **Một khoảnh khắc "wow" mỗi 2 màn hình cuộn**, không hơn.

---

## 2. Trình tự 9 chương

| # | Chương | Nền | Chiều cao | Điểm nhấn bất đối xứng |
|---|---|---|---|---|
| 1 | Hero banner | kem | 100svh | ảnh tràn phải, chữ lệch trái thấp |
| 2 | Lời giới thiệu | trắng | ~80svh | chữ khổng lồ lệch trái, khoảng trống bên phải |
| 3 | **Video** | kem → navy | 200svh (pin) | khung video mở rộng khi cuộn |
| 4 | Dịch vụ | trắng | tự nhiên | danh sách số so le, ảnh hiện khi hover |
| 5 | Đội xe | kem | ~120svh | cuộn ngang, ảnh khác cỡ |
| 6 | Con số | navy | ~70svh | số khổng lồ cắt mép |
| 7 | Tuyến đường | trắng | ~100svh | route line vàng chạy chéo |
| 8 | Hình ảnh thực tế | kem | tự nhiên | collage lệch, chồng nhẹ |
| 9 | Lời kêu gọi + footer | navy | ~90svh | chữ lớn lệch phải, nút nhỏ |

Nhịp màu nền: **kem → trắng → (kem→navy) → trắng → kem → navy → trắng → kem → navy.** Mỗi lần đổi nền dùng dải chuyển 100px, không cắt cứng.

---

## 3. Lưới và nhịp khoảng trống

```css
.wrap { width: min(100% - 2.5rem, 1320px); margin-inline: auto; }
.grid12 { display: grid; grid-template-columns: repeat(12, 1fr); column-gap: clamp(.75rem, 2vw, 2rem); }

/* Khoảng trống KHÔNG đều: dùng 4 cỡ, xen kẽ */
--gap-s:  clamp(3rem, 2rem + 4vw, 5rem);
--gap-m:  clamp(5rem, 3rem + 8vw, 9rem);
--gap-l:  clamp(7rem, 4rem + 14vw, 14rem);
--gap-xl: clamp(10rem, 6rem + 20vw, 20rem);   /* chỉ trước/sau video và trước CTA */
```
Quy tắc đặt: sau hero `--gap-m` · sau giới thiệu `--gap-l` · quanh video `--gap-xl` · sau dịch vụ `--gap-m` · giữa các chương còn lại xen `--gap-s` / `--gap-m`.

**Bất đối xứng trên lưới (desktop ≥1024px):**
- Chữ chính: cột 1–7. Ảnh phụ: cột 8–12 (hoặc 9–12, đẩy lên cao hơn chữ 4–8rem).
- Chương kế tiếp **đảo bên**: ảnh cột 1–5, chữ cột 7–12.
- Đẩy dọc bằng `margin-top` âm/dương, không dùng `align-items:center` cho cả hai bên.

**Mobile (<768px):** vẫn bất đối xứng nhưng đơn giản: một cột, ảnh lệch bằng `margin-left: 12%` hoặc `margin-right: -1.25rem` (tràn mép phải), chữ giữ lề trái 20px. Không bao giờ chia 2 cột chữ.

---

## 4. Chi tiết từng chương

### Chương 1 — Hero banner (ảnh, không phải video)
Video để dành cho chương 3 để trang tải nhanh và hero rõ ràng.

**Bố cục:**
- Ảnh lớn (xe trắng, ánh vàng hoàng hôn) tràn mép phải, chiếm ~72% chiều rộng desktop; mobile: ảnh cao 62svh tràn hai mép phía trên, chữ nằm dưới.
- Bo góc chỉ ở **một góc lớn** (`border-radius: 0 0 0 120px` hoặc `border-top-left-radius: 160px`) thay vì bo đều, đây là chi tiết nhận diện.
- Logo Hậu Nguyễn ở header. Tiêu đề (`--fs-display`) lệch trái, đặt thấp, **chồng lên** mép ảnh 6–10% (chữ navy, phần chồng lên ảnh đổi màu kem nhờ `mix-blend-mode` hoặc hai lớp clip).
- Một dòng mô tả ≤ 20 từ, **một nút** "Nhận báo giá" + link chữ "Xem đội xe →".
- Góc dưới trái: chỉ báo cuộn là đường dọc vàng 56px chạy lên xuống chậm.

**Nội dung mẫu:**
- Eyebrow: `VẬN TẢI · XÂY DỰNG · DỊCH VỤ`
- Tiêu đề: `Hàng đến đúng nơi,\nđúng giờ.`
- Mô tả: `Hậu Nguyễn vận chuyển hàng hoá bằng đội xe thùng kín, điều phối rõ ràng từ kho đến điểm giao.`

**Vào cảnh:** ảnh `clip-path` mở từ phải sang trái 900ms → tiêu đề từng dòng trượt lên → nút. Tổng ≤ 1.4s.

### Chương 2 — Lời giới thiệu (khoảng trống làm chủ)
- Một câu dài cỡ `--fs-h1`, lệch trái cột 1–9, cột 10–12 để trống hoàn toàn.
- Vài từ khoá tô vàng nhạt bằng gạch nền: `background: linear-gradient(transparent 62%, var(--gold-300) 62%)`.
- Hiệu ứng: từng từ chuyển từ xám nhạt sang navy khi cuộn qua (scroll-linked), người đọc "đọc theo" khi cuộn.
- Dưới cùng lệch phải: link `Về chúng tôi →`.

**Nội dung mẫu:** `Chúng tôi là đơn vị vận tải – xây dựng – dịch vụ, vận hành đội xe thùng kín và điều phối từng chuyến hàng bằng quy trình rõ ràng, để khách hàng yên tâm từ lúc nhận đến lúc giao.`

### Chương 3 — Video (khoảnh khắc chính)
Dùng video đã dựng (`HauNguyen_video_final.mp4`).

**Cơ chế "khung mở rộng":**
1. Section cao `200svh`, bên trong khung `position: sticky; top: 0; height: 100svh`.
2. Ban đầu video là một khung nhỏ **lệch phải** (rộng ~46%, cao 56svh, bo `--radius-lg`).
3. Khi cuộn, khung mở rộng dần đến tràn toàn màn hình (bo giảm về 0), nền trang chuyển kem → navy.
4. Ở trạng thái đầy, một dòng chữ kem hiện lên dưới trái: `Một ngày làm việc tại Hậu Nguyễn`.
5. Hết 200svh, khung bình thường cuộn tiếp.

```css
.video-chapter { height: 200svh; position: relative; }
.video-stage { position: sticky; top: 0; height: 100svh; display: grid; place-items: center; overflow: clip; }
.video-frame { width: 46vw; height: 56svh; margin-left: auto; margin-right: 6vw;
  border-radius: var(--radius-lg); overflow: hidden; will-change: width, height, margin, border-radius; }
.video-frame video { width: 100%; height: 100%; object-fit: cover; }

/* Cuộn điều khiển (Chrome/Edge/Safari mới) */
@supports (animation-timeline: view()) {
  .video-frame { animation: expand linear both; animation-timeline: view(); animation-range: entry 10% cover 55%; }
  @keyframes expand { to { width: 100vw; height: 100svh; margin: 0; border-radius: 0; } }
}
```
Fallback (trình duyệt cũ): bỏ pin, khung video full-width 16:9 hiện bằng `.reveal`.

**Mobile:** khung ban đầu rộng 78vw lệch phải, cao 46svh; mở rộng đến 100vw × 100svh. Giảm chiều cao section còn `160svh` để không cuộn quá dài.

**Phát video:** `muted loop playsinline preload="metadata"`, chỉ `play()` khi vào khung nhìn (IntersectionObserver), `pause()` khi ra. Có `poster`. Có nút bật tiếng nhỏ góc dưới phải.

**Chuẩn bị file video:**
```bash
ffmpeg -i HauNguyen_video_final.mp4 -vf scale=1280:-2 -c:v libx264 -crf 24 -preset slow -an -movflags +faststart hero.mp4
ffmpeg -i HauNguyen_video_final.mp4 -vf scale=1280:-2 -c:v libvpx-vp9 -crf 34 -b:v 0 -an hero.webm
ffmpeg -ss 3 -i HauNguyen_video_final.mp4 -frames:v 1 -q:v 3 poster.jpg
```
(`-an` bỏ âm thanh vì video tự phát tắt tiếng; giữ bản có tiếng riêng nếu cần nút bật tiếng.)

### Chương 4 — Dịch vụ (không dùng lưới thẻ)
- Danh sách 3–4 dòng lớn, mỗi dòng: số `01` (cỡ nhỏ, vàng) + tên dịch vụ `--fs-h1` + mũi tên.
- Các dòng **so le**: dòng 1 bắt đầu cột 1, dòng 2 cột 3, dòng 3 cột 2, dòng 4 cột 4. Đường kẻ mảnh `--cream-200` dưới mỗi dòng.
- Hover (desktop): một ảnh nhỏ bo góc lệch hiện cạnh con trỏ, chữ dịch sang phải 12px. Mobile: bấm mở rộng dòng, hiện ảnh + một câu mô tả + link.
- Một link chung: `Xem tất cả dịch vụ →`.

**Nội dung mẫu:** `01 Vận tải hàng hoá` · `02 Cho thuê xe tải` · `03 Xây dựng` · `04 Dịch vụ kho bãi`
(Thay bằng dịch vụ thật trong phiếu thu thập thông tin của khách.)

### Chương 5 — Đội xe (cuộn ngang)
- Tiêu đề lệch trái trên cùng, mô tả ngắn lệch phải ngay bên cạnh (không canh giữa).
- Dải ảnh xe cuộn ngang bằng `scroll-snap-type: x proximity`, các ảnh **khác cỡ**: cao 360 / 460 / 300 / 420px, canh đáy hơi lệch (`align-items: flex-end` kèm `margin-bottom` khác nhau).
- Dưới mỗi ảnh chỉ một dòng: tên xe + tải trọng.
- Đầu mối trái lề lấy `.wrap`, nhưng dải ảnh **tràn mép phải** màn hình (`padding-right: 0`).
- Mobile: ảnh rộng 78vw, lộ ảnh kế tiếp 12% để gợi ý vuốt.

### Chương 6 — Con số
- Nền navy, 3 con số **khổng lồ** (`clamp(5rem, 14vw, 12rem)`, màu `--gold-300`), mỗi số một dòng, **lệch ngang khác nhau** (0%, 18%, 8% từ lề trái); nhãn nhỏ kem bên cạnh.
- Mép cuối con số cắt nhẹ bởi mép section (`overflow:hidden`) tạo cảm giác lớn.
- Đếm khi vào khung nhìn (xem 6.6 trong Design System).
- Chỉ dùng số **thật**. Chưa có số thì ẩn cả chương, đừng bịa.

### Chương 7 — Tuyến đường
- Một đường nét đứt vàng vẽ chéo từ trái trên xuống phải dưới, **tự vẽ theo cuộn** (`stroke-dashoffset`).
- Trên đường có 3–4 điểm tròn (tên tỉnh/thành), điểm hiện lần lượt khi đường chạm tới.
- Chữ lệch phải, một dòng mô tả + link `Xem các tuyến →`.
- Mobile: đường chạy dọc theo lề trái 20px, điểm và chữ nằm bên phải.

### Chương 8 — Hình ảnh thực tế (collage)
- 5 ảnh khác cỡ, đặt lệch và **chồng nhẹ** 24–48px lên nhau, không ảnh nào cùng kích thước:
  `A: cột 1–5, cao 520` · `B: cột 6–9, cao 360, lệch xuống 6rem` · `C: cột 9–12, cao 460, lệch lên 3rem` · `D: cột 2–4, cao 300, lệch xuống` · `E: cột 7–11, cao 340`.
- Parallax rất nhẹ: mỗi ảnh dịch dọc theo tốc độ khác nhau (±24–60px), chỉ trên desktop.
- Một dòng chú thích nhỏ, lệch, kèm link `Mở thư viện →`.

### Chương 9 — Kêu gọi hành động + Footer
- Nền navy, một câu cỡ `--fs-h1` lệch phải: `Cần vận chuyển? Hãy cho chúng tôi biết tuyến và loại hàng.`
- **Một** nút vàng, một số điện thoại cỡ lớn `--gold-300`, link Zalo.
- Dưới cùng: footer (logo + tên đầy đủ công ty, liên kết, địa chỉ).

---

## 5. Chọn và xử lý ảnh banner

**Chọn ảnh (6–8 tấm, cùng "giọng màu"):**
- Ánh vàng ấm (giờ vàng hoặc nắng sớm), xe trắng/kem, nền ít chi tiết, có khoảng trống để đặt chữ.
- Ưu tiên: 1 ảnh toàn cảnh xe (hero) · 1 ảnh xe di chuyển trên đường · 1 ảnh bốc hàng tại kho · 1–2 ảnh cận cảnh (bánh xe, thùng, bảng điều khiển) · 1 ảnh con người làm việc.
- Loại bỏ ảnh có chữ méo (AI sinh ra chữ sai trên thân xe) hoặc bầu trời xanh lạnh quá gắt.

**Đồng bộ tông:**
```css
.photo { filter: saturate(.92) contrast(1.02) sepia(.05); }
.photo-wrap::after { content:""; position:absolute; inset:0; mix-blend-mode: soft-light;
  background: linear-gradient(180deg, rgba(242,210,122,.18), rgba(20,32,63,.08)); pointer-events:none; }
```
**Kích thước xuất:** hero 2000×1300 · ảnh lớn 1600×1100 · ảnh nhỏ 900×900. WebP, ≤ 220KB mỗi tấm. Đặt tên: `hero-01.webp`, `fleet-01.webp`…

**Quy tắc cắt ảnh:** vật thể chính nằm lệch theo quy tắc một phần ba, chừa mặt ngược hướng chữ để chữ có chỗ thở.

---

## 6. Chuyển động toàn trang (tóm tắt)

| Hiệu ứng | Dùng ở | Cách làm |
|---|---|---|
| Mở clip-path | hero, ảnh lớn | `clip-path: inset()` + `scale(1.06→1)`, 800ms |
| Chữ nhuộm theo cuộn | chương 2 | `animation-timeline: view()` hoặc JS chia từ |
| Khung video mở rộng | chương 3 | sticky + scroll-linked (mục 4) |
| Số đếm | chương 6 | `easeOutExpo` 1.6s, một lần |
| Đường tự vẽ | chương 7 | `stroke-dasharray` + cuộn |
| Parallax nhẹ | chương 8 | `translateY` ±24–60px, tắt trên mobile |

**Giới hạn:** tối đa 3 hiệu ứng "nặng" hiển thị cùng lúc; trên mobile chỉ giữ clip-path, reveal, video mở rộng, đường tự vẽ. Tôn trọng `prefers-reduced-motion` (khung video đứng yên, hiện nội dung ngay).

**Cuộn mượt:** dùng CSS `scroll-behavior: smooth` cho neo; nếu cần quán tính, thêm Lenis (nhẹ, ~3KB) và tắt khi `prefers-reduced-motion`. Không dùng thư viện cuộn nặng.

---

## 7. Điều hướng trong trang chủ

- Header trong suốt trên hero, đổi sang nền kem mờ khi cuộn; **ẩn khi cuộn xuống, hiện khi cuộn lên** (tiết kiệm không gian mobile).
- Thanh CTA dưới (mobile) **ẩn ở hero và chương video**, hiện từ chương 4 trở đi để không che hình.
- Chỉ báo tiến độ: đường vàng mảnh 2px trên đỉnh trang tăng theo cuộn.

---

## 8. Kiểm tra trước khi giao

- [ ] Không cuộn ngang ở 360 / 390 / 768 / 1280 / 1536px.
- [ ] Mỗi chương có đúng 1 link dẫn sang trang con.
- [ ] Hero hiện nội dung trong 1.4s, nút bấm được ngay.
- [ ] Video không phát khi ngoài khung nhìn; có poster; tải trước ≤ 4MB.
- [ ] Mobile: asymmetry vẫn rõ nhưng không vỡ bố cục, chữ không đè lên mặt người/biển số.
- [ ] Chữ trên ảnh đạt tương phản (có lớp phủ hoặc chọn vùng ảnh sáng đều).
- [ ] Lighthouse mobile ≥ 90; LCP < 2.5s; CLS < 0.1.
- [ ] Bật `prefers-reduced-motion` → trang vẫn đẹp và đủ nội dung.

---

## 9. PROMPT DÁN VÀO ANTIGRAVITY

```
Dựng trang chủ cho website "CÔNG TY TNHH XÂY DỰNG VÀ DỊCH VỤ VẬN TẢI HẬU NGUYỄN"
theo HauNguyen_Design_System.md và HauNguyen_Homepage_Blueprint.md.

Mục tiêu: trang chủ là "trailer" giới thiệu và dẫn sang các trang con, tối giản,
nhiều khoảng trống, bố cục bất đối xứng, trải nghiệm cuộn có nhịp.

Bắt buộc:
- 9 chương đúng thứ tự mục 2; nền xen kẽ kem/trắng/navy với dải chuyển 100px.
- Lưới 12 cột, lề trái chung; chữ và ảnh lệch luân phiên; khoảng trống dùng bộ
  --gap-s/m/l/xl, KHÔNG đều nhau.
- Video ở chương 3 dạng khung sticky mở rộng khi cuộn (CSS scroll-driven, có
  fallback IntersectionObserver), poster, muted loop playsinline, chỉ phát khi vào khung nhìn.
- Hero dùng ảnh banner (tràn phải, bo một góc lớn), không dùng video.
- Dịch vụ dạng danh sách số so le; đội xe cuộn ngang ảnh khác cỡ; collage 5 ảnh lệch.
- Mobile-first, kiểm tra 360/390/768/1280/1536px; mobile giữ bất đối xứng ở mức đơn giản.
- Chỉ animate transform/opacity/clip-path; tôn trọng prefers-reduced-motion.
- Dùng đúng token màu/chữ/bo góc/đổ bóng/easing của Design System, không thêm giá trị mới.
- Ảnh WebP có srcset, lazy (trừ hero), khai báo width/height.
Giữ nguyên nội dung hiện có; chỉ đổi giao diện và chuyển động. Cuối cùng liệt kê file đã sửa
và các điểm chưa đạt mục 8.
```
