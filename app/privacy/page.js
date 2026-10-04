import company from "../data/company.json";

export const metadata = {
  title: "Chính Sách Bảo Mật Thông Tin",
  description: "Chính sách bảo mật thông tin khách hàng và dữ liệu vận chuyển hàng hóa tại Hậu Nguyễn Transport.",
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh", padding: "4rem 1.25rem 6rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#FFFFFF", padding: "clamp(2rem, 4vw, 3.5rem)", borderRadius: "16px", boxShadow: "0 4px 24px rgba(20, 32, 63, 0.06)", border: "1px solid var(--cream-200)" }}>
        <span style={{ fontSize: "0.8125rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold-600)", display: "block", marginBottom: "0.5rem" }}>
          MINH BẠCH & PHÁP LÝ
        </span>
        <h1 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--navy-900)", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          Chính Sách Bảo Mật Thông Tin
        </h1>

        <div style={{ color: "var(--text)", lineHeight: "1.75", fontSize: "0.95rem" }}>
          <p style={{ marginBottom: "1.25rem" }}>
            <strong>CÔNG TY TNHH XÂY DỰNG VÀ DỊCH VỤ VẬN TẢI HẬU NGUYỄN</strong> (sau đây gọi tắt là &ldquo;Hậu Nguyễn Transport&rdquo;) cam kết bảo mật tuyệt đối thông tin cá nhân và dữ liệu hàng hóa, lộ trình vận chuyển của Quý khách hàng theo quy định của pháp luật Việt Nam.
          </p>

          <h2 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginTop: "2rem", marginBottom: "0.75rem" }}>
            1. Mục đích thu thập thông tin
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Chúng tôi thu thập thông tin của khách hàng (họ tên, số điện thoại, địa chỉ nhận/giao hàng, loại hàng hóa, tải trọng, thông tin hóa đơn doanh nghiệp) chỉ phục vụ cho các mục đích:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
            <li>Khảo sát cung đường và tư vấn báo giá dịch vụ vận chuyển chính xác.</li>
            <li>Phát hành lệnh điều xe, hợp đồng vận chuyển, biên bản bàn giao (POD) và hóa đơn GTGT.</li>
            <li>Cập nhật tiến độ hành trình xe lăn bánh và liên hệ giao nhận hai đầu bến bãi.</li>
            <li>Hỗ trợ xử lý bồi thường hoặc giải quyết sự cố phát sinh (nếu có).</li>
          </ul>

          <h2 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginTop: "2rem", marginBottom: "0.75rem" }}>
            2. Cam kết không chia sẻ dữ liệu với bên thứ ba
          </h2>
          <p style={{ marginBottom: "1.25rem" }}>
            Hậu Nguyễn Transport làm việc trực tiếp với khách hàng, sở hữu đội xe và ban điều xe nội bộ. Chúng tôi <strong>tuyệt đối không bán, chia sẻ hoặc chuyển giao</strong> thông tin khách hàng hay bí mật thương mại về nguồn hàng cho bất kỳ trung gian, môi giới hay đối thủ cạnh tranh nào.
          </p>

          <h2 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginTop: "2rem", marginBottom: "0.75rem" }}>
            3. Bảo mật chứng từ và biên bản bàn giao
          </h2>
          <p style={{ marginBottom: "1.25rem" }}>
            Hợp đồng vận tải, biên lai kẹp chì, ảnh chụp niêm phong thùng xe và biên bản giao nhận hàng (POD) được lưu trữ an toàn trong hệ thống dữ liệu điều vận, phục vụ việc đối soát công nợ và tra cứu thuế của doanh nghiệp.
          </p>

          <h2 style={{ fontSize: "1.25rem", color: "var(--navy-900)", marginTop: "2rem", marginBottom: "0.75rem" }}>
            4. Thông tin liên hệ giải đáp
          </h2>
          <p style={{ marginBottom: "0.5rem" }}>
            Mọi thắc mắc về chính sách bảo mật thông tin, Quý khách vui lòng liên hệ:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
            <li><strong>Đơn vị:</strong> {company.name}</li>
            <li><strong>Mã số thuế:</strong> {company.taxCode}</li>
            <li><strong>Địa chỉ:</strong> {company.address}</li>
            <li><strong>Hotline / Zalo điều xe:</strong> {company.hotline}</li>
            <li><strong>Email:</strong> {company.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
