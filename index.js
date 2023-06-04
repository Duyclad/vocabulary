const list_eng = [
  //HACK NÃO
  // unit 1
  ["usual", "thông thường"],
  ["dust", "quét bụi"],
  ["weekday", "ngày trong tuần"],
  ["pull", "kéo"],
  ["fold", "gấp (quần áo)"],
  ["reach", "với tới"],
  ["iron", "là, ủi"],
  ["upstairs", "tầng trên"],
  ["sweep", "quét"],
  ["elevator", "thang máy"],
  ["turn on", "bật lên"],
  ["receipt", "hóa đơn"],
  ["count", "đếm"],
  ["press", "nhấn"],
  ["hang", "treo, phơi"],
  ["shut", "đóng"],
  ["laundry", "quần áo cần giặt"],
  ["refill", "làm đầy lại"],
  ["put on", "mặc vào"],
  ["role", "vai trò"],
  ["tend", "có xu hướng, thường"],
  ["shower", "việc tắm rửa"],
  ["arrive", "tới nơi"],
  ["typical", "điển hình"],
  ["get up", "thức dậy"],
  ["flow", "chảy, luồng"],
  ["noon", "buổi trưa"],
  ["routine", "nếp sinh hoạt"],
  ["shit", "ca làm"],
  ["come back", "quay lại"],
  // Unit 2
  ["bother", "làm phiền"],
  ["sit around", "ngồi không"],
  ["sun set", "hoàng hôn"],
  ["garbage", "rác"],
  ["midnight", "nửa đêm"],
  ["tough", "khó khăn"],
  ["sleepy", "buồn ngủ"],
  ["slightly", "hơi hơi"],
  ["awake", "tỉnh, tỉnh táo"],
  ["slip", "trượt chân"],
  ["alone", "một mình"],
  ["push", "đẩy"],
  ["knock", "gõ"],
  ["break", "làm vỡ"],
  ["neighbor", "hàng xóm"],
  ["fill up", "lấp đầy"],
  ["stretch", "kéo dãn"],
  ["run out", "hết sạch"],
  ["rest", "lúc nghỉ ngơi"],
  ["spill", "làm đổ"],
  ["flush", "xả nước"],
  ["stay up", "thức muộn"],
  ["breath", "hơi thở"],
  ["sunrise", "bình minh"],
  ["phase", "giai đoạn"],
  ["leisure", "lúc rảnh rỗi"],
  ["series", "phim dài tập"],
  ["snooze", "giấc ngủ ngắn"],
  ["spare", "thừa"],
  ["sleep in", "ngủ nướng"],
  // Unit 3
  ["decline", "từ chối"],
  ["quit", "từ bỏ"],
  ["hang out", "đi chơi"],
  ["exercise", "thể dục"],
  ["calendar", "lịch"],
  ["amazing", "tuyệt vời"],
  ["workplace", "cơ quan"],
  ["patient", "tuyệt vời"],
  ["almost", "hầu như"],
  ["grateful", "thấy biết ơn"],
  ["jogging", "đi bộ thể dục"],
  ["tip", "mẹo"],
  ["necessary", "cần thiết"],
  ["focus", "tập trung"],
  ["estimate", "ước lượng"],
  ["practice", "tập luyện"],
  ["minute", "phút"],
  ["efficient", "có hiệu suất cao"],
  ["burnout", "tình trạng kiệt sức"],
  ["agenda", "danh sách công việc"],
  ["assist", "hỗ trợ"],
  ["productive", "có năng suất"],
  ["workload", "khối lượng công việc"],
  ["news", "tin tức"],
  ["arrange", "sắp xếp"],
  ["follow up", "theo sát"],
  ["discipline", "kỷ luật"],
  ["plan ahead", "lên kế hoạch trước"],
  ["outcome", "kết quả"],
  ["period", "khoảng thời gian"],
  // Unit 4
  ["form", "đơn"],
  ["male", "đàn ông"],
  ["fill out", "điền vào"],
  ["female", "phụ nữ"],
  ["personal", "cá nhân"],
  ["birth", "lúc chào đời"],
  ["information", "thông tin"],
  ["middle", "ở giữa"],
  ["gender", "giới tính"],
  ["correct", "sửa lại"],
  ["nationality", "quốc tịch"],
  ["southern", "phía Nam, phương Nam"],
  ["hometown", "quê quán, quê nhà"],
  ["recently", "gần đây"],
  ["grow up", "lớn lên"],
  ["district", "quận, huyện"],
  ["northern", "phía Bắc, phương Bắc"],
  ["sign", "ký tên"],
  ["province", "tỉnh, thành"],
  ["type", "gõ"],
  ["additional", "thêm"],
  ["identity", "danh tính"],
  ["previous", "trước đó"],
  ["interview", "phỏng vấn"],
  ["live with", "sống cùng với"],
  ["photograph", "ảnh"],
  ["favorite", "yêu thích"],
  ["permanent", "lâu dài"],
  ["introduction", "giới thiệu"],
  ["code", "mã"],
  // Unit 5
  ["career", "sự nghiệp"],
  ["several", "một vài"],
  ["suitable", "phù hợp"],
  ["engineer", "kỹ sư"],
  ["experience", "kinh nghiệm"],
  ["background", "bối cảnh, nền tảng"],
  ["struggle", "gắng sức"],
  ["decide", "quyết định"],
  ["passion", "đam mê"],
  ["inspiration", "cảm hứng"],
  ["develop", "phát triển"],
  ["detail", "chi tiết"],
  ["abroad", "ở nước ngoài"],
  ["specific", "cụ thể"],
  ["fit in", "hòa nhập"],
  ["future", "tương lai"],
  ["freelance", "lao động tự do"],
  ["specialist", "chuyên viên"],
  ["occupation", "nghề nghiệp"],
  ["achievement", "thành tựu"],
  ["acquire", "có được"],
  ["grade", "điểm"],
  ["degree", "bằng cấp"],
  ["primary", "(thuộc cấp) tiểu học"],
  ["suppose", "cho rằng"],
  ["motivation", "động lực"],
  ["attend", "tham dự"],
  ["university", "đại học"],
  ["major", "theo chuyên ngành"],
  ["dream", "mơ ước"],
  // Unit 6
  ["goal", "mục tiêu"],
  ["ability", "khả năng"],
  ["company", "công ty"],
  ["offer", "đưa đề nghị"],
  ["prepare", "chuẩn bị"],
  ["condition", "điều kiện"],
  ["hire", "tuyển dụng"],
  ["salary", "lương"],
  ["position", "vị trí"],
  ["bonus", "khoản thưởng"],
  ["insurance", "bảo hiểm"],
  ["assess", "đánh giá"],
  ["relevant", "liên quan"],
  ["weakness", "điểm yếu"],
  ["stand out", "nổi bật"],
  ["training", "đào tạo"],
  ["duty", "nhiệm vụ"],
  ["evaluate", "đánh giá"],
  ["process", "xử lý"],
  ["look forward to", "mong chờ"],
  ["rule", "luật lệ"],
  ["department", "phòng ban"],
  ["mission", "sứ mệnh"],
  ["temporary", "tạm thời"],
  ["failure", "thất bại"],
  ["appointment", "cuộc hẹn"],
  ["lesson", "bài học"],
  ["official", "chính thức"],
  ["qualify", "đủ tiêu chuẩn"],
  ["potential", "tièm năng"],
  // Unit 7
  ["minute", "phút"],
];

var rd = 0;

function loadVocabulary() {
  changeDisplayNone();
  rd = Math.floor(Math.random() * list_eng.length);
  document.getElementById("eng").innerHTML = list_eng[rd][0];
}

function changeDisplay() {
  // document.getElementById("vie").style.display = "block";
  document.getElementById("vie").innerHTML = list_eng[rd][1].toUpperCase();
}

function changeDisplayNone() {
  //document.getElementById("vie").style.display = "none";
  document.getElementById("vie").innerHTML = "_";
}

$(document).ready(function () {
  $("#sum_vocabulary").html("Tổng số: " + list_eng.length);
  loadVocabulary();
});