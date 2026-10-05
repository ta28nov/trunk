import company from "../data/company.json";

export const metadata = {
  title: "Quy Chế Giao Nhận & Giải Quyết Khiếu Nại",
  description: "Quy chuẩn giao nhận, trách nhiệm vận hành và quy trình giải quyết khiếu nại của Hậu Nguyễn Transport.",
};

export default function TermsPage() {
  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh", padding: "4rem 1.25rem 6rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#FFFFFF", padding: "clamp(2rem, 4vw, 3.5rem)", borderRadius: "16px", boxShadow: "0 4px 24px rgba(20, 32, 63, 0.06)", border: "1px solid var(--cream-200)" }}>
        <span style={{ fontSize: "0.8125rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold-600)", display: "block", marginBottom: "0.5rem" }}>
          QUY TRÌNH &amp; CHÍNH SÁCH DỊCH VỤ
        </span>
        <h1 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--navy-900)", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          Quy Chế Giao Nhận &amp; Giải Quyết Khiếu Nại
        </h1>

        <div style={{ color: "var(--text)", lineHeight: "1.75", fontSize: "0.95rem" }}>
          {/* Transparent Policy Banner */}
          <div style={{ background: "rgba(217, 162, 27, 0.08)", border: "1.5px solid var(--gold-500)", borderRadius: "12px", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <h3 style={{ color: "var(--navy-900)", fontSize: "1.1rem", margin: "0 0 0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span>🛡️</span> Cam Kết Trách Nhiệm Vận Chuyển Hàng Hóa
            </h3>
            <p style={{ margin: 0, color: "var(--text)", fontSize: "0.925rem" }}>
              Hậu Nguyễn Transport cam kết thực hiện trách nhiệm bảo quản hàng hóa trên suốt hành trình; trường hợp phát sinh hư hỏng, thất thoát do lỗi vận hành hoặc sơ suất của đội xe, việc bồi thường thiệt hại được thực hiện căn cứ theo thỏa thuận cụ thể tại hợp đồng vận chuyển và quy định của pháp luật hiện hành.
            </p>
          </div>

          <h2 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginTop: "2rem", marginBottom: "0.75rem" }}>
            1. Quy cách tiếp nhận và kiểm đếm hàng hóa
          </h2>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Khách hàng cung cấp đầy đủ hóa đơn, chứng từ hợp lệ đi kèm hàng hóa trước khi bốc xếp lên xe.</li>
            <li>Tài xế cùng đại diện chủ hàng kiểm đếm số lượng kiện hàng, kiểm tra ngoại quan và ký nhận vào biên bản giao nhận đầu lấy.</li>
            <li>Đối với xe thùng bạt: Bạt phủ 2 lớp kín nước, dây tăng đơ siết chặt chống xô lệch trên đèo dốc.</li>
            <li>Đối với xe thùng kín: Khóa chốt an toàn và niêm phong kẹp chì (seal chì) có số hiệu ghi rõ trên biên bản.</li>
          </ul>

          <h2 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginTop: "2rem", marginBottom: "0.75rem" }}>
            2. Trách nhiệm vận hành trên hành trình
          </h2>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Đội xe Hino &amp; Hyundai thế hệ mới, vận hành xuyên suốt không sang xe chuyển tải dọc đường.</li>
            <li>Lái xe chuyên nghiệp am hiểu cung đường đèo dốc phía Bắc và Tây Bắc, luôn kiểm tra áp suất lốp và phanh tại các điểm nghỉ chân.</li>
            <li>Cập nhật định vị GPS và thông báo tình trạng xe đến chủ hàng 24/7.</li>
          </ul>

          <h2 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginTop: "2rem", marginBottom: "0.75rem" }}>
            3. Bàn giao và ký biên bản giao nhận (POD)
          </h2>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Người nhận kiểm tra số lượng, tem niêm phong và ngoại quan kiện hàng trước khi ký biên bản bàn giao (POD).</li>
            <li>Trường hợp phát hiện hàng có dấu hiệu va đập hoặc rách bạt, hai bên lập biên bản xác nhận hiện trường ngay tại vị trí dỡ hàng.</li>
            <li>Hậu Nguyễn Transport hỗ trợ xuất hóa đơn GTGT đầy đủ sau khi hoàn tất thủ tục bàn giao.</li>
          </ul>

          <h2 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginTop: "2rem", marginBottom: "0.75rem" }}>
            4. Quy trình tiếp nhận và giải quyết khiếu nại, tranh chấp
          </h2>
          <p style={{ marginBottom: "0.75rem" }}>
            Hậu Nguyễn Transport tuân thủ Luật Thương mại điện tử 2025 (Luật số 122/2025/QH15), Nghị định 248/2026/NĐ-CP và các quy định của pháp luật hiện hành về cung cấp dịch vụ thương mại:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li><strong>Thời hạn gửi khiếu nại:</strong> Trong vòng 03 ngày làm việc kể từ thời điểm ký biên bản bàn giao hàng hóa (POD).</li>
            <li><strong>Hình thức tiếp nhận:</strong> Qua Hotline trực ban <strong>{company.hotline}</strong> hoặc văn bản/hình ảnh gửi tới email chính thức: <strong>{company.email}</strong>.</li>
            <li><strong>Thời gian xử lý:</strong> Ban điều vận Hậu Nguyễn sẽ xác minh dữ liệu hành trình GPS, biên bản hiện trường và phản hồi phương án bồi thường trong vòng 24–48 giờ làm việc.</li>
            <li><strong>Nguyên tắc thương lượng:</strong> Mọi tranh chấp phát sinh được ưu tiên giải quyết thông qua thương lượng hòa giải thiện chí. Trường hợp không đạt được thỏa thuận, vụ việc sẽ được đưa ra Tòa án nhân dân có thẩm quyền tại Tỉnh Thanh Hóa để giải quyết theo luật định.</li>
          </ul>

          <h2 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginTop: "2rem", marginBottom: "0.75rem" }}>
            5. Đơn vị sở hữu và chịu trách nhiệm pháp lý
          </h2>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
            <li><strong>Tên pháp nhân:</strong> {company.name}</li>
            <li><strong>Người đại diện theo pháp luật:</strong> Nguyễn Hậu</li>
            <li><strong>Mã số doanh nghiệp:</strong> {company.taxCode} do Sở KH&amp;ĐT Tỉnh Thanh Hóa cấp ngày 13/03/2026</li>
            <li><strong>Hotline điều xe 24/7:</strong> {company.hotline}</li>
            <li><strong>Email:</strong> {company.email}</li>
            <li><strong>Trụ sở chính:</strong> {company.address}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
