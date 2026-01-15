let chieuCao = 160;
let canNangLyTuong = ((chieuCao - 100) * 9) / 10;
let canNangToiDa = chieuCao - 100;
let canNangToiThieu = ((chieuCao - 100) * 8) / 10;

console.log(
  "Cân nặng lý tưởng là",
  canNangLyTuong + ", " + "cân nặng tối đa là",
  canNangToiDa + " và " + "cân nặng tối thiểu là",
  canNangToiThieu
);
