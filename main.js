// Bài 5
let btnHomQua = document.querySelector("#btnhqua");
let btnMai = document.querySelector("#btnmai");

const checkDate = (date, value) => {
  let getDate = new Date(date);
  console.log(date);

  if (value !== "homqua" && value !== "mai" && value !== "calc")
    return getDate !== "Invalid Date" && !isNaN(new Date(date));
  if (value === "homqua") getDate.setDate(getDate.getDate() - 1);
  if (value === "mai") getDate.setDate(getDate.getDate() + 1);
  if (value === "calc") {
    getDate.setMonth(getDate.getMonth() + 1);
    return getDate.getUTCDate();
  }

  return getDate;
};

const clickCheck = (value) => {
  let day = document.querySelector("#day").value;
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;
  let infosapxep = document.querySelector("#infosapxep");

  if (year < 1920) return alert("Năm cần lớn hơn 1920!");

  let result = `${month}/${day}/${year}`;
  let isValidDate = checkDate(result);

  if (!isValidDate) return alert("Dữ liệu không hợp lệ!");

  return (infosapxep.innerHTML = checkDate(result, value).toLocaleDateString());
};

btnHomQua.addEventListener("click", () => clickCheck("homqua"));
btnMai.addEventListener("click", () => clickCheck("mai"));

// Bài 6
let btnTinh = document.querySelector("#btnTinh");

const calcDate = () => {
  let month2 = document.querySelector("#month2").value;
  let year2 = document.querySelector("#year2").value;
  let infosapxep2 = document.querySelector("#infosapxep2");

  if (year2 < 1920) return alert("Năm cần lớn hơn 1920!");
  let result = `${month2}/1/${year2}`;
  let isValidDate = checkDate(result);
  if (!isValidDate) return alert("Dữ liệu không hợp lệ!");

  return (infosapxep2.innerHTML = `Tháng ${month2}, Năm ${year2} có ${checkDate(
    result,
    "calc"
  )} ngày`);
};

btnTinh.addEventListener("click", () => calcDate());
